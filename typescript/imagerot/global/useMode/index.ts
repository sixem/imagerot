import { IRotItem, TEffectPoolItem } from '../../../types';
import { applyMode } from '../applyMode';
import * as modes from '../../../modes';

const useMode = async ({ data, width, height }: IRotItem, effectPool: {
    [key: string]: TEffectPoolItem
}, mode: string | string[]) => {
    const modesToUse = (!Array.isArray(mode) ? [mode] : mode);

    for(let currentMode of modesToUse) {
        if(!modes.hasOwnProperty(currentMode)) {
            throw new Error(`Invalid mode: ${currentMode}`);
        }

        const applied = await applyMode({
            data, width, height, effectPool, mode: currentMode
        });
        
        [data, width, height] = [applied.data, applied.width, applied.height];
    }
    
    return { data, width, height };
};

export { useMode };
