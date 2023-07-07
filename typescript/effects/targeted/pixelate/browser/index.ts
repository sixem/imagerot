import { TEffectItem, TEffectExport } from '../../../../types';
import { removeAlphaChannel } from '../../../../helpers';

const defaultIntensity = 8;

const browser: TEffectItem = async ({ data, width, height }, options = null) =>
{
    const { intensity = defaultIntensity } = (options || {}) as any;

    const canvas = new OffscreenCanvas(width, height);
    const context = canvas.getContext('2d');
    const imgData = new ImageData(new Uint8ClampedArray(data), width, height);

    context?.putImageData(imgData, 0, 0);

    const pCanvas = new OffscreenCanvas(width, height);
    const pContext = pCanvas.getContext('2d');

    if(!context || !pContext)
    {
        throw new Error('Failed to obtain context');
    }

    pContext.imageSmoothingEnabled = false;
    pContext.drawImage(canvas, 0, 0, width / intensity, height / intensity);
    pContext.drawImage(pCanvas, 0, 0, width / intensity, height / intensity, 0, 0, width, height);

    const pixelatedData = pContext.getImageData(0, 0, width, height).data;

    return removeAlphaChannel(new Uint8Array(pixelatedData.buffer));
};

const pixelate: TEffectExport = {
    name: 'pixelate',
    browser: browser
};

export { pixelate };
