import { TEffectItem, TEffectExport } from '../../../../types';
import { createCanvas, Image } from 'canvas';

type TEffectOptions = {
    quality: number;
};

const defaultQuality = 0.075;

const node: TEffectItem = async ({ data, width, height }, options = null) => {
    const { quality = defaultQuality } = (options || {}) as TEffectOptions;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext('2d');

    const imageData = context.createImageData(width, height);
    imageData.data.set(data);
    context.putImageData(imageData, 0, 0);

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

const degrade: TEffectExport = {
    name: 'degrade',
    node: node
};

export { degrade };
