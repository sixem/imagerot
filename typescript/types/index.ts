interface IBufferHandlerParams {
    data: Uint8Array;
    width: number;
    height: number;
};

type TBufferHandler = (params: IBufferHandlerParams) => Uint8Array;

interface IRotParams {
    data?: Uint8Array | Object | Buffer | File;
    url?: string;
    dimensions?: [number, number];
    mode?: string;
};

type TRotHandler = (params: IRotParams) => void;
type IRotData = [Uint8Array | null, number, number];

export {
    TBufferHandler,
    IBufferHandlerParams,
    TRotHandler,
    IRotParams,
    IRotData
};