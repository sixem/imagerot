(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("imagerot", [], factory);
	else if(typeof exports === 'object')
		exports["imagerot"] = factory();
	else
		root["imagerot"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 517:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.random = exports.floor = exports.max = exports.min = void 0;
const min = Math.min;
exports.min = min;
const max = Math.max;
exports.max = max;
const floor = Math.floor;
exports.floor = floor;
const random = Math.random;
exports.random = random;


/***/ }),

/***/ 295:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.effectPool = void 0;
const effectsCommon = __importStar(__webpack_require__(871));
const effectsBrowser = __importStar(__webpack_require__(186));
const effectsUsed = Object.values(Object.assign(Object.assign({}, effectsCommon), effectsBrowser));
exports.effectPool = effectsUsed.reduce((obj, effect) => {
    if (effect.hasOwnProperty('browser'))
        obj[effect.name] = effect.browser;
    return obj;
}, {});


/***/ }),

/***/ 216:
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.blur = void 0;
const defaultDirection = 'horizontal';
const defaultIntensity = 5;
const global = ({ data, width, height }, options = null) => __awaiter(void 0, void 0, void 0, function* () {
    const { direction = defaultDirection, intensity = defaultIntensity } = (options || {});
    const buffer = new Uint8Array(data.length);
    buffer.set(data);
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let index = (y * width + x) * 4;
            let sumR = 0, sumG = 0, sumB = 0, count = 0;
            for (let i = 1; i <= intensity; i++) {
                if (direction === 'horizontal') {
                    if (x + i < width) {
                        let nextIndex = (y * width + x + i) * 4;
                        sumR += data[nextIndex];
                        sumG += data[nextIndex + 1];
                        sumB += data[nextIndex + 2];
                        count++;
                    }
                }
                else if (direction === 'vertical') {
                    if (y + i < height) {
                        let nextIndex = ((y + i) * width + x) * 4;
                        sumR += data[nextIndex];
                        sumG += data[nextIndex + 1];
                        sumB += data[nextIndex + 2];
                        count++;
                    }
                }
            }
            buffer[index] = sumR / count;
            buffer[index + 1] = sumG / count;
            buffer[index + 2] = sumB / count;
        }
    }
    return buffer;
});
const blur = {
    name: 'blur',
    browser: global,
    node: global
};
exports.blur = blur;


/***/ }),

/***/ 888:
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dither = void 0;
const defaultIntensity = 0.5;
const global = ({ data, width, height }, options = null) => __awaiter(void 0, void 0, void 0, function* () {
    const { intensity = defaultIntensity } = (options || {});
    const pixelCount = width * height;
    for (let i = 0; i < pixelCount; i++) {
        const index = i * 4;
        const grayscale = (data[index] + data[index + 1] + data[index + 2]) / 3;
        data[index] = data[index + 1] = data[index + 2] = grayscale;
    }
    for (let i = 0; i < pixelCount; i++) {
        const index = i * 4;
        const oldPixel = data[index];
        const newPixel = oldPixel > (intensity * 255) ? 255 : 0;
        const quantError = oldPixel - newPixel;
        data[index] = newPixel;
        if (index + 4 < data.length)
            data[index + 4] = data[index + 4] + quantError * 7 / 16;
        if (index + (width * 4) < data.length)
            data[index + (width * 4)] = data[index + (width * 4)] + quantError * 5 / 16;
        if (index + (width * 4) + 4 < data.length)
            data[index + (width * 4) + 4] = data[index + (width * 4) + 4] + quantError * 1 / 16;
        if (index + (width * 4) - 4 >= 0)
            data[index + (width * 4) - 4] = data[index + (width * 4) - 4] + quantError * 3 / 16;
        data[index + 1] = data[index + 2] = data[index];
    }
    return new Uint8Array(data);
});
const test = ({ data, width, height }, options = null) => __awaiter(void 0, void 0, void 0, function* () {
    data = (yield global({ data, width, height }, options));
    const pixelCount = width * height;
    // Generate random phase offsets
    const redPhase = Math.random() * 2 * Math.PI;
    const greenPhase = Math.random() * 2 * Math.PI;
    const bluePhase = Math.random() * 2 * Math.PI;
    for (let i = 0; i < pixelCount; i++) {
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
});
const dither = {
    name: 'dither',
    browser: test,
    node: test
};
exports.dither = dither;


/***/ }),

/***/ 871:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(216), exports);
__exportStar(__webpack_require__(888), exports);
__exportStar(__webpack_require__(164), exports);


/***/ }),

/***/ 164:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.rectangles = void 0;
const math_1 = __webpack_require__(517);
const defaultOffset = 5;
const defaultIntensity = 10;
const defaultSizeModifier = 1;
const defaultInvertChance = 0.15;
const minDimensionFraction = 0.25;
const minRectangularity = 1.5;
const global = ({ data, width, height }, options = null) => __awaiter(void 0, void 0, void 0, function* () {
    const { offset = defaultOffset, intensity = defaultIntensity, sizeModifier = defaultSizeModifier, invertChance = defaultInvertChance } = (options || {});
    const newData = new Uint8Array(data);
    const numRects = intensity;
    const baseRectDim = (0, math_1.floor)((0, math_1.max)(20, (0, math_1.min)(width, height) / 10) * sizeModifier);
    for (let i = 0; i < numRects; i++) {
        let rectWidth, rectHeight;
        do {
            rectWidth = (0, math_1.floor)(minDimensionFraction * baseRectDim + (0, math_1.random)() * (1 - minDimensionFraction) * baseRectDim);
            rectHeight = (0, math_1.floor)(minDimensionFraction * baseRectDim + (0, math_1.random)() * (1 - minDimensionFraction) * baseRectDim);
        } while ((0, math_1.max)(rectWidth, rectHeight) / (0, math_1.min)(rectWidth, rectHeight) < minRectangularity);
        const rectX = (0, math_1.floor)((0, math_1.random)() * (width - rectWidth));
        const rectY = (0, math_1.floor)((0, math_1.random)() * (height - rectHeight));
        const displacementX = (0, math_1.floor)(((0, math_1.random)() - 0.5) * 2 * offset);
        const displacementY = (0, math_1.floor)(((0, math_1.random)() - 0.5) * 2 * offset);
        const brightness = 5 + (0, math_1.floor)((0, math_1.random)() * 15) * ((0, math_1.random)() > 0.5 ? 1 : -1);
        const invertColors = (0, math_1.random)() < invertChance;
        for (let y = rectY; y < rectY + rectHeight; y++) {
            for (let x = rectX; x < rectX + rectWidth; x++) {
                const origIndex = (y * width + x) * 4;
                const displacedIndex = (((y + displacementY + height) % height) * width + ((x + displacementX + width) % width)) * 4;
                for (let j = 0; j < 3; j++) {
                    let adjustedPixel = data[displacedIndex + j] + brightness;
                    if (invertColors) {
                        adjustedPixel = 255 - adjustedPixel;
                    }
                    adjustedPixel = (0, math_1.max)(0, (0, math_1.min)(255, adjustedPixel));
                    if (invertColors && adjustedPixel < 50) {
                        continue;
                    }
                    newData[origIndex + j] = adjustedPixel;
                }
                newData[origIndex + 3] = data[displacedIndex + 3];
            }
        }
    }
    return newData;
});
const rectangles = {
    name: 'rectangles',
    browser: global,
    node: global
};
exports.rectangles = rectangles;


/***/ }),

/***/ 186:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(449), exports);
__exportStar(__webpack_require__(61), exports);


/***/ }),

/***/ 61:
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.degrade = void 0;
const defaultQuality = 0.075;
const browser = ({ data, width, height }, options = null) => __awaiter(void 0, void 0, void 0, function* () {
    const { quality = defaultQuality } = (options || {});
    const globalScope = typeof window !== 'undefined' ? window : self;
    const canvas = new OffscreenCanvas(width, height);
    const context = canvas.getContext('2d');
    if (!context) {
        throw new Error('Failed to obtain context');
    }
    const imageData = new ImageData(new Uint8ClampedArray(data.buffer), width, height);
    context.putImageData(imageData, 0, 0);
    const degradedBlob = yield canvas.convertToBlob({
        type: 'image/jpeg', quality
    });
    const imageBitmap = yield globalScope.createImageBitmap(degradedBlob);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(imageBitmap, 0, 0);
    const degradedImageData = context.getImageData(0, 0, width, height);
    return new Uint8Array(degradedImageData.data.buffer);
});
const degrade = {
    name: 'degrade',
    browser: browser
};
exports.degrade = degrade;


/***/ }),

/***/ 449:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pixelate = void 0;
const helpers_1 = __webpack_require__(513);
const defaultIntensity = 8;
const browser = ({ data, width, height }, options = null) => __awaiter(void 0, void 0, void 0, function* () {
    const { intensity = defaultIntensity } = (options || {});
    const canvas = new OffscreenCanvas(width, height);
    const context = canvas.getContext('2d');
    const imgData = new ImageData(new Uint8ClampedArray(data), width, height);
    context === null || context === void 0 ? void 0 : context.putImageData(imgData, 0, 0);
    const pCanvas = new OffscreenCanvas(width, height);
    const pContext = pCanvas.getContext('2d');
    if (!context || !pContext) {
        throw new Error('Failed to obtain context');
    }
    pContext.imageSmoothingEnabled = false;
    pContext.drawImage(canvas, 0, 0, width / intensity, height / intensity);
    pContext.drawImage(pCanvas, 0, 0, width / intensity, height / intensity, 0, 0, width, height);
    const pixelatedData = pContext.getImageData(0, 0, width, height).data;
    return (0, helpers_1.removeAlphaChannel)(new Uint8Array(pixelatedData.buffer));
});
const pixelate = {
    name: 'pixelate',
    browser: browser
};
exports.pixelate = pixelate;


/***/ }),

/***/ 564:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrayPick = void 0;
const arrayPick = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};
exports.arrayPick = arrayPick;


/***/ }),

/***/ 513:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(749), exports);
__exportStar(__webpack_require__(564), exports);
__exportStar(__webpack_require__(380), exports);
__exportStar(__webpack_require__(627), exports);


/***/ }),

/***/ 380:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isBrowser = void 0;
const isBrowser = () => {
    return typeof self !== 'undefined' || typeof window !== 'undefined';
};
exports.isBrowser = isBrowser;


/***/ }),

/***/ 749:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.randomize = void 0;
const randomize = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
exports.randomize = randomize;


/***/ }),

/***/ 627:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.removeAlphaChannel = void 0;
const removeAlphaChannel = (data) => {
    for (let i = 0; i < data.length; i += 4) {
        data[i + 3] = 255;
    }
    return data;
};
exports.removeAlphaChannel = removeAlphaChannel;


/***/ }),

/***/ 433:
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bufferToBlob = void 0;
const bufferToBlob = ({ data, width, height }) => __awaiter(void 0, void 0, void 0, function* () {
    const canvas = new OffscreenCanvas(width, height);
    const context = canvas.getContext('2d');
    const clampedArray = new Uint8ClampedArray(data.buffer);
    const imageData = new ImageData(clampedArray, width, height);
    context === null || context === void 0 ? void 0 : context.putImageData(imageData, 0, 0);
    return canvas.convertToBlob().then((blob) => {
        if (blob) {
            return URL.createObjectURL(blob);
        }
        else {
            throw new Error('Failed to create Blob from canvas image');
        }
    });
});
exports.bufferToBlob = bufferToBlob;


/***/ }),

/***/ 208:
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fileToBuffer = void 0;
const fileToBuffer = (file) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => __awaiter(void 0, void 0, void 0, function* () {
            const arrayBuffer = reader.result;
            const blob = new Blob([arrayBuffer]);
            const imageBitmap = yield createImageBitmap(blob);
            const canvas = new OffscreenCanvas(imageBitmap.width, imageBitmap.height);
            const context = canvas.getContext('2d');
            if (context) {
                context.drawImage(imageBitmap, 0, 0, imageBitmap.width, imageBitmap.height);
                const imageData = context.getImageData(0, 0, imageBitmap.width, imageBitmap.height);
                resolve([
                    new Uint8Array(imageData.data.buffer),
                    imageBitmap.width,
                    imageBitmap.height
                ]);
            }
            else {
                reject(new Error('Failed to get context'));
            }
        });
        reader.onerror = () => {
            reject(new Error('Failed to read file'));
        };
        reader.readAsArrayBuffer(file);
    });
});
exports.fileToBuffer = fileToBuffer;


/***/ }),

/***/ 532:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bufferToBlob = exports.useMode = exports.useEffect = exports.getRandomEffect = exports.getRandomMode = exports.listEffects = exports.listModes = exports.stage = void 0;
const helpers_1 = __webpack_require__(513);
const urlToBuffer_1 = __webpack_require__(468);
const global_1 = __webpack_require__(951);
const fileToBuffer_1 = __webpack_require__(208);
const bufferToBlob_1 = __webpack_require__(433);
Object.defineProperty(exports, "bufferToBlob", ({ enumerable: true, get: function () { return bufferToBlob_1.bufferToBlob; } }));
const modes = __importStar(__webpack_require__(961));
const browser_1 = __webpack_require__(295);
const stage = ({ data, url }) => __awaiter(void 0, void 0, void 0, function* () {
    let [buffer, width, height] = [null, 0, 0];
    if (data) {
        if (data instanceof File) {
            [buffer, width, height] = (yield (0, fileToBuffer_1.fileToBuffer)(data));
        }
        else if (Array.isArray(data) && data[0] instanceof Uint8Array) {
            [buffer, width, height] = [...data];
        }
    }
    else if (url && typeof url === 'string') {
        [buffer, width, height] = (yield (0, urlToBuffer_1.urlToBuffer)(url));
    }
    if (!buffer || !width || !height) {
        throw new Error('Failed to load image data');
    }
    return { data: buffer, width, height };
});
exports.stage = stage;
const listModes = () => {
    return Object.keys(modes);
};
exports.listModes = listModes;
const listEffects = () => {
    return Object.keys(browser_1.effectPool);
};
exports.listEffects = listEffects;
const getRandomMode = () => {
    return (0, helpers_1.arrayPick)(Object.keys(modes));
};
exports.getRandomMode = getRandomMode;
const getRandomEffect = () => {
    return (0, helpers_1.arrayPick)(Object.keys(browser_1.effectPool));
};
exports.getRandomEffect = getRandomEffect;
const useEffect = ({ data, width, height }, effect, options) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, global_1.useEffect)({ data, width, height }, browser_1.effectPool, effect, options);
});
exports.useEffect = useEffect;
const useMode = ({ data, width, height }, mode) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, global_1.useMode)({ data, width, height }, browser_1.effectPool, mode);
});
exports.useMode = useMode;


/***/ }),

/***/ 468:
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.urlToBuffer = void 0;
const urlToBuffer = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(url);
    const imageBlob = yield response.blob();
    const imageBitmap = yield createImageBitmap(imageBlob);
    const canvas = new OffscreenCanvas(imageBitmap.width, imageBitmap.height);
    const context = canvas.getContext('2d');
    if (context) {
        context.drawImage(imageBitmap, 0, 0, imageBitmap.width, imageBitmap.height);
        const imageData = context.getImageData(0, 0, imageBitmap.width, imageBitmap.height);
        return [
            new Uint8Array(imageData.data.buffer),
            imageBitmap.width,
            imageBitmap.height
        ];
    }
    throw new Error('Failed to get context');
});
exports.urlToBuffer = urlToBuffer;


/***/ }),

/***/ 858:
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.applyEffect = void 0;
const getEffect = (effectPool, effect) => {
    for (let [key, value] of Object.entries(effectPool)) {
        if (key === effect) {
            return value;
        }
    }
    return null;
};
const applyEffect = ({ data, width, height, effectPool, effect, options = null }) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const buffer = yield getEffect(effectPool, effect)({ data, width, height }, options);
            if (buffer) {
                resolve({ data: buffer, width, height });
            }
            else {
                reject('Buffer is null');
            }
        }
        catch (error) {
            reject(error);
        }
    }));
});
exports.applyEffect = applyEffect;


/***/ }),

/***/ 221:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.applyMode = void 0;
const modes = __importStar(__webpack_require__(961));
const getMode = (mode) => {
    for (let [key, value] of Object.entries(modes)) {
        if (key === mode) {
            return value;
        }
    }
    return null;
};
const applyMode = ({ data, width, height, mode, effectPool }) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const buffer = yield getMode(mode)({ data, width, height, effects: effectPool });
            resolve({ data: buffer, width, height });
        }
        catch (error) {
            reject(error);
        }
    }));
});
exports.applyMode = applyMode;


/***/ }),

/***/ 111:
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.blobToBuffer = void 0;
const blobToBuffer = (blob, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    const imageBitmap = yield createImageBitmap(blob);
    const offscreenCanvas = new OffscreenCanvas(width, height);
    const context = offscreenCanvas.getContext('2d');
    if (!context) {
        throw new Error('Failed to obtain context from `OffscreenCanvas`');
    }
    context.drawImage(imageBitmap, 0, 0);
    const imageData = context.getImageData(0, 0, width, height);
    return new Uint8Array(imageData.data.buffer);
});
exports.blobToBuffer = blobToBuffer;


/***/ }),

/***/ 951:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(111), exports);
__exportStar(__webpack_require__(236), exports);
__exportStar(__webpack_require__(831), exports);
__exportStar(__webpack_require__(221), exports);
__exportStar(__webpack_require__(858), exports);


/***/ }),

/***/ 236:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useEffect = void 0;
const applyEffect_1 = __webpack_require__(858);
const useEffect = ({ data, width, height }, effectPool, effect, options) => __awaiter(void 0, void 0, void 0, function* () {
    const effectsToUse = (!Array.isArray(effect) ? [effect] : effect);
    for (let _effect of effectsToUse) {
        if (!effectPool[_effect]) {
            throw new Error(`Invalid effect: ${_effect}`);
        }
        const applied = yield (0, applyEffect_1.applyEffect)({ data, width, height, effectPool, effect: _effect, options });
        [data, width, height] = [applied.data, applied.width, applied.height];
    }
    return { data, width, height };
});
exports.useEffect = useEffect;


/***/ }),

/***/ 831:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useMode = void 0;
const applyMode_1 = __webpack_require__(221);
const modes = __importStar(__webpack_require__(961));
const useMode = ({ data, width, height }, effectPool, mode) => __awaiter(void 0, void 0, void 0, function* () {
    const modesToUse = (!Array.isArray(mode) ? [mode] : mode);
    for (let _mode of modesToUse) {
        if (!modes.hasOwnProperty(_mode)) {
            throw new Error(`Invalid mode: ${_mode}`);
        }
        const applied = yield (0, applyMode_1.applyMode)({ data, width, height, effectPool, mode: _mode });
        [data, width, height] = [applied.data, applied.width, applied.height];
    }
    return { data, width, height };
});
exports.useMode = useMode;


/***/ }),

/***/ 53:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.chimera = void 0;
const math_1 = __webpack_require__(517);
const helpers_1 = __webpack_require__(513);
const weight = [0.25, 0.5];
const chimera = ({ data, width, height, effects }) => __awaiter(void 0, void 0, void 0, function* () {
    const algorithm = ({ data, width, height }) => __awaiter(void 0, void 0, void 0, function* () {
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                let index = (y * width + x) * 4;
                let r = data[index], g = data[index + 1], b = data[index + 2];
                data[index + 0] = (r + g * weight[1] + b * weight[0]);
                data[index + 1] = (r * weight[1] + g + b * weight[0]);
                data[index + 2] = (r * weight[0] + g * weight[1] + b);
            }
        }
        return data;
    });
    const direction = (0, math_1.random)() >= 0.5 ? 'horizontal' : 'vertical';
    const intensity = (0, helpers_1.randomize)(5, 10);
    data = (yield (effects === null || effects === void 0 ? void 0 : effects.blur({ data, width, height }, { direction, intensity }))) || data;
    data = yield algorithm({ data, width, height });
    for (let index = 0; index < data.length; index += 4) {
        const useNoise = (0, math_1.random)() < 0.2;
        const useGrain = (0, math_1.random)() < 0.4 ? (0, math_1.floor)((0, math_1.random)() * 50) : 0;
        for (let i = 0; i < 3; i++) {
            data[index + i] = useNoise ? (0, math_1.min)(data[index + i] + (0, helpers_1.randomize)(1, i === 0 ? 15 : 10), 255) : data[index + i];
            data[index + i] = (0, math_1.min)(255, (0, math_1.max)(0, data[index + i] + ((0, math_1.floor)((0, math_1.random)() * 20) - 30)));
            data[index + i] = useGrain ? (0, math_1.min)(255, (0, math_1.max)(0, data[index + i] + useGrain)) : data[index + i];
        }
        ;
    }
    data = (yield (effects === null || effects === void 0 ? void 0 : effects.rectangles({ data, width, height }, { offset: 10, intensity: 15, sizeModifier: 1.25 }))) || data;
    return data;
});
exports.chimera = chimera;


/***/ }),

/***/ 961:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(53), exports);
__exportStar(__webpack_require__(450), exports);


/***/ }),

/***/ 450:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.lacunae = void 0;
const helpers_1 = __webpack_require__(513);
const math_1 = __webpack_require__(517);
const lacunae = ({ data }) => __awaiter(void 0, void 0, void 0, function* () {
    for (let index = 0; index < data.length; index += 4) {
        const useNoise = (0, math_1.random)() < 0.2;
        const useGrain = (0, math_1.random)() < 0.4 ? (0, math_1.floor)((0, math_1.random)() * 50) : 0;
        for (let i = 0; i < 3; i++) {
            data[index + i] = data[index + i] - (0, helpers_1.randomize)(1, 15);
            data[index + i] = data[index + i] < 0 ? data[index + i] + 255 : data[index + i];
            data[index + i] = useNoise ? (0, math_1.min)(data[index + i] + (0, helpers_1.randomize)(1, i === 0 ? 15 : 10), 255) : data[index + i];
            data[index + i] = (0, math_1.min)(255, (0, math_1.max)(0, data[index + i] + (0, math_1.floor)((0, math_1.random)() * 20 - 40)));
            data[index + i] = useGrain ? (0, math_1.min)(255, (0, math_1.max)(0, data[index + i] + useGrain)) : data[index + i];
        }
        ;
    }
    return data;
});
exports.lacunae = lacunae;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(532);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});