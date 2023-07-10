import { TEffectItem, TEffectExport } from '../../../types';

const global: TEffectItem = async ({ data, width, height }) => {
    const kernel = [
        0, -1, 0,
        -1, 5, -1,
        0, -1, 0
    ];

    const target = new Uint8Array(data.length);

    for(let y = 0; y < height; y++) {
        for(let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4;
            let r = 0, g = 0, b = 0;

            for(let ky = -1; ky <= 1; ky++) {
                for(let kx = -1; kx <= 1; kx++) {
                    const xSample = Math.max(0, Math.min(width - 1, x + kx));
                    const ySample = Math.max(0, Math.min(height - 1, y + ky));
                    const sampleIdx = (ySample * width + xSample) * 4;

                    const kernelIdx = (ky + 1) * 3 + (kx + 1);

                    r += data[sampleIdx + 0] * kernel[kernelIdx];
                    g += data[sampleIdx + 1] * kernel[kernelIdx];
                    b += data[sampleIdx + 2] * kernel[kernelIdx];
                }
            }

            target[idx + 0] = Math.min(255, Math.max(0, r));
            target[idx + 1] = Math.min(255, Math.max(0, g));
            target[idx + 2] = Math.min(255, Math.max(0, b));
            target[idx + 3] = data[idx + 3];
        }
    }

    data.set(target);

    return data;
};


const sharpen: TEffectExport = {
    name: 'sharpen',
    browser: global,
    node: global
};

export { sharpen };
