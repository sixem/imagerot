import { createTestImage, stageFile, stageCanvasBufferNode, stageUint8Array } from '../testHelpers';
import { stage } from '../../typescript/imagerot/node';
import { IRotItem } from '../../typescript/types';

const testImage = createTestImage();

let staged: IRotItem;

test('staging using `Buffer` (from file)', async () => {
    staged = await stageFile(stage);
});

test('staging using `Buffer` (from canvas)', async () => {
    await stageCanvasBufferNode(stage, testImage);
});

test('staging using `Uint8Array`', async () => {
    await stageUint8Array(stage, testImage);
});

test('staging using `IRotItem` (pre-staged)', async () => {
    staged = await stage({ data: staged });
    expect(testImage).toStrictEqual(staged.data);
});
