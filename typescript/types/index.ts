// Staged return type
interface IRotItem {
    data: Uint8Array;
    width: number;
    height: number;
};

// Staging method
type TRotHandler = (params: IRotParams) => Promise<IRotItem>;

// Staged data
type IRotData = readonly [Uint8Array | null, number, number];

// Staging params
interface IRotParams {
    data?: Buffer | File | IRotData | IRotItem | IRotData;
    url?: string;
    file?: string;
};

// Effect options
type TEffectOptions = {
    [key: string]: string | number,
};

// Browser-targeted effect
type TEffectItemBrowser = {
    name: string;
    browser: TEffectItem;
    pixelOp?: TPixelOp;
};

// Node-targeted effect
type TEffectItemNode = {
    name: string;
    node: TEffectItem;
    pixelOp?: TPixelOp;
};

// Common effect
type TEffectItemShared = {
    name: string;
    browser: TEffectItem;
    node: TEffectItem;
    pixelOp?: TPixelOp;
};

// Exportable effect
type TEffectExport = TEffectItemBrowser | TEffectItemNode | TEffectItemShared;

// Effect method
type TEffectItem = (params: IRotItem, options?: TEffectOptions | null) => Promise<Uint8Array>;

// Effect pool item
type TEffectPoolItem = {
    method: TEffectItem;
    pixelOp?: TPixelOp;
};

// Pixel operation method
type TPixelOp<T = TEffectOptions> = (params: {
    index: number;
    data: Uint8Array;
    width?: number;
    height?: number;
}, options?: T | null) => void;

// Mode method
type TMode = (params: IRotItem & {
    effects: {
        [key: string]: TEffectPoolItem
    }
}) => Promise<Uint8Array>;

export {
    TEffectItem,
    TEffectOptions,
    TEffectExport,
    TEffectItemNode,
    TEffectItemBrowser,
    TEffectPoolItem,
    TPixelOp,
    IRotItem,
    TRotHandler,
    IRotParams,
    IRotData,
    TMode
};