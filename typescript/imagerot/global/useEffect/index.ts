import { IBufferHandlerParams, TEffectOptions } from '../../../types';
import { applyEffect } from '../applyEffect';
import * as effects from '../../../effects';

const useEffect = async ({ data, width, height }: IBufferHandlerParams, effect: string | string[], options: TEffectOptions) => {
    const effectsToUse = (!Array.isArray(effect) ? [effect] : effect);

    for(let _effect of effectsToUse) {
        if(!effects.hasOwnProperty(_effect)) {
            throw new Error('Invalid effect');
        }

        const applied = await applyEffect({ data, width, height, effect: _effect, options });
        [data, width, height] = [applied.data, applied.width, applied.height];
    }

    return { data, width, height };
};

export { useEffect };
