import { TEffectItem, TEffectExport } from '../../../types';

interface TEffectOptions {
    amplitude?: number;
    frequency?: number;
    axis?: 'x' | 'y';
}

const defaultAmplitude = 10;
const defaultFrequency = 0.05;
const defaultAxis = 'x';

const global: TEffectItem = async ({ data, width, height }, options = null) => {
    const { amplitude = defaultAmplitude, frequency = defaultFrequency, axis = defaultAxis } = (options || {}) as TEffectOptions;

    const tempData = new Uint8Array(data); // Copy to avoid overwriting during shifts

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4;
            const waveInput = (axis === 'x' ? y : x) * frequency * Math.PI * 2;
            const offset = Math.sin(waveInput) * amplitude;

            const srcX = Math.max(0, Math.min(width - 1, Math.floor(x + (axis === 'x' ? offset : 0))));
            const srcY = Math.max(0, Math.min(height - 1, Math.floor(y + (axis === 'y' ? offset : 0))));
            const srcIdx = (srcY * width + srcX) * 4;

            data[idx] = tempData[srcIdx];
            data[idx + 1] = tempData[srcIdx + 1];
            data[idx + 2] = tempData[srcIdx + 2];
            data[idx + 3] = tempData[srcIdx + 3];
        }
    }

    return data;
};

const waveDistort: TEffectExport = {
    name: 'waveDistort',
    browser: global,
    node: global
};

export { waveDistort };