import { TMode } from '../../types';
import { getPixelOps } from '../../helpers';

const acid: TMode = async ({ data, width, height, effects }) => {
    const pixelOps = getPixelOps(effects);

    const noiseIntensityRatio = 0.1;
    const scanlinesConfig = { opacity: 0.1, thickness: 2, lines: 100 };
    const rectangleConfig = { offset: 20, intensity: 15, sizeModifier: 3, invertChance: 0.1 };
    const crAbConfig = { intensity: 5 };

    data = await effects.scanlines.method({ data, width, height }, scanlinesConfig) || data;
    data = await effects.rainbow.method({ data, width, height }) || data;
    data = await effects.rectangles.method({ data, width, height }, rectangleConfig) || data;

    for(let i = 0; i < data.length; i += 4) {
        pixelOps.solarize({ index: i, data }, { intensity: 0.4 });
        pixelOps.brightness({ index: i, data }, { brightness: -4 });
        pixelOps.noise({ index: i, data }, { ratio: noiseIntensityRatio });
    }

    data = await effects.chromaticAberration.method({ data, width, height }, crAbConfig) || data;

    return data;
};

export { acid };
