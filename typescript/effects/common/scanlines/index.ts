import { TEffectItem, TEffectExport } from '../../../types';

type TEffectOptions = {
    opacity?: number,
    thickness?: number,
    lines?: number
};

const defaultOpacity = 0.5;
const defaultThickness = 1;
const defaultLines = 10;

const global: TEffectItem = async ({ data, width, height }, options = null) => {
    const {
        opacity = defaultOpacity,
        thickness = defaultThickness,
        lines = defaultLines,
    } = (options || {}) as TEffectOptions;

    const scanlinePixelAmount = Math.floor(height / lines);

    for(let i = 0; i < data.length; i += 4) {
        let currentLine = Math.floor((i / 4) / width);
        if(currentLine % scanlinePixelAmount < thickness) {
            data[i] = data[i] * (1 - opacity);
            data[i + 1] = data[i + 1] * (1 - opacity);
            data[i + 2] = data[i + 2] * (1 - opacity);
        }
    }
    
    return data;
};

const scanlines: TEffectExport = {
    name: 'scanlines',
    browser: global,
    node: global
};

export { scanlines };
