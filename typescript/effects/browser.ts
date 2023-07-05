import { blur } from './blur';
import { rectangles } from './rectangles';
import { degrade } from './degrade';
import { pixelate } from './pixelate';

import { TEffectItem } from '../types';

const useEffects = [
    blur,
    rectangles,
    degrade,
    pixelate
];

export const effectPool = useEffects.reduce((obj, effect) => {
    obj[effect.name] = effect.browser;
    return obj;
}, {} as { [key: string]: TEffectItem });