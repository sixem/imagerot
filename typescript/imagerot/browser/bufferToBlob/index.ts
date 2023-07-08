import { IRotItem } from '../../../types';

type TBufferToBlobHandler = (params: IRotItem) => Promise<string>;

const bufferToBlob: TBufferToBlobHandler = async ({ data, width, height }) => {
    const canvas = new OffscreenCanvas(width, height);
    const context = canvas.getContext('2d');

    const clampedArray = new Uint8ClampedArray(data.buffer);
    const imageData = new ImageData(clampedArray, width, height);

    context?.putImageData(imageData, 0, 0);

    return canvas.convertToBlob().then((blob) => {
        if(blob) {
            return URL.createObjectURL(blob);
        } else {
            throw new Error('Failed to create Blob from canvas image');
        }
    });
};

export { bufferToBlob };
