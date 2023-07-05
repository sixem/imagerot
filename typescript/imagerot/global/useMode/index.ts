import { IBufferHandlerParams } from '../../../types';
import { applyMode } from '../applyMode';
import * as modes from '../../../modes';

const useMode = async ({ data, width, height }: IBufferHandlerParams, mode: string | string[]) => {
    const modesToUse = (!Array.isArray(mode) ? [mode] : mode);

    for(let _mode of modesToUse) {
        if(!modes.hasOwnProperty(_mode)) {
            throw new Error('Invalid mode');
        }

        const applied = await applyMode({ data, width, height, mode: _mode });
        [data, width, height] = [applied.data, applied.width, applied.height];
    }
    
    return { data, width, height };
};

export { useMode };
