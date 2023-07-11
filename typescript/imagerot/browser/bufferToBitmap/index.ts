import { IRotItem } from '../../../types';

type TBufferToBlobHandler = (params: IRotItem) => Promise<ImageBitmap>;

const bufferToBitmap: TBufferToBlobHandler = async ({ data, width, height }) => {
    const imgData = new ImageData(new Uint8ClampedArray(data), width, height);
    const canvas = new OffscreenCanvas(width, height);
    const context = canvas.getContext('2d');

    if(!context) {
        throw new Error('Unable to get canvas context');
    }

    context.putImageData(imgData, 0, 0);

    return createImageBitmap(canvas);
};

export { bufferToBitmap };
