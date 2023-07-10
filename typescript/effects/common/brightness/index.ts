import { TEffectItem, TEffectExport, TPixelOp } from '../../../types';

type TEffectOptions = {
    brightness?: number;
};

const defaultBrightness = 10;

const pixelOp: TPixelOp<TEffectOptions> = ({ index, data }, options = null): void => {
    let { brightness = defaultBrightness } = (options || {}) as TEffectOptions;
    brightness *= 2.55

    for(let j = 0; j < 3; j++) {
        let newColorChannelValue = data[index + j] + brightness;
        data[index + j] = Math.max(0, Math.min(255, newColorChannelValue));
    }
};

const global: TEffectItem = async ({ data }, options = null) => {
    let { brightness = defaultBrightness } = (options || {}) as TEffectOptions;
    brightness *= 2.55;

    for(let i = 0; i < data.length; i += 4) {
        pixelOp({ index: i, data }, { brightness });
    }

    return data;
};

const brightness: TEffectExport = {
    name: 'brightness',
    browser: global,
    node: global,
    pixelOp: pixelOp
};

export { brightness };
