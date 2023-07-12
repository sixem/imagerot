import { IRotItem, TEffectOptions, TEffectPoolItem } from '../../../types';
import { applyEffect } from '../applyEffect';

const useEffect = async ({ data, width, height }: IRotItem, effectPool: {
    [key: string]: TEffectPoolItem
}, effect: string | string[], options: TEffectOptions | TEffectOptions[]) => {
    const effectsToUse = (!Array.isArray(effect) ? [effect] : effect);

    if(Array.isArray(options) && options.length !== effectsToUse.length) {
        throw new Error('Invalid options length');
    }

    let i = 0;

    for(let currentEffect of effectsToUse) {
        if(!effectPool[currentEffect]) {
            throw new Error(`Invalid effect: ${currentEffect}`);
        }

        const applied = await applyEffect({ 
            data, width, height, effectPool,
            effect: currentEffect,
            options: Array.isArray(options) ? options[i] : options
        });
        
        [data, width, height] = [applied.data, applied.width, applied.height];

        i++;
    }

    return { data, width, height };
};

export { useEffect };
