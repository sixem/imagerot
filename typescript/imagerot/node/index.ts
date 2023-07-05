import { fileBufferToUint8Array } from './fileBufferToUint8Array';
import { urlToBuffer } from './urlToBuffer';
import { useEffect as _useEffect, useMode as _useMode } from '../global';
import { TRotHandler, IRotData } from '../../types';

import * as modes from '../../modes';
import { effectPool } from '../../effects/node';

import sizeOf from 'image-size';
import 'isomorphic-fetch';

type TUseEffect = Parameters<typeof _useEffect>;
type TUseMode = Parameters<typeof _useMode>;

export const stage: TRotHandler = async ({ data, url }) => {
    let [buffer, width, height]: IRotData = [null, 0, 0];

    if(data) {
        if(data instanceof Buffer)
        {
            const dimensions = sizeOf(data);
            const convertedBuffer = await fileBufferToUint8Array(data);
            [buffer, width, height] = [convertedBuffer, dimensions.width || 0, dimensions.height || 0];
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

export const useEffect = async ({ data, width, height }: TUseEffect[0], effect: TUseEffect[2], options: TUseEffect[3]) => {
    return _useEffect({ data, width, height }, effectPool, effect, options);
};

export const useMode = async ({ data, width, height }: TUseMode[0], mode: TUseMode[2]) => {
    return _useMode({ data, width, height }, effectPool, mode);
};
