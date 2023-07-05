import { useEffect, useMode } from '../global';
import { arrayPick } from '../../helpers';
import { urlToBuffer } from './urlToBuffer';
import { fileToBuffer } from './fileToBuffer';
import { bufferToBlob } from './bufferToBlob';

import * as modes from '../../modes';
import * as effects from '../../effects';

import { TRotHandler, IRotData, IBufferHandlerParams, TEffectOptions } from '../../types';

export const stage: TRotHandler = async ({ data, dimensions, url }) => {
    let [buffer, width, height]: IRotData = [null, 0, 0];

    if(data) {
        if(data instanceof File) {
            [buffer, width, height] = await fileToBuffer(data) as IRotData;
        } else if(dimensions && data instanceof Uint8Array) {
            [buffer, width, height] = [buffer, ...dimensions];
        }
    } else if(url && typeof url === 'string') {
        [buffer, width, height] = await urlToBuffer(url) as IRotData;
    }

    if(!buffer || !width || !height) {
        throw new Error('Failed to load image data');
    }

    return { data: buffer, width, height };
};

export const listModes = () => {
    return Object.keys(modes);
};

export const listEffects = () => {
    return Object.keys(effects);
};

export const getRandomMode = () => {
    return arrayPick(Object.keys(modes))
};

export const getRandomEffect = () => {
    return arrayPick(Object.keys(effects))
};

export { bufferToBlob, useEffect, useMode };
