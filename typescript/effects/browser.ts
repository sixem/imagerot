import * as effectsCommon from './common';
import * as effectsBrowser from './targeted/browser';

import { TEffectItem, TEffectItemBrowser } from '../types';

const effectsUsed = Object.values({...effectsCommon, ...effectsBrowser});

export const effectPool = effectsUsed.reduce((obj, effect) => {
    if(effect.hasOwnProperty('browser')) obj[effect.name] = (effect as TEffectItemBrowser).browser;
    return obj;
}, {} as { [key: string]: TEffectItem });