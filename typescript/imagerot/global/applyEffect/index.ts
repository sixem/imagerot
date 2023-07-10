import { TEffectItem, TEffectOptions, IRotItem, TEffectPoolItem } from '../../../types';

type TApplyEffectHandler = (params: IRotItem & {
    effectPool: {
        [key: string]: TEffectPoolItem;
    };
    effect: string;
    options?: TEffectOptions;
}) => Promise<IRotItem>;

const getEffect = (effectPool: { [key: string]: TEffectPoolItem }, effect: string): TEffectItem | null => {
    for(let [key, value] of Object.entries(effectPool)) {
        if(key === effect) {
            return value.method;
        }
    }
    return null;
};

const applyEffect: TApplyEffectHandler = async ({ data, width, height, effectPool, effect, options = null }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const buffer = await (getEffect(effectPool, effect) as TEffectItem)({ data, width, height }, options);

            if(buffer)
            {
                resolve({ data: buffer, width, height });
            } else {
                reject('Buffer is null');
            }
        } catch(error) {
            reject(error);
        }
    });
};

export { applyEffect };
