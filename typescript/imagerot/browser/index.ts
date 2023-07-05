import { arrayPick } from '../../helpers';
import { urlToBuffer } from './urlToBuffer';
import { useEffect as _useEffect, useMode as _useMode } from '../global';
import { fileToBuffer } from './fileToBuffer';
import { bufferToBlob } from './bufferToBlob';

import * as modes from '../../modes';
import { effectPool } from '../../effects/browser';

import { TRotHandler, IRotData } from '../../types';

type TUseEffect = Parameters<typeof _useEffect>;
type TUseMode = Parameters<typeof _useMode>;

export const stage: TRotHandler = async ({ data, url }) => {
    let [buffer, width, height]: IRotData = [null, 0, 0];

    if(data) {
        if(data instanceof File) {
            [buffer, width, height] = await fileToBuffer(data) as IRotData;
        } else if(Array.isArray(data) && data[0] instanceof Uint8Array) {
            [buffer, width, height] = [...data];
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
    return Object.keys(effectPool);
};

export const getRandomMode = () => {
    return arrayPick(Object.keys(modes))
};

export const getRandomEffect = () => {
    return arrayPick(Object.keys(effectPool))
};

export const useEffect = async ({ data, width, height }: TUseEffect[0], effect: TUseEffect[2], options: TUseEffect[3]) => {
    return _useEffect({ data, width, height }, effectPool, effect, options);
};

export const useMode = async ({ data, width, height }: TUseMode[0], mode: TUseMode[2]) => {
    return _useMode({ data, width, height }, effectPool, mode);
};

export { bufferToBlob };
