import { createTestImage, verifyOperations, verifyArrayOfOperations, w, h } from '../testHelpers';
import { IRotItem } from '../../typescript/types';
import { stage, useEffect, listEffects } from '../../typescript/imagerot/node';

let allEffects: string[] = [];
let testImage: IRotItem;

beforeAll(async () => {
    // Get all exported effects
    allEffects = listEffects();
    // Create a test image
    testImage = await stage({
        data: [createTestImage(), w, h]
    });
});

// Verify that all effects can be called and return the correct data
test('verifying effects', async () => {
    await verifyOperations(useEffect, testImage, allEffects);
});

// Verify that effects can be passed as an array
test('apply multiple effects', async () => {
    await verifyArrayOfOperations(useEffect, testImage, allEffects);
});

// Verify that an error is thrown when an invalid effect is passed
test('invalid effect name', async () => {
    await expect(useEffect(
        testImage, 'invalidEffect'
    )).rejects.toThrow(`Invalid effect: invalidEffect`);
});