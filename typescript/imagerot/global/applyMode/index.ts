import { TMode, IBufferHandlerParams, TEffectItem } from '../../../types';
import * as modes from '../../../modes';

type TApplyModeHandler = (params: IBufferHandlerParams & {
    mode: string;
    effectPool: {
        [key: string]: TEffectItem
    }
}) => Promise<IBufferHandlerParams>;

const getMode = (mode: string): TMode | null =>
{
    for(let [key, value] of Object.entries(modes))
    {
        if(key === mode)
        {
            return value;
        }
    }

    return null;
};

const applyMode: TApplyModeHandler = async ({ data, width, height, mode, effectPool }) =>
{
    return new Promise(async (resolve, reject) =>
    {
        try {
            const buffer = await (getMode(mode) as TMode)({ data, width, height, effects: effectPool });
            resolve({ data: buffer, width, height });
        } catch(error) {
            reject(error);
        }
    });
};

export {
    applyMode
};