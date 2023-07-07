import { TMode } from '../../types';
import { randomize } from '../../helpers';
import { random, floor, min, max } from '../../constants/math';

const lacunae: TMode = async ({ data }) =>
{
    for(let index = 0; index < data.length; index += 4)
    {
        const useNoise = random() < 0.2;
        const useGrain = random() < 0.4 ? floor(random() * 50) : 0;
    
        for(let i = 0; i < 3; i++) {
          data[index + i] = data[index + i] - randomize(1, 15);
          data[index + i] = data[index + i] < 0 ? data[index + i] + 255 : data[index + i];
          
          data[index + i] = useNoise ? min(data[index + i] + randomize(1, i === 0 ? 15 : 10), 255) : data[index + i];
          data[index + i] = min(255, max(0, data[index + i] + floor(random() * 20 - 40)));
          data[index + i] = useGrain ? min(255, max(0, data[index + i] + useGrain)) : data[index + i];
        };
      }
    
      return data;
};

export { lacunae };
