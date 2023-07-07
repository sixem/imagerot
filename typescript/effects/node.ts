import * as effectsCommon from './common';
import * as effectsNode from './targeted/node';

import { TEffectItem, TEffectItemNode } from '../types';

const effectsUsed = Object.values({...effectsCommon, ...effectsNode});

export const effectPool = effectsUsed.reduce((obj, effect) => {
    if(effect.hasOwnProperty('node')) obj[effect.name] = (effect as TEffectItemNode).node;
    return obj;
}, {} as { [key: string]: TEffectItem });