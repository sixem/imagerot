import { TEffectItem, TEffectExport } from '../../../types';
import { PI, sin, random, floor, pow } from '../../../constants/math';

const global: TEffectItem = async ({ data, width, height }) => {
    const rPhase = random() * 2 * PI;
    const gPhase = random() * 2 * PI;
    const bPhase = random() * 2 * PI;

    for(let i = 0; i < data.length; i += 4) {
        const x = (i / 4) % width;
        const y = floor((i / 4) / width);
    
        const grayscale = data[i];
    
        const rWave = grayscale * (0.75 + 0.25 * sin(2 * PI * (x / width) + rPhase));
        const gWave = grayscale * (0.75 + 0.25 * sin(2 * PI * (y / height) + gPhase));
        const bWwave = grayscale * (0.75 + 0.25 * sin(2 * PI * ((x / width + y / height) + bPhase)));
    
        data[i] = pow(rWave / 255, 0.75) * 255;
        data[i + 1] = pow(gWave / 255, 0.75) * 255;
        data[i + 2] = pow(bWwave / 255, 0.75) * 255;
    }

    return data;
};

const rainbow: TEffectExport = {
    name: 'rainbow',
    browser: global,
    node: global
};

export { rainbow };
