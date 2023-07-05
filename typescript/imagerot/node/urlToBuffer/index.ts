import { loadImage } from 'canvas';
import { fileBufferToUint8Array } from '../fileBufferToUint8Array';
import { IRotData } from '../../../types';

const urlToBuffer = async (url: string): Promise<IRotData> =>
{
    const response = await fetch(url);
    const imageBuffer = await response.arrayBuffer();
    const buffer = await fileBufferToUint8Array(Buffer.from(imageBuffer));
  
    const img = await loadImage(Buffer.from(imageBuffer));
    const width = img.width;
    const height = img.height;
  
    return [buffer, width, height];
};

export { urlToBuffer };
