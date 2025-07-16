import { TMode } from '../../types';

const nostalgia: TMode = async ({ data, width, height, effects }) => {
    data = await effects.degrade.method({ data, width, height }, { quality: 0.85 })

    for (const direction of ['horizontal', 'vertical']) {
        data = await effects.blur.method({ data, width, height }, { direction, intensity: 2 }) || data;
    }

    data = await effects.chromaticAberration.method({ data, width, height }, { intensity: 2 });
    data = await effects.grayscale.method({ data, width, height }, { intensity: 0.275 });
    data = await effects.noise.method({ data, width, height }, { intensity: 8 });
    data = await effects.brightness.method({ data, width, height }, { brightness: 2 });

    return data;
};

export { nostalgia };
