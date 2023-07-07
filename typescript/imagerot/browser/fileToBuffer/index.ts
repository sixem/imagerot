import { IRotData } from '../../../types';

const fileToBuffer = async (file: File): Promise<IRotData> => {
    return new Promise<IRotData>((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = async () => {
            const arrayBuffer = reader.result as ArrayBuffer;
            const blob = new Blob([arrayBuffer]);

            const imageBitmap = await createImageBitmap(blob);

            const canvas = new OffscreenCanvas(imageBitmap.width, imageBitmap.height);
            const context = canvas.getContext('2d');

            if(context) {
                context.drawImage(imageBitmap, 0, 0, imageBitmap.width, imageBitmap.height);
                const imageData = context.getImageData(0, 0, imageBitmap.width, imageBitmap.height);

                resolve([
                    new Uint8Array(imageData.data.buffer),
                    imageBitmap.width,
                    imageBitmap.height
                ]);
            } else {
                reject(new Error('Failed to get context'));
            }
        };

        reader.onerror = () => {
            reject(new Error('Failed to read file'));
        };

        reader.readAsArrayBuffer(file);
    });
};

export { fileToBuffer };
