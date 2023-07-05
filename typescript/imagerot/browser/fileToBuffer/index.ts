import { IRotData } from '../../../types';

const fileToBuffer = async (file: File): Promise<IRotData> =>
{
    return new Promise<IRotData>((resolve, reject) =>
    {
        const reader = new FileReader();

        reader.onload = async () =>
        {
            const imageLoadPromise: Promise<HTMLImageElement> = new Promise((resolve, reject) =>
            {
                const image = new Image();
        
                image.onload = () => resolve(image);
                image.onerror = reject;
                image.src = URL.createObjectURL(file);
            });

            const image = await imageLoadPromise;

            const canvas = new OffscreenCanvas(image.width, image.height);
            const context = canvas.getContext('2d');

            canvas.width = image.width;
            canvas.height = image.height;

            context?.drawImage(image, 0, 0, image.width, image.height);

            const imageData = context?.getImageData(0, 0, image.width, image.height);

            URL.revokeObjectURL(image.src);

            resolve([
                imageData ? new Uint8Array(imageData.data.buffer) : null,
                image.width || 0,
                image.height || 0
            ]);
        };

        reader.onerror = () =>
        {
            reject(new Error('Failed to read file'));
        };

        reader.readAsArrayBuffer(file);
    });
};

export {
    fileToBuffer
};