import { TEffectItem, TEffectExport } from '../../../types';

const global: TEffectItem = async ({ data, width, height }) => {
    const pixelCount = width * height;

    const redPhase = Math.random() * 2 * Math.PI;
    const greenPhase = Math.random() * 2 * Math.PI;
    const bluePhase = Math.random() * 2 * Math.PI;

    for(let i = 0; i < pixelCount; i++) {
      const index = i * 4;
      const x = i % width;
      const y = Math.floor(i / width);

      const grayscale = data[index];
      
      const redWave = grayscale * (0.75 + 0.25 * Math.sin(2 * Math.PI * (x / width) + redPhase));
      const greenWave = grayscale * (0.75 + 0.25 * Math.sin(2 * Math.PI * (y / height) + greenPhase));
      const blueWave = grayscale * (0.75 + 0.25 * Math.sin(2 * Math.PI * ((x / width + y / height) + bluePhase)));

      data[index] = Math.pow(redWave / 255, 0.75) * 255;
      data[index + 1] = Math.pow(greenWave / 255, 0.75) * 255;
      data[index + 2] = Math.pow(blueWave / 255, 0.75) * 255;
    }
  
    return new Uint8Array(data);
};


const rainbow: TEffectExport = {
    name: 'rainbow',
    browser: global,
    node: global
};

export { rainbow };
