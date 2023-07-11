import { stage, hsvToRgb, rgbToHsv } from '../../typescript/imagerot/node';
import { createTestImage, w, h } from '../testHelpers';
import { IRotItem } from '../../typescript/types';

let testImage: IRotItem;

beforeAll(async () => {
    // Create a test image
    testImage = await stage({
        data: [createTestImage(), w, h]
    });
});

// `hsvToRgb` test
test('hsvToRgb test', async () => {
    expect(hsvToRgb(0.5, 1.0, 1.0)).toStrictEqual([0, 255, 255]);
});

// `rgbToHsv` test
test('rgbToHsv test', async () => {
    expect(rgbToHsv(0, 255, 255)).toStrictEqual([0.5, 1.0, 1.0]);
});