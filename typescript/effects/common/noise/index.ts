import { TEffectItem, TEffectExport, TPixelOp } from '../../../types';

type TEffectOptions = {
    intensity?: number;
    ratio?: number;
};

const defaultIntensity = 10;

const pixelOp: TPixelOp<TEffectOptions> = ({ index, data }, options = null): void => {
    const { intensity = defaultIntensity, ratio = null } = (options || {}) as TEffectOptions;
    const intensityRatio = ratio ? ratio : intensity / 100;

    for(let j = 0; j < 3; j++) {
        const noise = Math.random() * 2 - 1;
        const adjustedNoise = noise * intensityRatio;
        const newColorChannelValue = data[index + j] + adjustedNoise * 255;
        data[index + j] = Math.max(0, Math.min(255, newColorChannelValue));
    }
};

const global: TEffectItem = async ({ data }, options = null) => {
    const { intensity = defaultIntensity, ratio = null } = (options || {}) as TEffectOptions;
    const intensityRatio = ratio ? ratio : intensity / 100;

    for(let i = 0; i < data.length; i += 4) {
        pixelOp({ index: i, data }, { ratio: intensityRatio })
    }

    return data;
};

const noise: TEffectExport = {
    name: 'noise',
    browser: global,
    node: global,
    pixelOp: pixelOp as TPixelOp
};

export { noise };
