import { TEffectItem, TEffectExport } from '../../../types';

type TControlPoints = {
    stop: number;
    color: { r: number; g: number; b: number; a?: number };
}[];

interface TEffectOptions {
    intensity?: number;
    controlPoints?: TControlPoints;
};

const defaultIntensity = 0.8;
const defaultControlPoints: TControlPoints = [
    { stop: 0.0, color: { r: 0, g: 0, b: 255 } },
    { stop: 0.1, color: { r: 0, g: 255, b: 0 } },
    { stop: 0.3, color: { r: 255, g: 255, b: 0 } },
    { stop: 0.5, color: { r: 255, g: 165, b: 0 } },
    { stop: 0.7, color: { r: 255, g: 0, b: 0 } },
    { stop: 1.0, color: { r: 128, g: 0, b: 128 } }
];

const interpolateColor = (colors: TControlPoints, t: number) => {
    if(t <= 0) return colors[0].color;
    if(t >= 1) return colors[colors.length - 1].color;

    let i = 1;

    for(; i < colors.length - 1; i++) {
        if (t < colors[i].stop) break;
    }

    const t0 = colors[i - 1].stop, t1 = colors[i].stop;
    const ratio = (t - t0) / (t1 - t0);

    return {
        r: Math.round(colors[i - 1].color.r * (1 - ratio) + colors[i].color.r * ratio),
        g: Math.round(colors[i - 1].color.g * (1 - ratio) + colors[i].color.g * ratio),
        b: Math.round(colors[i - 1].color.b * (1 - ratio) + colors[i].color.b * ratio),
        a: 255
    };
}

const global: TEffectItem = async ({ data, width, height }, options = null) => {
    const {
        intensity = defaultIntensity,
        controlPoints = defaultControlPoints
    } = (options || {}) as TEffectOptions;

    const dataLength = width * height * 4;

    for(let i = 0; i < dataLength; i += 4) {
        const pixelIntensity = (data[i] + data[i + 1] + data[i + 2]) / (3 * 255);
        const color = interpolateColor(controlPoints, pixelIntensity * intensity);

        data[i] = color.r;
        data[i + 1] = color.g;
        data[i + 2] = color.b;
        data[i + 3] = color.a || data[i + 3];
    }

    return data;
};

const heatmap: TEffectExport = {
    name: 'heatmap',
    browser: global,
    node: global
};

export { heatmap };
