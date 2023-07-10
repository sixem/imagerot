import { TEffectItem, TEffectExport } from '../../../types';

interface TEffectOptions {
    intensity?: number;
}

const defaultIntensity = 5;

const global: TEffectItem = async ({ data, width }, options = null) => {
    const { intensity = defaultIntensity } = (options || {}) as TEffectOptions;

    const rLayer = new Uint8Array(data.length);
    const gLayer = new Uint8Array(data.length);
    const bLayer = new Uint8Array(data.length);

    for(let i = 0; i < data.length; i += 4) {
        rLayer[i] = data[i];
        gLayer[i + 1] = data[i + 1];
        bLayer[i + 2] = data[i + 2];
        rLayer[i + 3] = gLayer[i + 3] = bLayer[i + 3] = data[i + 3];
    }

    const shiftLayer = (layer: Uint8Array, offset: number) => {
        const shiftedLayer = new Uint8Array(layer.length);
        for(let i = 0; i < layer.length; i += 4) {
            const x = (i / 4) % width, y = Math.floor((i / 4) / width);
            const shiftedX = Math.max(0, Math.min(width - 1, x + offset));
            const shiftedIndex = (shiftedX + y * width) * 4;
            
            shiftedLayer[shiftedIndex] = layer[i];
            shiftedLayer[shiftedIndex + 1] = layer[i + 1];
            shiftedLayer[shiftedIndex + 2] = layer[i + 2];
            shiftedLayer[shiftedIndex + 3] = layer[i + 3];
        }
        return shiftedLayer;
    }

    const rShift = Math.floor((Math.random() * 2 - 1) * intensity);
    const gShift = Math.floor((Math.random() * 2 - 1) * intensity);
    const bShift = Math.floor((Math.random() * 2 - 1) * intensity);
    
    const shiftedRLayer = shiftLayer(rLayer, rShift);
    const shiftedGLayer = shiftLayer(gLayer, gShift);
    const shiftedBLayer = shiftLayer(bLayer, bShift);

    for(let i = 0; i < data.length; i += 4) {
        data[i] = shiftedRLayer[i];
        data[i + 1] = shiftedGLayer[i + 1];
        data[i + 2] = shiftedBLayer[i + 2];
        data[i + 3] = data[i + 3];
    }

    return data;
};

const chromaticAberration: TEffectExport = {
    name: 'chromaticAberration',
    browser: global,
    node: global
};

export { chromaticAberration };
