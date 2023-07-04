import { BufferHandlerParams } from '../../types';
import { modes } from '../../modes';

type ProcessBufferHandler = (params: BufferHandlerParams & {
    mode: string;
}) => Promise<Uint8Array>;

const processBuffer: ProcessBufferHandler = async ({ data, width, height, mode }) =>
{
    return new Promise((resolve, reject) =>
    {
        try {
            resolve(modes[mode]({ data, width, height }));
        } catch(error) {
            reject(error);
        }
    });
};

export {
    processBuffer
};