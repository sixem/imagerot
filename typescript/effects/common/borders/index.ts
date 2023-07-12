import { TEffectItem, TEffectExport } from '../../../types';

type TEffectOptions = {
    size?: number;
    color?: [number, number, number];
    opacity?: number;
};

const defaultBorderSize = 10;
const defaultBorderColor = [0, 0, 0];
const defaultBorderOpacity = 1;

const global: TEffectItem = async ({ data, width, height }, options = null) => {
    const {
        size = defaultBorderSize,
        color = defaultBorderColor,
        opacity = defaultBorderOpacity
    } = (options || {}) as TEffectOptions;

    for(let i = 0; i < data.length; i += 4) {
        let x = (i / 4) % width, y = Math.floor((i / 4) / width);

        if(x < size || x >= width - size || y < size || y >= height - size) {
            data[i] = data[i] * (1 - opacity) + color[0] * opacity;
            data[i + 1] = data[i + 1] * (1 - opacity) + color[1] * opacity;
            data[i + 2] = data[i + 2] * (1 - opacity) + color[2] * opacity;
        }
    }

    return data;
};

const borders: TEffectExport = {
    name: 'borders',
    browser: global,
    node: global
};

export { borders };
