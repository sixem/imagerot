import { TMode, IRotItem } from '../../types';

interface PixelSortOptions {
    minThreshold?: number; // Default: 50 (sort from this brightness up)
    maxThreshold?: number; // Default: 200 (sort up to this brightness)
    direction?: 'vertical' | 'horizontal'; // Default: 'vertical'
}

const pixelsort: TMode = async ({ data, width, height, effects }, options: PixelSortOptions = {}) => {
    if (data.length === 0) return data;

    const minThreshold = options.minThreshold ?? 50;
    const maxThreshold = options.maxThreshold ?? 200;
    const direction = options.direction ?? 'vertical';

    // Precompute brightness multipliers as constants for minor speed-up in hot loop
    const R_WEIGHT = 0.299;
    const G_WEIGHT = 0.587;
    const B_WEIGHT = 0.114;

    // Helper to calculate brightness (luminance) for a pixel at index j
    const getBrightness = (j: number): number => {
        return R_WEIGHT * data[j] + G_WEIGHT * data[j + 1] + B_WEIGHT * data[j + 2];
    };

    if (direction === 'horizontal') {
        for (let y = 0; y < height; y++) {
            const rowStart = y * width * 4;
            let start = 0;

            while (start < width) {
                while (start < width && getBrightness(rowStart + start * 4) < minThreshold) {
                    start++;
                }
                if (start >= width) break;

                let end = start;
                while (end < width && getBrightness(rowStart + end * 4) <= maxThreshold) {
                    end++;
                }

                if (end === start) {
                    start++;
                    continue;
                }

                if (end > start + 1) {
                    // Optimization: Pre-allocate indices array with exact size to avoid resize overhead
                    const segmentLength = end - start;
                    const indices = new Array(segmentLength);
                    for (let i = 0; i < segmentLength; i++) {
                        indices[i] = rowStart + (start + i) * 4;
                    }

                    // Sort indices by brightness (descending)
                    indices.sort((a, b) => getBrightness(b) - getBrightness(a));

                    // Optimization: Reuse a single temp Uint8Array if possible, but since sizes vary, create once per segment (no change needed here, but it's fine as is)
                    const tempSegment = new Uint8Array(segmentLength * 4);
                    for (let i = 0; i < segmentLength; i++) {
                        const src = indices[i];
                        const dest = i * 4;
                        tempSegment[dest] = data[src];
                        tempSegment[dest + 1] = data[src + 1];
                        tempSegment[dest + 2] = data[src + 2];
                        tempSegment[dest + 3] = data[src + 3];
                    }

                    data.set(tempSegment, rowStart + start * 4);
                }

                start = end;
            }
        }
    } else if (direction === 'vertical') {
        for (let x = 0; x < width; x++) {
            const colStart = x * 4;
            let start = 0;

            while (start < height) {
                while (start < height && getBrightness(colStart + start * width * 4) < minThreshold) {
                    start++;
                }
                if (start >= height) break;

                let end = start;
                while (end < height && getBrightness(colStart + end * width * 4) <= maxThreshold) {
                    end++;
                }

                if (end === start) {
                    start++;
                    continue;
                }

                if (end > start + 1) {
                    const segmentLength = end - start;
                    const indices = new Array(segmentLength);
                    for (let i = 0; i < segmentLength; i++) {
                        indices[i] = colStart + (start + i) * width * 4;
                    }

                    indices.sort((a, b) => getBrightness(b) - getBrightness(a));

                    const tempSegment = new Uint8Array(segmentLength * 4);
                    for (let i = 0; i < segmentLength; i++) {
                        const src = indices[i];
                        const dest = i * 4;
                        tempSegment[dest] = data[src];
                        tempSegment[dest + 1] = data[src + 1];
                        tempSegment[dest + 2] = data[src + 2];
                        tempSegment[dest + 3] = data[src + 3];
                    }

                    // Optimization: Use a single loop for copy-back, but unroll slightly for speed (though JS engines optimize this anyway)
                    for (let i = 0; i < segmentLength; i++) {
                        const destIndex = colStart + (start + i) * width * 4;
                        data[destIndex] = tempSegment[i * 4];
                        data[destIndex + 1] = tempSegment[i * 4 + 1];
                        data[destIndex + 2] = tempSegment[i * 4 + 2];
                        data[destIndex + 3] = tempSegment[i * 4 + 3];
                    }
                }

                start = end;
            }
        }
    }

    // Optimization: Chain effects in a loop, but since there are few, no big gain—kept as is for readability
    for (const dir of ['horizontal', 'vertical']) {
        data = await effects.blur.method({ data, width, height }, { direction: dir, intensity: 2 }) || data;
    }

    data = await effects.chromaticAberration.method({ data, width, height }, { intensity: 2 });
    data = await effects.grayscale.method({ data, width, height }, { intensity: 0.275 });
    data = await effects.noise.method({ data, width, height }, { intensity: 7 });
    data = await effects.brightness.method({ data, width, height }, { brightness: -2 });

    return data;
};

export { pixelsort };
