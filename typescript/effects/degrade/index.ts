import { IEffectHandler } from '../../types';

type TEffectOptions = {
    quality: number;
};

const defaultQuality = 0.075;

const degrade: IEffectHandler = async ({ data, width, height }, options = null) => {
    const { quality = defaultQuality } = (options || {}) as TEffectOptions;

    const isNodeEnvironment = typeof window === 'undefined';
    
    let Canvas: any;
    let Image: any;

    if(isNodeEnvironment) {
        ({ Canvas, Image } = await import('canvas'));
    }

    const createCanvas = (width: number, height: number) => isNodeEnvironment
        ? new Canvas(width, height)
        : new OffscreenCanvas(width, height);
    
    const createImageBitmap = (blob: Blob) => isNodeEnvironment
        ? Promise.resolve(new Image(blob))
        : window.createImageBitmap(blob);

    const blobToBuffer = async (blob: Blob, width: number, height: number): Promise<Uint8Array> => {
        const imageBitmap = await createImageBitmap(blob);
        const canvas = createCanvas(width, height);
        const context = canvas.getContext('2d');

        if(!context) {
            throw new Error('Failed to obtain context');
        }

        context.drawImage(imageBitmap, 0, 0);
        const imageData = context.getImageData(0, 0, width, height);

        return new Uint8Array(imageData.data.buffer);
    };

    const canvas = createCanvas(width, height);
    const context = canvas.getContext('2d');

    if(!context) {
        throw new Error('Failed to obtain context');
    }

    const imageData = new ImageData(new Uint8ClampedArray(data.buffer), width, height);
    context.putImageData(imageData, 0, 0);

    const degradedBlob = isNodeEnvironment ? canvas.toBuffer() : await canvas.convertToBlob({
        type: 'image/jpeg', quality
    });

    return await blobToBuffer(degradedBlob, width, height);
};

export { degrade };
