import { TEffectItem, TEffectExport } from '../../types';
import { createCanvas, Image } from 'canvas';

type TEffectOptions = {
    quality: number;
};

const defaultQuality = 0.075;

const node: TEffectItem = async ({ data, width, height }, options = null) => {
    const { quality = defaultQuality } = (options || {}) as TEffectOptions;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext('2d');

    const imgData = context.createImageData(width, height);
    imgData.data.set(data);
    context.putImageData(imgData, 0, 0);

    const degradedImage = canvas.toBuffer('image/jpeg', {
        quality
    });

    const img = new Image();
    img.src = degradedImage;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, 0, 0, img.width, img.height);
    const degradedImageData = context.getImageData(0, 0, width, height);

    return new Uint8Array(degradedImageData.data);
};

const browser: TEffectItem = async ({ data, width, height }, options = null) => {
    const { quality = defaultQuality } = (options || {}) as TEffectOptions;
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

    const imageBitmap = await window.createImageBitmap(degradedBlob);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(imageBitmap, 0, 0);
    const degradedImageData = context.getImageData(0, 0, width, height);

    return new Uint8Array(degradedImageData.data.buffer);
};


const degrade: TEffectExport = {
    name: 'degrade',
    browser: browser,
    node: node
};

export { degrade };
