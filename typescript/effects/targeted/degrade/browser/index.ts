import { TEffectItem, TEffectExport } from '../../../../types';

type TEffectOptions = {
    quality: number;
};

const defaultQuality = 0.075;

const browser: TEffectItem = async ({ data, width, height }, options = null) => {
    const { quality = defaultQuality } = (options || {}) as TEffectOptions;
    const globalScope = typeof window !== 'undefined' ? window : self;
    const canvas = new OffscreenCanvas(width, height);
    const context = canvas.getContext('2d');

    if (!context) {
        throw new Error('Failed to obtain context');
    }

    const imageData = new ImageData(new Uint8ClampedArray(data.buffer), width, height);
    context.putImageData(imageData, 0, 0);

    const degradedBlob = await canvas.convertToBlob({
        type: 'image/jpeg', quality
    });

    const imageBitmap = await globalScope.createImageBitmap(degradedBlob);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(imageBitmap, 0, 0);
    const degradedImageData = context.getImageData(0, 0, width, height);

    return new Uint8Array(degradedImageData.data.buffer);
};

const degrade: TEffectExport = {
    name: 'degrade',
    browser: browser
};

export { degrade };
