interface BufferHandlerParams {
    data: Uint8Array;
    width: number;
    height: number;
};

type BufferHandler = (params: BufferHandlerParams) => Uint8Array;

export {
    BufferHandler,
    BufferHandlerParams
};