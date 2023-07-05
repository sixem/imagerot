import { IBufferHandlerParams  } from '../../types';

type TBlurHandler = (params: IBufferHandlerParams & {
    blurDirection: string;
    blurIntensity?: number;
}) => Uint8Array;

const blur: TBlurHandler = ({ data, width, height, blurDirection, blurIntensity = 5 }) =>
{
    const buffer = new Uint8Array(data.length);
    buffer.set(data);

    for (let y = 0; y < height; y++)
    {
        for (let x = 0; x < width; x++)
        {
            let index = (y * width + x) * 4;

            let sumR = 0,
                sumG = 0,
                sumB = 0,
                count = 0;

            for (let i = 1; i <= blurIntensity; i++)
            {
                if(blurDirection === 'horizontal')
                {
                    if(x + i < width)
                    {
                        let nextIndex = (y * width + x + i) * 4;

                        sumR += data[nextIndex];
                        sumG += data[nextIndex + 1];
                        sumB += data[nextIndex + 2];

                        count++;
                    }
                } else if(blurDirection === 'vertical')
                {
                    if(y + i < height)
                    {
                        let nextIndex = ((y + i) * width + x) * 4;

                        sumR += data[nextIndex];
                        sumG += data[nextIndex + 1];
                        sumB += data[nextIndex + 2];
                        
                        count++;
                    }
                }
            }

            buffer[index] = sumR / count;
            buffer[index + 1] = sumG / count;
            buffer[index + 2] = sumB / count;
        }
    }

    return buffer;
};

export { blur };