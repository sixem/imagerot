import { createCanvas, loadImage } from 'canvas';

const fileBufferToUint8Array = async (buffer: Buffer): Promise<Uint8Array> =>
{
    const image = await loadImage(buffer);
    const canvas = createCanvas(image.width, image.height);
    const context = canvas.getContext('2d');
  
    context.drawImage(image, 0, 0);
    const imageData = context.getImageData(0, 0, image.width, image.height);
    const { data } = imageData;
  
    return new Uint8Array(data);
};

export { fileBufferToUint8Array };
