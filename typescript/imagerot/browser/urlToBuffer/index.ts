const urlToBuffer = async (url: string): Promise<[Uint8Array | null, number, number]> => {
    const response = await fetch(url);
    const imageBlob = await response.blob();

    const imageLoadPromise: Promise<HTMLImageElement> = new Promise((resolve, reject) => {
        const image = new Image();

        image.onload = () => resolve(image);
        image.onerror = reject;
        image.src = URL.createObjectURL(imageBlob);
    });

    const image = await imageLoadPromise;

    const canvas = new OffscreenCanvas(image.width, image.height);
    const context = canvas.getContext('2d');

    context?.drawImage(image, 0, 0, image.width, image.height);
    const imageData = context?.getImageData(0, 0, image.width, image.height);

    URL.revokeObjectURL(image.src);

    return [
        imageData ? new Uint8Array(imageData.data.buffer) : null,
        image.width || 0,
        image.height || 0
    ];
};

export { urlToBuffer };
