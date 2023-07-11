import { createTestImage, verifyOperations, verifyArrayOfOperations, w, h } from '../testHelpers';
import { IRotItem } from '../../typescript/types';
import { stage, useMode, listModes } from '../../typescript/imagerot/node';

let allModes: string[] = [];
let testImage: IRotItem;

beforeAll(async () => {
    // Get all exported modes
    allModes = listModes();
    // Create a test image
    testImage = await stage({
        data: [createTestImage(), w, h]
    });
});

// Verify that all effects can be called and return the correct data
test('verifying effects', async () => {
    await verifyOperations(useMode, testImage, allModes);
});

// Verify that modes can be passed as an array
test('apply multiple modes', async () => {
    await verifyArrayOfOperations(useMode, testImage, allModes);
});

// Verify that an error is thrown when an invalid mode is passed
test('invalid effect name', async () => {
    await expect(useMode(
        testImage, 'invalidMode'
    )).rejects.toThrow(`Invalid mode: invalidMode`);
});