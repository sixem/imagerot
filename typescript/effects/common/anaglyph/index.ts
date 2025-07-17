import { TEffectItem, TEffectExport } from '../../../types';

interface ChannelShiftOptions {
    redShift  ?: { x: number, y: number }; // Default: { x: 5,  y: 0 }
    greenShift?: { x: number, y: number }; // Default: { x: -5, y: 0 }
    blueShift ?: { x: number, y: number }; // Default: { x: 0,  y: 5 }
}

const global: TEffectItem = async ({ data, width, height }, options = null) => {
    const config = (options || {}) as ChannelShiftOptions;

    const rShift = config.redShift   ?? { x: 5,  y: 0 };
    const gShift = config.greenShift ?? { x: -5, y: 0 };
    const bShift = config.blueShift  ?? { x: 0,  y: 5 };

    const copy = new Uint8Array(data);

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4;

            // Shift RED
            const rx = (x + rShift.x + width) % width;
            const ry = (y + rShift.y + height) % height;
            data[idx] = copy[(ry * width + rx) * 4];

            // Shift GREEN
            const gx = (x + gShift.x + width) % width;
            const gy = (y + gShift.y + height) % height;
            data[idx + 1] = copy[(gy * width + gx) * 4 + 1];

            // Shift BLUE
            const bx = (x + bShift.x + width) % width;
            const by = (y + bShift.y + height) % height;
            data[idx + 2] = copy[(by * width + bx) * 4 + 2];

            // Alpha remains unchanged
        }
    }

    return data;
};

const anaglyph: TEffectExport = {
    name: 'anaglyph',
    browser: global,
    node: global
};

export { anaglyph };
