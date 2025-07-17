import { TEffectItem, TEffectExport } from '../../../types';

interface TEffectOptions {
    octaves?: number;      // Default: 4 (number of noise layers)
    persistence?: number;  // Default: 0.5 (amplitude falloff per octave)
    scale?: number;        // Default: 4 (initial frequency/zoom; higher for finer noise)
    intensity?: number;    // Default: 0.5 (strength of noise overlay)
}

const perlinNoise = (function() {
    const p = new Array(512);
    const permutation = [
        151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,
        190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,
        88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,
        77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,
        102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,
        135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,
        5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,
        223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,
        129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,
        251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,
        49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,
        138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180
    ];
    for (let i = 0; i < 256; i++) {
        p[256 + i] = p[i] = permutation[i];
    }

    function fade(t: number): number {
        return t * t * t * (t * (t * 6 - 15) + 10);
    }

    function lerp(t: number, a: number, b: number): number {
        return a + t * (b - a);
    }

    function grad(hash: number, x: number, y: number, z: number): number {
        const h = hash & 15;
        const u = h < 8 ? x : y;
        const v = h < 4 ? y : (h === 12 || h === 14 ? x : z);
        return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
    }

    return function(x: number, y: number, z: number): number {
        const X = Math.floor(x) & 255;
        const Y = Math.floor(y) & 255;
        const Z = Math.floor(z) & 255;

        x -= Math.floor(x);
        y -= Math.floor(y);
        z -= Math.floor(z);

        const u = fade(x);
        const v = fade(y);
        const w = fade(z);

        const A = p[X] + Y;
        const AA = p[A] + Z;
        const AB = p[A + 1] + Z;
        const B = p[X + 1] + Y;
        const BA = p[B] + Z;
        const BB = p[B + 1] + Z;

        return lerp(w, lerp(v, lerp(u, grad(p[AA], x, y, z),
                                       grad(p[BA], x - 1, y, z)),
                               lerp(u, grad(p[AB], x, y - 1, z),
                                       grad(p[BB], x - 1, y - 1, z))),
                       lerp(v, lerp(u, grad(p[AA + 1], x, y, z - 1),
                                       grad(p[BA + 1], x - 1, y, z - 1)),
                               lerp(u, grad(p[AB + 1], x, y - 1, z - 1),
                                       grad(p[BB + 1], x - 1, y - 1, z - 1))));
    };
})();

const global: TEffectItem = async ({ data, width, height }, options = null) => {
    const config = (options || {}) as TEffectOptions;

    const octaves = config.octaves ?? 4;
    const persistence = config.persistence ?? 0.5;
    const scale = config.scale ?? 4;
    const intensity = config.intensity ?? 0.5;

    const maxValue = (1 - Math.pow(persistence, octaves)) / (1 - persistence); // Normalize factor for [-1,1] range

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let noise = 0;
            let amp = 1;
            let freq = scale;

            for (let o = 0; o < octaves; o++) {
                noise += amp * perlinNoise(x / freq, y / freq, 0);
                amp *= persistence;
                freq *= 2;
            }

            noise /= maxValue; // Normalize to approx [-1,1]

            const idx = (y * width + x) * 4;
            const shift = noise * intensity * 128; // Scale to [-128,128] for overlay

            data[idx] = Math.max(0, Math.min(255, data[idx] + shift));     // R
            data[idx + 1] = Math.max(0, Math.min(255, data[idx + 1] + shift)); // G
            data[idx + 2] = Math.max(0, Math.min(255, data[idx + 2] + shift)); // B
            // Alpha unchanged
        }
    }

    return data;
};

const fractalNoise: TEffectExport = {
    name: 'fractalNoise',
    browser: global,
    node: global
};

export { fractalNoise };