import { TEffectItem, TEffectExport } from '../../../types';

type TEffectOptions = {
    borderSize?: number;
    borderColor?: [number, number, number];
    borderOpacity?: number;
};

const defaultBorderSize = 10;
const defaultBorderColor = [0, 0, 0];
const defaultBorderOpacity = 1;

const global: TEffectItem = async ({ data, width, height }, options = null) => {
    const {
        borderSize = defaultBorderSize,
        borderColor = defaultBorderColor,
        borderOpacity = defaultBorderOpacity
    } = (options || {}) as TEffectOptions;

    for(let i = 0; i < data.length; i += 4) {
        let x = (i / 4) % width, y = Math.floor((i / 4) / width);

        if(x < borderSize || x >= width - borderSize || y < borderSize || y >= height - borderSize) {
            data[i] = data[i] * (1 - borderOpacity) + borderColor[0] * borderOpacity;
            data[i + 1] = data[i + 1] * (1 - borderOpacity) + borderColor[1] * borderOpacity;
            data[i + 2] = data[i + 2] * (1 - borderOpacity) + borderColor[2] * borderOpacity;
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
