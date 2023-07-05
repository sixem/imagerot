import { TBufferHandler, IBufferHandlerParams } from '../../../types';
import * as modes from '../../../modes';

type TApplyModeHandler = (params: IBufferHandlerParams & {
    mode: string;
}) => Promise<IBufferHandlerParams>;

const getMode = (mode: string): TBufferHandler | null =>
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

const applyMode: TApplyModeHandler = async ({ data, width, height, mode }) =>
{
    return new Promise(async (resolve, reject) =>
    {
        try {
            const buffer = await (getMode(mode) as TBufferHandler)({ data, width, height });
            resolve({ data: buffer, width, height });
        } catch(error) {
            reject(error);
        }
    });
};

export {
    applyMode
};