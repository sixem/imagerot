import { BufferHandlerParams } from '../../types';

type BufferToImageHandler = (params: BufferHandlerParams & {
    canvas: OffscreenCanvas;
}) => Promise<string>;

const bufferToBlob: BufferToImageHandler = async ({ data, width, height, canvas }) =>
{
    const context = canvas.getContext('2d');

    const clampedArray = new Uint8ClampedArray(data.buffer);
    const imageData = new ImageData(clampedArray, width, height);

    context?.putImageData(imageData, 0, 0);

    return canvas.convertToBlob().then((blob) =>
    {
        if(blob)
        {
            const url = URL.createObjectURL(blob);
            return url;
        } else {
            throw new Error('Failed to create Blob from canvas image');
        }
    }).catch((error: Error) =>
    {
        throw error;
    });
};

export {
    bufferToBlob
};