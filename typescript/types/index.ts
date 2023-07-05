interface IBufferHandlerParams {
    data: Uint8Array;
    width: number;
    height: number;
};

type TBufferHandler = (params: IBufferHandlerParams) => Promise<Uint8Array>;

interface IRotParams {
    data?: Uint8Array | Object | Buffer | File;
    url?: string;
    dimensions?: [number, number];
};

type IRotData = [Uint8Array | null, number, number];

type TRotHandler = (params: IRotParams) => Promise<IBufferHandlerParams>;

type TEffectOptions = {
    [key: string]: string | number,
};

type IEffectHandler = (params: IBufferHandlerParams, options?: TEffectOptions | null) => Promise<Uint8Array | null>;

export {
    IEffectHandler,
    TEffectOptions,
    TBufferHandler,
    IBufferHandlerParams,
    TRotHandler,
    IRotParams,
    IRotData
};