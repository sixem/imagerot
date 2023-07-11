import { IRotItem, TEffectOptions, TEffectPoolItem } from '../../../types';
import { applyEffect } from '../applyEffect';

const useEffect = async ({ data, width, height }: IRotItem, effectPool: {
    [key: string]: TEffectPoolItem
}, effect: string | string[], options: TEffectOptions) => {
    const effectsToUse = (!Array.isArray(effect) ? [effect] : effect);

    for(let currentEffect of effectsToUse) {
        if(!effectPool[currentEffect]) {
            throw new Error(`Invalid effect: ${currentEffect}`);
        }

        const applied = await applyEffect({ 
            data, width, height, effectPool, effect: currentEffect, options
        });
        
        [data, width, height] = [applied.data, applied.width, applied.height];
    }

    return { data, width, height };
};

export { useEffect };
