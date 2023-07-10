import { TEffectItem, TEffectExport, TEffectOptions } from '../../../types';

const defaultIntensity = 0.5;

const global: TEffectItem = async ({ data, width, height }, options = null) => {
    const { intensity = defaultIntensity } = (options || {}) as TEffectOptions;

    for(let i = 0; i < data.length; i += 4) {
        const grayscale = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = data[i + 1] = data[i + 2] = grayscale;
    }

    for(let i = 0; i < data.length; i += 4) {
        const nPixel = data[i] > ((intensity as number) * 255) ? 255 : 0;
        const quantError = data[i] - nPixel;

        data[i] = nPixel;

        if(i + 4 < data.length)
            data[i + 4] = data[i + 4] + quantError * 7 / 16;

        if(i + (width * 4) < data.length)
            data[i + (width * 4)] = data[i + (width * 4)] + quantError * 5 / 16;

        if(i + (width * 4) + 4 < data.length)
            data[i + (width * 4) + 4] = data[i + (width * 4) + 4] + quantError * 1 / 16;

        if(i + (width * 4) - 4 >= 0)
            data[i + (width * 4) - 4] = data[i + (width * 4) - 4] + quantError * 3 / 16;

            data[i + 1] = data[i + 2] = data[i];
    }

    return new Uint8Array(data);
};

const dither: TEffectExport = {
    name: 'dither',
    browser: global,
    node: global
};

export { dither };
