import { TEffectItem, TEffectExport, TEffectOptions } from '../../../types';

const defaultIntensity = 0.5;

const global: TEffectItem = async ({ data, width, height }, options = null) => {
    const { intensity = defaultIntensity } = (options || {}) as TEffectOptions;
    const pixelCount = width * height;

    for(let i = 0; i < pixelCount; i++) {
        const index = i * 4;
        const grayscale = (data[index] + data[index + 1] + data[index + 2]) / 3;
        data[index] = data[index + 1] = data[index + 2] = grayscale;
    }

    for(let i = 0; i < pixelCount; i++) {
        const index = i * 4;

        const oldPixel = data[index];
        const newPixel = oldPixel > ((intensity as number) * 255) ? 255 : 0;
        const quantError = oldPixel - newPixel;

        data[index] = newPixel;

        if(index + 4 < data.length)
            data[index + 4] = data[index + 4] + quantError * 7 / 16;

        if(index + (width * 4) < data.length)
            data[index + (width * 4)] = data[index + (width * 4)] + quantError * 5 / 16;

        if(index + (width * 4) + 4 < data.length)
            data[index + (width * 4) + 4] = data[index + (width * 4) + 4] + quantError * 1 / 16;

        if(index + (width * 4) - 4 >= 0)
            data[index + (width * 4) - 4] = data[index + (width * 4) - 4] + quantError * 3 / 16;

            data[index + 1] = data[index + 2] = data[index];
    }

    return new Uint8Array(data);
};

const test: TEffectItem = async ({ data, width, height }, options = null) => {
    data = await global({ data, width, height }, options) as Uint8Array;

    const pixelCount = width * height;

    // Generate random phase offsets
    const redPhase = Math.random() * 2 * Math.PI;
    const greenPhase = Math.random() * 2 * Math.PI;
    const bluePhase = Math.random() * 2 * Math.PI;

    for(let i = 0; i < pixelCount; i++) {
      const index = i * 4;
      const x = i % width; // x position of the pixel
      const y = Math.floor(i / width); // y position of the pixel

      const grayscale = data[index]; // since it's grayscale image, we can take any channel's value
      
      const redWave = grayscale * (0.75 + 0.25 * Math.sin(2 * Math.PI * (x / width) + redPhase));
      const greenWave = grayscale * (0.75 + 0.25 * Math.sin(2 * Math.PI * (y / height) + greenPhase));
      const blueWave = grayscale * (0.75 + 0.25 * Math.sin(2 * Math.PI * ((x / width + y / height) + bluePhase)));

      // Apply power function to increase contrast
      data[index] = Math.pow(redWave / 255, 0.75) * 255; // red
      data[index + 1] = Math.pow(greenWave / 255, 0.75) * 255; // green
      data[index + 2] = Math.pow(blueWave / 255, 0.75) * 255; // blue
    }
  
    return new Uint8Array(data);
};


const dither: TEffectExport = {
    name: 'dither',
    browser: test,
    node: test
};

export { dither };
