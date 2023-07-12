import fs from 'fs/promises';
import path from 'path';
import { createCanvas, ImageData as ImageDataNode } from 'canvas';

type TTestImage = {
    data: Uint8Array, width: number, height: number
};

// Dimensions to use for testing
export const w = 100, h = 100;

// Seeded random number generator
export class SeededRNG {
    private seed: number;

    constructor(seed: number) {
        this.seed = seed;
    }

    public nextFloat(): number {
        const x = Math.sin(this.seed++) * 10000;
        return x - Math.floor(x);
    }

    public nextInt(max: number): number {
        return Math.floor(this.nextFloat() * max);
    }
};

// Create a test image
export const createTestImage = (width: number = w, height: number = h, channels: number = 4): Uint8Array => {
    const image = new Uint8Array(width * height * channels);
    const sRng = new SeededRNG(width * height);

    for(let i = 0; i < width * height; i++) {
        image[i * channels + 0] = sRng.nextInt(256);
        image[i * channels + 1] = sRng.nextInt(256);
        image[i * channels + 2] = sRng.nextInt(256);
        image[i * channels + 3] = 255;
    }

    return image;
};

export const verifyOperations = async (method: any, testImage: TTestImage, operations: string[]) => {
    const initLength = testImage.data.length;

    for(const operation of operations) {
        const result = await method(testImage, operation);

        // Check data
        expect(result.data).toBeInstanceOf(Uint8Array);
        expect(result.data.length).toEqual(initLength);

        // Check dimensions
        expect(result.width).toEqual(w);
        expect(result.height).toEqual(h);
    };
};

export const verifyArrayOfOperations = async (method: any, testImage: TTestImage, operations: string[]) => {
    if(operations.length > 0) {
        const result = await method(testImage, operations, operations.map(() => ({})));

        // Check that data has changed
        expect(result.data).not.toEqual(testImage.data);
    }
};

export const stageFile = async (stage: any) => {
    // Create buffer from file
    const staged = await stage({
        data: await fs.readFile(path.join(__dirname, './data/image.png'))
    });

    // Check data
    expect(staged.data).toBeInstanceOf(Uint8Array);

    // Check dimensions
    expect(staged.width).toEqual(w);
    expect(staged.height).toEqual(h);

    return staged;
};

export const stageCanvasBufferNode = async (stage: any, testImage: Uint8Array) => {
    // Create buffer from canvas
    const canvas = createCanvas(w, h);
    const context = canvas.getContext('2d');
    context.putImageData(new ImageDataNode(new Uint8ClampedArray(testImage), w, h), 0, 0);

    // Check data
    expect(testImage).toStrictEqual(await stage({
        data: canvas.toBuffer()
    }).then((x: TTestImage) => x.data));
};

export const stageCanvasBufferBrowser = async (stage: any, testImage: Uint8Array) => {
    // Create canvas element
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;

    // Get context and set image data
    const context = canvas.getContext('2d');
    context?.putImageData(new ImageData(new Uint8ClampedArray(testImage), w, h), 0, 0);

    // Get buffer from canvas
    canvas.toBlob(async (blob) => {
        const arrayBuffer = await (blob as Blob).arrayBuffer();
        const uint8Array = new Uint8Array(arrayBuffer);
        // Check data
        expect(testImage).toStrictEqual(await stage({
            data: uint8Array
        }).then((x: TTestImage) => x.data));
    });
};

export const stageUint8Array = async (stage: any, testImage: Uint8Array) => {
    const staged = await stage({ data: [createTestImage(), w, h] });

    // Check data
    expect(testImage).toStrictEqual(staged.data);

    // Check dimensions
    expect(staged.width).toEqual(w);
    expect(staged.height).toEqual(h);

    return staged;
};
