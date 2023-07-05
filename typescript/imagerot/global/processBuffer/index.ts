import { IBufferHandlerParams } from '../../../types';
import { modes } from '../../../modes';

type TProcessBufferHandler = (params: IBufferHandlerParams & {
    mode: string;
}) => Promise<{
    data: Uint8Array;
    width: number;
    height: number;
}>;

const processBuffer: TProcessBufferHandler = async ({ data, width, height, mode }) =>
{
    return new Promise((resolve, reject) =>
    {
        try {
            const buffer = modes[mode]({ data, width, height });
            resolve({ data: buffer, width, height });
        } catch(error) {
            reject(error);
        }
    });
};

export {
    processBuffer
};