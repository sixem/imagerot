import { blur } from './blur';
import { rectangles } from './rectangles';
import { degrade } from './degrade';

import { TEffectItem } from '../types';

export const effectPool = [blur, rectangles, degrade].reduce((obj, effect) => {
    obj[effect.name] = effect.node;
    return obj;
}, {} as { [key: string]: TEffectItem });