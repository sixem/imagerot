import { TMode, IRotItem } from '../../types';

const vaporwave: TMode = async ({ data }: IRotItem) => {
    if (data.length === 0) return data;

    const COLORS = [
        [0, 184, 255], // Cyan
        [255, 0, 193], // Magenta
        [150, 0, 255], // Purple
        [0, 255, 249], // Teal
    ] as const;

    const setPixel = (j: number, r: number, g: number, b: number, a: number) => {
        data[j] = Math.floor(Math.min(Math.max(r, 0), 255));
        data[j + 1] = Math.floor(Math.min(Math.max(g, 0), 255));
        data[j + 2] = Math.floor(Math.min(Math.max(b, 0), 255));
        data[j + 3] = Math.floor(Math.min(Math.max(a, 0), 255));
    };

    const len = data.length;

    for (let j = 0; j < len; j += 4) {
        const r = data[j];
        const g = data[j + 1];
        const b = data[j + 2];
        const a = data[j + 3]; // Preserve alpha

        if (r <= 15 && g <= 15 && b <= 15) {
            setPixel(j, 0, 0, 0, a);
        } else if (r > 15 && r <= 60 && g > 15 && g <= 60 && b > 15 && b <= 60) {
            setPixel(j, COLORS[0][0], COLORS[0][1], COLORS[0][2], a);
        } else if (r > 60 && r <= 120 && g > 60 && g <= 120 && b > 60 && b <= 120) {
            setPixel(j, COLORS[1][0], COLORS[1][1], COLORS[1][2], a);
        } else if (r > 120 && r <= 180 && g > 120 && g <= 180 && b > 120 && b <= 180) {
            setPixel(j, COLORS[2][0], COLORS[2][1], COLORS[2][2], a);
        } else if (r > 180 && r <= 234 && g > 180 && g <= 234 && b > 180 && b <= 234) {
            setPixel(j, COLORS[3][0], COLORS[3][1], COLORS[3][2], a);
        } else if (r >= 235 && g >= 235 && b >= 235) {
            setPixel(j, 255, 255, 255, a);
        } else {
            setPixel(j, r, g, b, a); // Preserve original pixel if no condition matches
        }
    }

    return data;
};

export { vaporwave };