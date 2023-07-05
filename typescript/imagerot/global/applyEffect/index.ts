import { IEffectHandler, TEffectOptions, IBufferHandlerParams } from '../../../types';
import * as effects from '../../../effects';

type TApplyEffectHandler = (params: IBufferHandlerParams & {
    effect: string;
    options?: TEffectOptions;
}) => Promise<IBufferHandlerParams>;

const getEffect = (effect: string): IEffectHandler | null => {
    for(let [key, value] of Object.entries(effects)) {
        if(key === effect) {
            return value;
        }
    }
    return null;
};

const applyEffect: TApplyEffectHandler = async ({ data, width, height, effect, options = null }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const buffer = await (getEffect(effect) as IEffectHandler)({ data, width, height }, options);

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
