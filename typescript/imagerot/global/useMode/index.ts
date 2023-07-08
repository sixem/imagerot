import { IRotItem, TEffectItem } from '../../../types';
import { applyMode } from '../applyMode';
import * as modes from '../../../modes';

const useMode = async ({ data, width, height }: IRotItem, effectPool: {
    [key: string]: TEffectItem
}, mode: string | string[]) => {
    const modesToUse = (!Array.isArray(mode) ? [mode] : mode);

    for(let _mode of modesToUse) {
        if(!modes.hasOwnProperty(_mode)) {
            throw new Error(`Invalid mode: ${_mode}`);
        }

        const applied = await applyMode({ data, width, height, effectPool, mode: _mode });
        [data, width, height] = [applied.data, applied.width, applied.height];
    }
    
    return { data, width, height };
};

export { useMode };
