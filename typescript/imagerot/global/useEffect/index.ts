import { IBufferHandlerParams, TEffectOptions, TEffectItem } from '../../../types';
import { applyEffect } from '../applyEffect';

const useEffect = async ({ data, width, height }: IBufferHandlerParams, effectPool: {
    [key: string]: TEffectItem
}, effect: string | string[], options: TEffectOptions) => {
    const effectsToUse = (!Array.isArray(effect) ? [effect] : effect);

    for(let _effect of effectsToUse) {
        if(!effectPool[_effect]) {
            throw new Error(`Invalid effect: ${_effect}`);
        }

        const applied = await applyEffect({ data, width, height, effectPool, effect: _effect, options });
        [data, width, height] = [applied.data, applied.width, applied.height];
    }

    return { data, width, height };
};

export { useEffect };
