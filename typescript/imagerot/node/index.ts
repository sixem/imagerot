import { fileBufferToUint8Array } from './fileBufferToUint8Array';
import { urlToBuffer } from './urlToBuffer';
import { useEffect, useMode } from '../global';
import { TRotHandler, IRotData } from '../../types';

import * as modes from '../../modes';
import * as effects from '../../effects';

import sizeOf from 'image-size';
import 'isomorphic-fetch';

export const stage: TRotHandler = async ({ data, dimensions, url }) => {
    let [buffer, width, height]: IRotData = [null, 0, 0];

    if(data) {
        if(data instanceof Buffer)
        {
            const dimensions = sizeOf(data);
            const convertedBuffer = await fileBufferToUint8Array(data);
            [buffer, width, height] = [convertedBuffer, dimensions.width || 0, dimensions.height || 0];
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

export { useEffect, useMode };
