// Staged return type
interface IRotItem {
    data: Uint8Array;
    width: number;
    height: number;
};

// Staging method
type TRotHandler = (params: IRotParams) => Promise<IRotItem>;

// Staging params
interface IRotParams {
    data?: Buffer | File | [Uint8Array, number, number];
    url?: string;
};

// Staged data
type IRotData = [Uint8Array | null, number, number];

// Effect options
type TEffectOptions = {
    [key: string]: string | number,
};

// Browser-targeted effect
type TEffectItemBrowser = {
    name: string;
    browser: TEffectItem;
};

// Node-targeted effect
type TEffectItemNode = {
    name: string;
    node: TEffectItem;
};

// Common effect
type TEffectItemShared = {
    name: string;
    browser: TEffectItem;
    node: TEffectItem;
};

// Exportable effect
type TEffectExport = TEffectItemBrowser | TEffectItemNode | TEffectItemShared;

// Effect method
type TEffectItem = (params: IRotItem, options?: TEffectOptions | null) => Promise<Uint8Array | null>;

// Mode method
type TMode = (params: IRotItem & {
    effects?: {
        [key: string]: TEffectItem
    }
}) => Promise<Uint8Array>;

export {
    TEffectItem,
    TEffectOptions,
    TEffectExport,
    TEffectItemNode,
    TEffectItemBrowser,
    IRotItem,
    TRotHandler,
    IRotParams,
    IRotData,
    TMode
};