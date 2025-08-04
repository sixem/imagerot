import { TMode, IRotItem } from '../../types';

interface MirrorFoldOptions {
    folds?: number; // Default: 4 (number of mirror folds, e.g., 2 for halves, 4 for quadrants)
    blendOpacity?: number; // Default: 0.5 (opacity for blending at fold edges, 0-1)
    randomOffset?: boolean; // Default: true (add small random offsets to folds for glitch effect)
}

const mirrorfold: TMode = async ({ data, width, height }: IRotItem, options: MirrorFoldOptions = {}) => {
    if (data.length === 0) return data;

    const folds = options.folds ?? 4;
    const blendOpacity = options.blendOpacity ?? 0.5;
    const randomOffset = options.randomOffset ?? true;

    const tempData = new Uint8Array(data); // Copy for mirroring without overwrite

    // Calculate fold sizes (assume even division for simplicity; adjust for odd dims)
    const foldWidth  = Math.floor(width / Math.sqrt(folds));
    const foldHeight = Math.floor(height / Math.sqrt(folds));
    const gridSize   = Math.sqrt(folds); // e.g., 2 for 4 folds (2x2 grid)

    for (let gy = 0; gy < gridSize; gy++) {
        for (let gx = 0; gx < gridSize; gx++) {

            const baseX = gx * foldWidth;
            const baseY = gy * foldHeight;

            // Apply random offset if enabled (small glitch shift, e.g., -5 to 5 px)
            const offsetX = randomOffset ? Math.floor(Math.random() * 10 - 5) : 0;
            const offsetY = randomOffset ? Math.floor(Math.random() * 10 - 5) : 0;

            // Mirror the section from the top-left fold (source) to this position
            for (let y = 0; y < foldHeight; y++) {
                for (let x = 0; x < foldWidth; x++) {
                    // Source: mirror/flip based on grid position (e.g., flip X for right folds, Y for bottom)
                    const srcX = (gx % 2 === 1 ? foldWidth - 1 - x : x) + offsetX;
                    const srcY = (gy % 2 === 1 ? foldHeight - 1 - y : y) + offsetY;

                    // Clamp source coords to valid range
                    const clampedSrcX = Math.max(0, Math.min(foldWidth - 1, srcX));
                    const clampedSrcY = Math.max(0, Math.min(foldHeight - 1, srcY));

                    const srcIdx = (clampedSrcY * width + clampedSrcX) * 4;
                    const destIdx = ((baseY + y) * width + (baseX + x)) * 4;

                    // Blend with original if near edges or for opacity
                    const originalR = data[destIdx];
                    const originalG = data[destIdx + 1];
                    const originalB = data[destIdx + 2];
                    const mirroredR = tempData[srcIdx];
                    const mirroredG = tempData[srcIdx + 1];
                    const mirroredB = tempData[srcIdx + 2];

                    // Simple alpha blend
                    data[destIdx] = Math.floor(mirroredR * blendOpacity + originalR * (1 - blendOpacity));
                    data[destIdx + 1] = Math.floor(mirroredG * blendOpacity + originalG * (1 - blendOpacity));
                    data[destIdx + 2] = Math.floor(mirroredB * blendOpacity + originalB * (1 - blendOpacity));
                    // Alpha unchanged
                }
            }
        }
    }

    return data;
};

export { mirrorfold };