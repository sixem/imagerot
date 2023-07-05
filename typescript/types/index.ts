interface IBufferHandlerParams {
    data: Uint8Array;
    width: number;
    height: number;
};

type TBufferHandler = (params: IBufferHandlerParams) => Promise<Uint8Array>;

interface IRotParams {
    data?: Uint8Array | Object | Buffer | File | [Uint8Array, number, number];
    url?: string;
};

type IRotData = [Uint8Array | null, number, number];

type TRotHandler = (params: IRotParams) => Promise<IBufferHandlerParams>;

type TEffectOptions = {
    [key: string]: string | number,
};

type TEffectItem = (params: IBufferHandlerParams, options?: TEffectOptions | null) => Promise<Uint8Array | null>;

type TEffectExport = {
    name: string;
    browser: TEffectItem,
    node: TEffectItem
};

type TMode = (params: IBufferHandlerParams & {
    effects?: {
        [key: string]: TEffectItem
    }
}) => Promise<Uint8Array>;

export {
    TEffectItem,
    TEffectOptions,
    TEffectExport,
    TBufferHandler,
    IBufferHandlerParams,
    TMode,
    TRotHandler,
    IRotParams,
    IRotData
};