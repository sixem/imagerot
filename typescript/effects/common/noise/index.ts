import { TEffectItem, TEffectExport } from '../../../types';

type TEffectOptions = {
    intensity?: number;
};

const defaultIntensity = 10;

const global: TEffectItem = async ({ data }, options = null) => {
    const { intensity = defaultIntensity } = (options || {}) as TEffectOptions;
    const intensityRatio = intensity / 100;

    const newData = new Uint8Array(data);

    for(let i = 0; i < newData.length; i += 4) {
        for(let j = 0; j < 3; j++) {
            const noise = Math.random() * 2 - 1;
            const adjustedNoise = noise * intensityRatio;
            const newColorChannelValue = newData[i + j] + adjustedNoise * 255;
            newData[i + j] = Math.max(0, Math.min(255, newColorChannelValue));
        }
    }
    return newData;
};

const noise: TEffectExport = {
    name: 'noise',
    browser: global,
    node: global
};

export { noise };
