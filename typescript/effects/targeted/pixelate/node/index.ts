import { createCanvas } from 'canvas';
import { TEffectItem, TEffectExport } from '../../../../types';

type TEffectOptions = {
    intensity: number;
};

const defaultIntensity = 8;

const node: TEffectItem = async ({ data, width, height }, options = null) =>
{
    const { intensity = defaultIntensity } = (options || {}) as TEffectOptions;

    const canvas = createCanvas(width, height);
    const context = canvas.getContext('2d');

    let imgData: any = null;

    imgData = context.createImageData(width, height);
    imgData.data.set(data);
    context.putImageData(imgData, 0, 0);

    const pCanvas = createCanvas(width, height);
    const pContext = pCanvas.getContext('2d');

    pContext.imageSmoothingEnabled = false;
    pContext.drawImage(canvas, 0, 0, width / intensity, height / intensity);
    pContext.drawImage(pCanvas, 0, 0, width / intensity, height / intensity, 0, 0, width, height);

    const pixelatedData = pContext.getImageData(0, 0, width, height).data;

    return new Uint8Array(pixelatedData.buffer);
};

const pixelate: TEffectExport = {
    name: 'pixelate',
    node: node
};

export { pixelate };
