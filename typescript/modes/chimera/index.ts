import { random, floor, min, max } from '../../constants/math';
import { randomize } from '../../helpers';
import { blur, rectangles } from '../../effects';
import { TBufferHandler, IBufferHandlerParams } from '../../types';

const weight: [number, number] = [0.25, 0.5];

type TAlgorithmHandler = (params: IBufferHandlerParams & {
    weight?: [number, number];
}) => Uint8Array;

const chimera: TBufferHandler = ({ data, width, height }) =>
{
    const algorithm: TAlgorithmHandler = ({ data, width, height, weight = [0.25, 0.5] }) =>
    {
        for (let y = 0; y < height; y++)
        {
            for (let x = 0; x < width; x++)
            {
                let index = (y * width + x) * 4;

                let r = data[index],
                    g = data[index + 1],
                    b = data[index + 2];

                data[index + 0] = (r + g * weight[1] + b * weight[0]);
                data[index + 1] = (r * weight[1] + g + b * weight[0]);
                data[index + 2] = (r * weight[0] + g * weight[1] + b);
            }
        }

        return data;
    };

    const blurDirection = random() >= 0.5 ? 'horizontal' : 'vertical';
    const blurIntensity = randomize(5, 10);

    data = blur({ data, width, height, blurDirection, blurIntensity });
    data = algorithm({ data, width, height, weight });

    for (let index = 0; index < data.length; index += 4)
    {
        const useNoise = random() < 0.2;
        const useGrain = random() < 0.4 ? floor(random() * 50) : 0;

        for(let i = 0; i < 3; i++)
        {
            data[index + i] = useNoise ? min(data[index + i] + randomize(1, i === 0 ? 15 : 10), 255) : data[index + i];
            data[index + i] = min(255, max(0, data[index + i] + (floor(random() * 20) - 30)));
            data[index + i] = useGrain ? min(255, max(0, data[index + i] + useGrain)) : data[index + i];
        };
    }

    data = rectangles({ data, width, height, offset: 45, intensity: 20 });

    return data;
};

export {
    chimera
};