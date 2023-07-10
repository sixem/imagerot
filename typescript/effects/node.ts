import * as effectsCommon from './common';
import * as effectsNode from './targeted/node';

import { TEffectItem, TEffectItemNode, TPixelOp } from '../types';

const effectsUsed = Object.values({...effectsCommon, ...effectsNode});

export const effectPool = effectsUsed.reduce((obj, effect) => {
    if(effect.hasOwnProperty('node')) {
        obj[effect.name] = {
            method: (effect as TEffectItemNode).node
        };
        if(effect.hasOwnProperty('pixelOp')) {
            obj[effect.name].pixelOp = (effect as TEffectItemNode).pixelOp;
        }
    }
    return obj;
}, {} as { [key: string]: {
    method: TEffectItem;
    pixelOp?: TPixelOp;
} });