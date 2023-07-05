import { TEffectItem, TEffectExport } from '../../types';
import { createCanvas } from 'canvas';

type TEffectOptions = {
    intensity: number;
};

const defaultIntensity = 8;

const global: TEffectItem = async ({ data, width, height }, options = null) =>
{
    const { intensity = defaultIntensity } = (options || {}) as TEffectOptions;

    const canvas = createCanvas(width, height);
    const context = canvas.getContext('2d');

    let imgData: any = null;

    if(typeof window !== 'undefined')
    {
        imgData = new ImageData(new Uint8ClampedArray(data), width, height);
        context?.putImageData(imgData, 0, 0);
    } else {
        imgData = context.createImageData(width, height);
        imgData.data.set(data);
        context.putImageData(imgData, 0, 0);
    }

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
    browser: global,
    node: global
};

export { pixelate };
