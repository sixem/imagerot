import * as effectsCommon from './common';
import * as effectsBrowser from './targeted/browser';

import { TEffectItem, TEffectItemBrowser, TPixelOp } from '../types';

const effectsUsed = Object.values({...effectsCommon, ...effectsBrowser});

export const effectPool = effectsUsed.reduce((obj, effect) => {
    if(effect.hasOwnProperty('browser')) {
        obj[effect.name] = {
            method: (effect as TEffectItemBrowser).browser
        };
        if(effect.hasOwnProperty('pixelOp')) {
            obj[effect.name].pixelOp = (effect as TEffectItemBrowser).pixelOp;
        }
    }
    return obj;
}, {} as { [key: string]: {
    method: TEffectItem;
    pixelOp?: TPixelOp;
} });