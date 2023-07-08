import { TEffectItem, TEffectExport } from '../../../types';

type TEffectOptions = {
    brightness?: number;
};

const defaultBrightness = 10;

const global: TEffectItem = async ({ data }, options = null) => {
    let { brightness = defaultBrightness } = (options || {}) as TEffectOptions;

    brightness *= 2.55;

    const newData = new Uint8Array(data);

    for(let i = 0; i < newData.length; i += 4) {
        for(let j = 0; j < 3; j++) {
            let newColorChannelValue = newData[i + j] + brightness;
            newData[i + j] = Math.max(0, Math.min(255, newColorChannelValue));
        }
    }

    return newData;
};

const brightness: TEffectExport = {
    name: 'brightness',
    browser: global,
    node: global
};

export { brightness };
