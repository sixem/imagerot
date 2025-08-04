import { TEffectItem, TEffectExport } from '../../../types';

interface TEffectOptions {
    lineThickness?: number;         // Default: 2 (pixels per scanline)
    interferenceIntensity?: number; // Default: 0.3 (fraction of rows with shifts or glitches)
    noiseIntensity?: number;        // Default: 0.1 (strength of random noise added)
    colorBleed?: number;            // Default: 0.2 (amount of RGB shift for VHS chromatic effect)
}

const global: TEffectItem = async ({ data, width, height }, options = null) => {
    const config = (options || {}) as TEffectOptions;

    const lineThickness = config.lineThickness ?? 2;
    const interferenceIntensity = config.interferenceIntensity ?? 0.3;
    const noiseIntensity = config.noiseIntensity ?? 0.1;
    const colorBleed = config.colorBleed ?? 0.2;

    const tempData = new Uint8Array(data); // Copy for shifts and bleeding

    // Apply scanlines by darkening every other set of rows
    for (let y = 0; y < height; y++) {
        const isScanline   = (y % (lineThickness * 2)) < lineThickness; // Alternate bands
        const darkenFactor = isScanline ? 0.85 : 1.0; // Slight darken for VHS lines

        for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4;

            // Darken for scanlines
            data[idx] = Math.floor(tempData[idx] * darkenFactor);
            data[idx + 1] = Math.floor(tempData[idx + 1] * darkenFactor);
            data[idx + 2] = Math.floor(tempData[idx + 2] * darkenFactor);

            // Add noise (random perturbation)
            if (Math.random() < noiseIntensity) {
                const noise = Math.floor(Math.random() * 50 - 25); // -25 to 25 shift
                data[idx] = Math.max(0, Math.min(255, data[idx] + noise));
                data[idx + 1] = Math.max(0, Math.min(255, data[idx + 1] + noise));
                data[idx + 2] = Math.max(0, Math.min(255, data[idx + 2] + noise));
            }
        }

        // Random row shifts for glitchy tracking (interference)
        if (Math.random() < interferenceIntensity) {
            const shift = Math.floor(Math.random() * 10 - 5); // -5 to 5 pixel horizontal shift
            for (let x = 0; x < width; x++) {
                const srcX = Math.max(0, Math.min(width - 1, x + shift));
                const idx = (y * width + x) * 4;
                const srcIdx = (y * width + srcX) * 4;

                data[idx] = tempData[srcIdx];
                data[idx + 1] = tempData[srcIdx + 1];
                data[idx + 2] = tempData[srcIdx + 2];
            }
        }
    }

    // Add color bleed (slight RGB channel shifts for VHS chromatic aberration)
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4;

            // Shift red slightly left, blue right (simple bleed)
            const redShift = Math.floor(colorBleed * 5); // e.g., 1 pixel if colorBleed=0.2
            const blueShift = -redShift;

            const rSrcX = Math.max(0, Math.min(width - 1, x + redShift));
            const bSrcX = Math.max(0, Math.min(width - 1, x + blueShift));

            data[idx] = tempData[(y * width + rSrcX) * 4];         // Red  from shifted
            data[idx + 2] = tempData[(y * width + bSrcX) * 4 + 2]; // Blue from shifted
        }
    }

    return data;
};

const interferenceLines: TEffectExport = {
    name: 'interferenceLines',
    browser: global,
    node: global
};

export { interferenceLines };
