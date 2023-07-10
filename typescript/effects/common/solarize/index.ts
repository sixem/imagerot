import { TEffectItem, TEffectExport, TPixelOp } from '../../../types';

interface TEffectOptions {
    intensity?: number;
}

const defaultIntensity = 0.5;

const solarization = (value: number, intensity: number): number => {
    const threshold = Math.floor(intensity * 255);
    return value < threshold ? value : 255 - value;
};

const pixelOp: TPixelOp<TEffectOptions> = ({ index, data }, options = null): void => {
    const { intensity = defaultIntensity } = (options || {}) as TEffectOptions;
    const r = data[index], g = data[index + 1], b = data[index + 2];

    data[index] = solarization(r, intensity);
    data[index + 1] = solarization(g, intensity);
    data[index + 2] = solarization(b, intensity);
    data[index + 3] = data[index + 3];
};

const global: TEffectItem = async ({ data }, options = null) => {
    const { intensity = defaultIntensity } = (options || {}) as TEffectOptions;

    for(let i = 0; i < data.length; i += 4) {
        pixelOp({ index: i, data }, { intensity });
    }

    return data;
};

const solarize: TEffectExport = {
    name: 'solarize',
    browser: global,
    node: global,
    pixelOp: pixelOp
};

export { solarize };
