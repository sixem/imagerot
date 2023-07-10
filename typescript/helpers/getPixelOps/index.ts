import { TPixelOp, TEffectPoolItem, TEffectOptions } from '../../types';

type TTest = (params: {
    [key: string]: TEffectPoolItem
}) => {
    [key: string]: TPixelOp<TEffectOptions>;
};

const hasPixelOp = (item: TEffectPoolItem): item is TEffectPoolItem & { pixelOp: TPixelOp<TEffectOptions> } => {
    return item.pixelOp !== undefined;
};

const getPixelOps: TTest = (effects) => {
    return Object.entries(effects)
            .reduce((acc, [k, v]) => {
                if(hasPixelOp(v)) {
                    acc[k] = v.pixelOp;
                }
                return acc;
            }, {} as {[key: string]: TPixelOp<TEffectOptions>});
};

export { getPixelOps };
