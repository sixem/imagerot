import { processBuffer } from '../global/processBuffer';
import { modes } from '../../modes';
import { arrayPick } from '../../helpers';
import { urlToBuffer } from './urlToBuffer';
import { fileToBuffer } from './fileToBuffer';
import { bufferToBlob } from './bufferToBlob';
import { TRotHandler, IRotData } from '../../types';

export const rot: TRotHandler = async ({ data, dimensions, url, mode }) =>
{
    mode = mode || arrayPick(Object.keys(modes));

    if(!modes.hasOwnProperty(mode))
    {
        throw new Error('Invalid mode');
    }

    let [buffer, width, height]: IRotData = [null, 0, 0];

    if(data)
    {
        if(data instanceof File)
        {
            [buffer, width, height] = await fileToBuffer(data) as IRotData;
        } else if(dimensions && data instanceof Uint8Array) {
            [buffer, width, height] = [buffer, ...dimensions];
        }
    } else if(url && typeof url === 'string') {
        [buffer, width, height] = await urlToBuffer(url) as IRotData;
    }

    if(!buffer || !width || !height)
    {
        throw new Error('Failed to load image data');
    }

    return await processBuffer({
        data: buffer, width, height, mode
    });
};

export const listModes = () =>
{
    return Object.keys(modes);

};

export {
    bufferToBlob
};
