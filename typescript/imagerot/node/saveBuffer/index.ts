import fs from 'fs/promises';
import { createCanvas } from 'canvas';
import { IBufferHandlerParams } from '../../../types';

type TSaveBufferConf = {
    mime?: string;
};

type TSaveBuffer = (params: IBufferHandlerParams, path: string, config?: TSaveBufferConf | null) => Promise<void>;

const saveBuffer: TSaveBuffer = async ({ data, width, height }, path, config = null) =>
{
    config = config || {};

    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    const imageData = ctx.createImageData(width, height);
    imageData.data.set(data);

    ctx.putImageData(imageData, 0, 0);

    const buffer = (canvas.toBuffer as any)(config.mime || 'image/png', config);

    return fs.writeFile(path, buffer);
};

export { saveBuffer };
