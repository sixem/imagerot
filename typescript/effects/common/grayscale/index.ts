import { TEffectItem, TEffectExport } from '../../../types';

type TEffectOptions = {
    intensity?: number;
};

const defaultIntensity = 1;

const global: TEffectItem = async ({ data }, options = null) => {
    const { intensity = defaultIntensity } = (options || {}) as TEffectOptions;

    for (let i = 0; i < data.length; i += 4) {
        let r = data[i], g = data[i + 1], b = data[i + 2];
        let gray = 0.299 * r + 0.587 * g + 0.114 * b;

        data[i] = r * (1 - intensity) + gray * intensity;
        data[i + 1] = g * (1 - intensity) + gray * intensity;
        data[i + 2] = b * (1 - intensity) + gray * intensity;
    }

    return data;
};

const grayscale: TEffectExport = {
    name: 'grayscale',
    browser: global,
    node: global
};

export { grayscale };
