import { createTestImage, w, h } from '../testHelpers';
import { IRotItem } from '../../typescript/types';
import { stage, useMode, listModes } from '../../typescript/imagerot/browser';
import { OffscreenCanvasMock } from './mocks';

let allModes: string[] = [];
let testImage: IRotItem;

beforeAll(async () => {
    // Mock `OffscreenCanvas`
    (global as any).OffscreenCanvas = OffscreenCanvasMock;
    // Get all exported modes
    allModes = listModes();
    // Create a test image
    testImage = await stage({
        data: [createTestImage(), w, h]
    });
});

// Verify that all effects can be called and return the correct data
test('verifying effects', async () => {
    const initLength = testImage.data.length;

    for(const mode of allModes) {
        const result = await useMode(testImage, mode);
        // Check data
        expect(result.data).toBeInstanceOf(Uint8Array);
        expect(result.data.length).toEqual(initLength);
        // Check dimensions
        expect(result.width).toEqual(w);
        expect(result.height).toEqual(h);
    };
});

// Verify that modes can be passed as an array
test('apply multiple modes', async () => {
    if(allModes.length > 0) {
        const result = await useMode(testImage, allModes);
        // Check that data has changed
        expect(result.data).not.toEqual(testImage.data);
    }
});

// Verify that an error is thrown when an invalid mode is passed
test('invalid effect name', async () => {
    await expect(useMode(
        testImage, 'invalidMode'
    )).rejects.toThrow(`Invalid mode: invalidMode`);
});