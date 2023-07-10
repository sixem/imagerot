import { TEffectItem, TEffectExport } from '../../../types';
import { rgbToHsv, hsvToRgb } from '../../../helpers';

type TEffectOptions = {
    shift?: number;
};

const defaultShift = 180;

const global: TEffectItem = async ({ data }, options = null) => {
    const { shift = defaultShift } = (options || {}) as TEffectOptions;
    
    for(let i = 0; i < data.length; i += 4) {
        let hsv = rgbToHsv(data[i], data[i + 1], data[i + 2]);
        hsv[0] = (hsv[0] + shift / 360.0) % 1;
        let rgb = hsvToRgb(hsv[0], hsv[1], hsv[2]);
        
        data[i] = rgb[0];
        data[i + 1] = rgb[1];
        data[i + 2] = rgb[2];
        data[i + 3] = data[i + 3];
    }

    return data;
};

const hueShift: TEffectExport = {
    name: 'hueShift',
    browser: global,
    node: global
};

export { hueShift };
