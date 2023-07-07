const urlToBuffer = async (url: string): Promise<[Uint8Array | null, number, number]> => {
    const response = await fetch(url);
    const imageBlob = await response.blob();

    const imageBitmap = await createImageBitmap(imageBlob);

    const canvas = new OffscreenCanvas(imageBitmap.width, imageBitmap.height);
    const context = canvas.getContext('2d');

    if(context) {
        context.drawImage(imageBitmap, 0, 0, imageBitmap.width, imageBitmap.height);
        const imageData = context.getImageData(0, 0, imageBitmap.width, imageBitmap.height);

        return [
            new Uint8Array(imageData.data.buffer),
            imageBitmap.width,
            imageBitmap.height
        ];
    }
    
    throw new Error('Failed to get context');
};

export { urlToBuffer };
