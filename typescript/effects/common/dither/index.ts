import { TEffectItem, TEffectExport, TEffectOptions } from '../../../types';

const defaultIntensity = 0.5;

const global: TEffectItem = async ({ data, width, height }, options = null) => {
    const { intensity = defaultIntensity } = (options || {}) as TEffectOptions;
    const pixelCount = width * height;

    for(let i = 0; i < pixelCount; i++) {
        const index = i * 4;
        const grayscale = (data[index] + data[index + 1] + data[index + 2]) / 3;
        data[index] = data[index + 1] = data[index + 2] = grayscale;
    }

    for(let i = 0; i < pixelCount; i++) {
        const index = i * 4;

        const oldPixel = data[index];
        const newPixel = oldPixel > ((intensity as number) * 255) ? 255 : 0;
        const quantError = oldPixel - newPixel;

        data[index] = newPixel;

        if(index + 4 < data.length)
            data[index + 4] = data[index + 4] + quantError * 7 / 16;

        if(index + (width * 4) < data.length)
            data[index + (width * 4)] = data[index + (width * 4)] + quantError * 5 / 16;

        if(index + (width * 4) + 4 < data.length)
            data[index + (width * 4) + 4] = data[index + (width * 4) + 4] + quantError * 1 / 16;

        if(index + (width * 4) - 4 >= 0)
            data[index + (width * 4) - 4] = data[index + (width * 4) - 4] + quantError * 3 / 16;

            data[index + 1] = data[index + 2] = data[index];
    }

    return new Uint8Array(data);
};

const dither: TEffectExport = {
    name: 'dither',
    browser: global,
    node: global
};

export { dither };
