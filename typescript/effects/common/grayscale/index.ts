import { TEffectItem, TEffectExport } from '../../../types';

type TEffectOptions = {
    intensity?: number;
};

const defaultIntensity = 1;

const global: TEffectItem = async ({ data }, options = null) => {
    const { intensity = defaultIntensity } = (options || {}) as TEffectOptions;

    let grayData = new Uint8Array(data);

    for (let i = 0; i < data.length; i += 4) {
        let gray = intensity * (0.299 * Number(data[i]) + 0.587 * Number(data[i+1]) + 0.114 * Number(data[i+2]));
        gray = Math.min(255, gray);
        grayData[i] = grayData[i + 1] = grayData[i + 2] = gray;
        grayData[i + 3] = data[i + 3];
    }

    return grayData;
};

const grayscale: TEffectExport = {
    name: 'grayscale',
    browser: global,
    node: global
};

export { grayscale };
