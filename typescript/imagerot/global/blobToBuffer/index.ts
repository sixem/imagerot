const blobToBuffer = async (blob: Blob, width: number, height: number): Promise<Uint8Array> => {
    const imageBitmap = await createImageBitmap(blob);
    const offscreenCanvas = new OffscreenCanvas(width, height);
    const context = offscreenCanvas.getContext('2d');

    if(!context) {
        throw new Error('Failed to obtain context from `OffscreenCanvas`');
    }

    context.drawImage(imageBitmap, 0, 0);

    const imageData = context.getImageData(0, 0, width, height);

    return new Uint8Array(imageData.data.buffer);
};

export {
    blobToBuffer
};
