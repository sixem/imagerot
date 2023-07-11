import { createTestImage, stageUint8Array, stageCanvasBufferBrowser } from '../testHelpers';
import { stage } from '../../typescript/imagerot/browser';
import { IRotItem } from '../../typescript/types';

const testImage = createTestImage();

let staged: IRotItem;

test('staging using `Buffer` (from canvas)', async () => {
    await stageCanvasBufferBrowser(stage, testImage);
});

test('staging using `Uint8Array`', async () => {
    staged = await stageUint8Array(stage, testImage);
});

test('staging using `IRotItem` (pre-staged)', async () => {
    staged = await stage({ data: staged });
    expect(testImage).toStrictEqual(staged.data);
});