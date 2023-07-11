import { stage, bufferToBitmap } from '../../typescript/imagerot/browser';
import { createTestImage, w, h } from '../testHelpers';
import { IRotItem } from '../../typescript/types';
import { OffscreenCanvasMock } from './mocks';

let testImage: IRotItem;

beforeAll(async () => {
    // Mock `OffscreenCanvas`
    (global as any).OffscreenCanvas = OffscreenCanvasMock;
    // Create a test image
    testImage = await stage({
        data: [createTestImage(), w, h]
    });
});

// `bufferToBitmap` test
test('bufferToBitmap test', async () => {
    await bufferToBitmap(testImage)
});