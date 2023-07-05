import { floor, random, min, max } from '../../constants/math';
import { TEffectItem, TEffectExport } from '../../types';

type TEffectOptions = {
    offset?: number;
    intensity?: number;
};

const defaultOffset = 45;
const defaultIntensity = 20;

const global: TEffectItem = async ({ data, width, height }, options = null) => {
    const { offset = defaultOffset, intensity = defaultIntensity } = (options || {}) as TEffectOptions;
    const newData = new Uint8Array(data);
    const numRects = intensity;
    const minRectDim = max(20, min(width, height) / 50);

    for(let i = 0; i < numRects; i++) {
        const rectWidth = minRectDim + floor(random() * (width - minRectDim) / offset);
        const rectHeight = minRectDim + floor(random() * (height - minRectDim) / offset);

        const rectX = floor(random() * (width - rectWidth));
        const rectY = floor(random() * (height - rectHeight));

        const displacementX = floor(random() * width / offset);
        const displacementY = floor(random() * height / offset);

        const brightness = 5 + floor(random() * 15) * (random() > 0.5 ? 1 : -1);
        const invertColors = random() < 0.15;

        for(let y = rectY; y < rectY + rectHeight; y++) {
            for(let x = rectX; x < rectX + rectWidth; x++) {
                const origIndex = (y * width + x) * 4;
                const displacedIndex = (((y + displacementY) % height) * width + ((x + displacementX) % width)) * 4;

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
