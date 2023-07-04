import { BufferHandlerParams  } from '../../types';

type RectanglesHandler = (params: BufferHandlerParams & {
    offset: number;
    intensity: number;
}) => Uint8Array;

const rectangles: RectanglesHandler = ({ data, width, height, offset, intensity }) =>
{
    const newData = new Uint8Array(data);
    const numRects = intensity;
    const minRectDim = Math.max(20, Math.min(width, height) / 50);

    for(let i = 0; i < numRects; i++)
    {
        const rectWidth = minRectDim + Math.floor(Math.random() * (width - minRectDim) / offset);
        const rectHeight = minRectDim + Math.floor(Math.random() * (height - minRectDim) / offset);

        const rectX = Math.floor(Math.random() * (width - rectWidth));
        const rectY = Math.floor(Math.random() * (height - rectHeight));

        const displacementX = Math.floor(Math.random() * width / offset);
        const displacementY = Math.floor(Math.random() * height / offset);

        const brightness = 5 + Math.floor(Math.random() * 15) * (Math.random() > 0.5 ? 1 : -1);
        const invertColors = Math.random() < 0.15;

        for (let y = rectY; y < rectY + rectHeight; y++)
        {
            for (let x = rectX; x < rectX + rectWidth; x++)
            {
                const origIndex = (y * width + x) * 4;
                const displacedIndex = (((y + displacementY) % height) * width + ((x + displacementX) % width)) * 4;

                for (let j = 0; j < 3; j++)
                {
                    let adjustedPixel = data[displacedIndex + j] + brightness;

                    if(invertColors)
                    {
                        adjustedPixel = 255 - adjustedPixel;
                    }

                    adjustedPixel = Math.max(0, Math.min(255, adjustedPixel));  

                    if(invertColors && adjustedPixel < 50)
                    {
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

export {
    rectangles
};