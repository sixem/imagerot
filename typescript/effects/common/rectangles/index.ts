import { floor, random, min, max } from '../../../constants/math';
import { TEffectItem, TEffectExport } from '../../../types';

type TEffectOptions = {
    offset?: number;
    intensity?: number;
    sizeModifier?: number;
    invertChance?: number;
};

const defaultOffset = 5;
const defaultIntensity = 10;
const defaultSizeModifier = 1;
const defaultInvertChance = 0.15;

const minDimensionFraction = 0.25;
const minRectangularity = 1.5;

const global: TEffectItem = async ({ data, width, height }, options = null) => {
    const {
        offset = defaultOffset,
        intensity = defaultIntensity,
        sizeModifier = defaultSizeModifier,
        invertChance = defaultInvertChance
    } = (options || {}) as TEffectOptions;

    const newData = new Uint8Array(data);
    const numRects = intensity;
    const baseRectDim = floor(max(20, min(width, height) / 10) * sizeModifier);

    for(let i = 0; i < numRects; i++) {
        let rectWidth, rectHeight;
        do {
            rectWidth = floor(minDimensionFraction * baseRectDim + random() * (1 - minDimensionFraction) * baseRectDim);
            rectHeight = floor(minDimensionFraction * baseRectDim + random() * (1 - minDimensionFraction) * baseRectDim);
        } while (max(rectWidth, rectHeight) / min(rectWidth, rectHeight) < minRectangularity);

        const rectX = floor(random() * (width - rectWidth));
        const rectY = floor(random() * (height - rectHeight));

        const displacementX = floor((random() - 0.5) * 2 * offset);
        const displacementY = floor((random() - 0.5) * 2 * offset);

        const brightness = 5 + floor(random() * 15) * (random() > 0.5 ? 1 : -1);
        const invertColors = random() < invertChance;

        for(let y = rectY; y < rectY + rectHeight; y++) {
            for(let x = rectX; x < rectX + rectWidth; x++) {
                const origIndex = (y * width + x) * 4;
                const displacedIndex = (((y + displacementY + height) % height) * width + ((x + displacementX + width) % width)) * 4;

                for(let j = 0; j < 3; j++) {
                    let adjustedPixel = data[displacedIndex + j] + brightness;

                    if(invertColors) {
                        adjustedPixel = 255 - adjustedPixel;
                    }

                    adjustedPixel = max(0, min(255, adjustedPixel));  

                    if(invertColors && adjustedPixel < 50) {
                        continue;
                    }
                    
                    newData[origIndex + j] = adjustedPixel;
                }

                newData[origIndex + 3] = data[displacedIndex + 3];
            }
        }
    }

    return newData;
};

const rectangles: TEffectExport = {
    name: 'rectangles',
    browser: global,
    node: global
};

export { rectangles };
