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

<<<<<<< HEAD
/***/ 24:
=======
/***/ 104:
>>>>>>> feat/additional-effects-and-modes
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
<<<<<<< HEAD
exports.applyEffect = void 0;
const getEffect = (effectPool, effect) => {
    for (let [key, value] of Object.entries(effectPool)) {
        if (key === effect) {
            return value.method;
        }
    }
    return null;
};
const applyEffect = (_a) => __awaiter(void 0, [_a], void 0, function* ({ data, width, height, effectPool, effect, options = null }) {
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
=======
exports.grayscale = void 0;
const defaultIntensity = 1;
const global = (_a, ...args_1) => __awaiter(void 0, [_a, ...args_1], void 0, function* ({ data }, options = null) {
    const { intensity = defaultIntensity } = (options || {});
    for (let i = 0; i < data.length; i += 4) {
        let r = data[i], g = data[i + 1], b = data[i + 2];
        let gray = 0.299 * r + 0.587 * g + 0.114 * b;
        data[i] = r * (1 - intensity) + gray * intensity;
        data[i + 1] = g * (1 - intensity) + gray * intensity;
        data[i + 2] = b * (1 - intensity) + gray * intensity;
    }
    return data;
});
const grayscale = {
    name: 'grayscale',
    browser: global,
    node: global
};
exports.grayscale = grayscale;
>>>>>>> feat/additional-effects-and-modes


/***/ }),

<<<<<<< HEAD
/***/ 55:
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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
=======
/***/ 428:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isBrowser = void 0;
const isBrowser = () => {
    return typeof self !== 'undefined' || typeof window !== 'undefined';
};
exports.isBrowser = isBrowser;


/***/ }),

/***/ 668:
/***/ (function(__unused_webpack_module, exports) {


>>>>>>> feat/additional-effects-and-modes
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
<<<<<<< HEAD
exports.rgbToHsv = exports.hsvToRgb = exports.urlToBuffer = exports.fileToBuffer = exports.bufferToBitmap = exports.bufferToBlob = exports.useMode = exports.useEffect = exports.listEffects = exports.listModes = exports.stage = void 0;
const urlToBuffer_1 = __webpack_require__(954);
Object.defineProperty(exports, "urlToBuffer", ({ enumerable: true, get: function () { return urlToBuffer_1.urlToBuffer; } }));
const global_1 = __webpack_require__(250);
const bufferToBitmap_1 = __webpack_require__(520);
Object.defineProperty(exports, "bufferToBitmap", ({ enumerable: true, get: function () { return bufferToBitmap_1.bufferToBitmap; } }));
const fileToBuffer_1 = __webpack_require__(241);
Object.defineProperty(exports, "fileToBuffer", ({ enumerable: true, get: function () { return fileToBuffer_1.fileToBuffer; } }));
const bufferToBlob_1 = __webpack_require__(468);
Object.defineProperty(exports, "bufferToBlob", ({ enumerable: true, get: function () { return bufferToBlob_1.bufferToBlob; } }));
const helpers_1 = __webpack_require__(527);
Object.defineProperty(exports, "hsvToRgb", ({ enumerable: true, get: function () { return helpers_1.hsvToRgb; } }));
Object.defineProperty(exports, "rgbToHsv", ({ enumerable: true, get: function () { return helpers_1.rgbToHsv; } }));
const modes = __importStar(__webpack_require__(634));
const browser_1 = __webpack_require__(800);
const stage = (_a) => __awaiter(void 0, [_a], void 0, function* ({ data, url }) {
    let [buffer, width, height] = [null, 0, 0];
    if (data) {
        if (data instanceof File) {
            [buffer, width, height] = (yield (0, fileToBuffer_1.fileToBuffer)(data));
        }
        else if (Array.isArray(data) && data[0] instanceof Uint8Array) {
            [buffer, width, height] = [...data];
        }
        else if (typeof data === 'object') {
            let preStaged = data;
            if (preStaged.data instanceof Uint8Array && preStaged.width && preStaged.height) {
                [buffer, width, height] = [preStaged.data, preStaged.width, preStaged.height];
=======
exports.blur = void 0;
const defaultDirection = 'horizontal';
const defaultIntensity = 5;
const global = (_a, ...args_1) => __awaiter(void 0, [_a, ...args_1], void 0, function* ({ data, width, height }, options = null) {
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
>>>>>>> feat/additional-effects-and-modes
            }
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
const useEffect = (_a, effect_1, options_1) => __awaiter(void 0, [_a, effect_1, options_1], void 0, function* ({ data, width, height }, effect, options) {
    return (0, global_1.useEffect)({ data, width, height }, browser_1.effectPool, effect, options || {});
});
exports.useEffect = useEffect;
const useMode = (_a, mode_1) => __awaiter(void 0, [_a, mode_1], void 0, function* ({ data, width, height }, mode) {
    return (0, global_1.useMode)({ data, width, height }, browser_1.effectPool, mode);
});
exports.useMode = useMode;


/***/ }),

<<<<<<< HEAD
/***/ 59:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {
=======
/***/ 1083:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.randomize = void 0;
const randomize = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
exports.randomize = randomize;


/***/ }),

/***/ 1136:
/***/ (function(__unused_webpack_module, exports) {
>>>>>>> feat/additional-effects-and-modes


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
<<<<<<< HEAD
exports.useEffect = void 0;
const applyEffect_1 = __webpack_require__(24);
const useEffect = (_a, effectPool_1, effect_1, options_1) => __awaiter(void 0, [_a, effectPool_1, effect_1, options_1], void 0, function* ({ data, width, height }, effectPool, effect, options) {
    const effectsToUse = (!Array.isArray(effect) ? [effect] : effect);
    if (Array.isArray(options) && options.length !== effectsToUse.length) {
        throw new Error('Invalid options length');
    }
    let i = 0;
    for (let currentEffect of effectsToUse) {
        if (!effectPool[currentEffect]) {
            throw new Error(`Invalid effect: ${currentEffect}`);
=======
exports.borders = void 0;
const defaultBorderSize = 10;
const defaultBorderColor = [0, 0, 0];
const defaultBorderOpacity = 1;
const global = (_a, ...args_1) => __awaiter(void 0, [_a, ...args_1], void 0, function* ({ data, width, height }, options = null) {
    const { size = defaultBorderSize, color = defaultBorderColor, opacity = defaultBorderOpacity } = (options || {});
    for (let i = 0; i < data.length; i += 4) {
        let x = (i / 4) % width, y = Math.floor((i / 4) / width);
        if (x < size || x >= width - size || y < size || y >= height - size) {
            data[i] = data[i] * (1 - opacity) + color[0] * opacity;
            data[i + 1] = data[i + 1] * (1 - opacity) + color[1] * opacity;
            data[i + 2] = data[i + 2] * (1 - opacity) + color[2] * opacity;
>>>>>>> feat/additional-effects-and-modes
        }
        const applied = yield (0, applyEffect_1.applyEffect)({
            data, width, height, effectPool,
            effect: currentEffect,
            options: Array.isArray(options) ? options[i] : options
        });
        [data, width, height] = [applied.data, applied.width, applied.height];
        i++;
    }
    return { data, width, height };
});
exports.useEffect = useEffect;


/***/ }),

/***/ 83:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.randomize = void 0;
const randomize = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
exports.randomize = randomize;


/***/ }),

<<<<<<< HEAD
/***/ 84:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {
=======
/***/ 1181:
/***/ (function(__unused_webpack_module, exports) {
>>>>>>> feat/additional-effects-and-modes


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
<<<<<<< HEAD
exports.chimera = void 0;
const math_1 = __webpack_require__(421);
const helpers_1 = __webpack_require__(527);
const weight = [0.25, 0.5];
const chimera = (_a) => __awaiter(void 0, [_a], void 0, function* ({ data, width, height, effects }) {
    const algorithm = (_a) => __awaiter(void 0, [_a], void 0, function* ({ data, width, height }) {
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
    data = (yield effects.blur.method({ data, width, height }, { direction, intensity })) || data;
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
    data = (yield effects.rectangles.method({ data, width, height }, { offset: 10, intensity: 15, sizeModifier: 1.25 })) || data;
    return data;
});
exports.chimera = chimera;
=======
exports.nostalgia = void 0;
const nostalgia = (_a) => __awaiter(void 0, [_a], void 0, function* ({ data, width, height, effects }) {
    data = yield effects.degrade.method({ data, width, height }, { quality: 0.85 });
    for (const direction of ['horizontal', 'vertical']) {
        data = (yield effects.blur.method({ data, width, height }, { direction, intensity: 2 })) || data;
    }
    data = yield effects.chromaticAberration.method({ data, width, height }, { intensity: 2 });
    data = yield effects.grayscale.method({ data, width, height }, { intensity: 0.275 });
    data = yield effects.noise.method({ data, width, height }, { intensity: 8 });
    data = yield effects.brightness.method({ data, width, height }, { brightness: 2 });
    return data;
});
exports.nostalgia = nostalgia;
>>>>>>> feat/additional-effects-and-modes


/***/ }),

<<<<<<< HEAD
/***/ 90:
=======
/***/ 1233:
>>>>>>> feat/additional-effects-and-modes
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
<<<<<<< HEAD
exports.acid = void 0;
const helpers_1 = __webpack_require__(527);
const acid = (_a) => __awaiter(void 0, [_a], void 0, function* ({ data, width, height, effects }) {
    const pixelOps = (0, helpers_1.getPixelOps)(effects);
    const noiseIntensityRatio = 0.1;
    const scanlinesConfig = { opacity: 0.1, thickness: 2, lines: 100 };
    const rectangleConfig = { offset: 20, intensity: 15, sizeModifier: 3, invertChance: 0.1 };
    const crAbConfig = { intensity: 5 };
    data = (yield effects.scanlines.method({ data, width, height }, scanlinesConfig)) || data;
    data = (yield effects.rainbow.method({ data, width, height })) || data;
    data = (yield effects.rectangles.method({ data, width, height }, rectangleConfig)) || data;
    for (let i = 0; i < data.length; i += 4) {
        pixelOps.solarize({ index: i, data }, { intensity: 0.4 });
        pixelOps.brightness({ index: i, data }, { brightness: -4 });
        pixelOps.noise({ index: i, data }, { ratio: noiseIntensityRatio });
    }
    data = (yield effects.chromaticAberration.method({ data, width, height }, crAbConfig)) || data;
    return data;
});
exports.acid = acid;


/***/ }),

/***/ 92:
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
const helpers_1 = __webpack_require__(527);
const math_1 = __webpack_require__(421);
const lacunae = (_a) => __awaiter(void 0, [_a], void 0, function* ({ data }) {
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
=======
exports.rainbow = void 0;
const math_1 = __webpack_require__(8421);
const global = (_a) => __awaiter(void 0, [_a], void 0, function* ({ data, width, height }) {
    const rPhase = (0, math_1.random)() * 2 * math_1.PI;
    const gPhase = (0, math_1.random)() * 2 * math_1.PI;
    const bPhase = (0, math_1.random)() * 2 * math_1.PI;
    for (let i = 0; i < data.length; i += 4) {
        const x = (i / 4) % width;
        const y = (0, math_1.floor)((i / 4) / width);
        const grayscale = data[i];
        const rWave = grayscale * (0.75 + 0.25 * (0, math_1.sin)(2 * math_1.PI * (x / width) + rPhase));
        const gWave = grayscale * (0.75 + 0.25 * (0, math_1.sin)(2 * math_1.PI * (y / height) + gPhase));
        const bWwave = grayscale * (0.75 + 0.25 * (0, math_1.sin)(2 * math_1.PI * ((x / width + y / height) + bPhase)));
        data[i] = (0, math_1.pow)(rWave / 255, 0.75) * 255;
        data[i + 1] = (0, math_1.pow)(gWave / 255, 0.75) * 255;
        data[i + 2] = (0, math_1.pow)(bWwave / 255, 0.75) * 255;
    }
    return data;
});
const rainbow = {
    name: 'rainbow',
    browser: global,
    node: global
};
exports.rainbow = rainbow;
>>>>>>> feat/additional-effects-and-modes


/***/ }),

<<<<<<< HEAD
/***/ 97:
=======
/***/ 1356:
>>>>>>> feat/additional-effects-and-modes
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
<<<<<<< HEAD
exports.noise = void 0;
const defaultIntensity = 10;
const pixelOp = ({ index, data }, options = null) => {
    const { intensity = defaultIntensity, ratio = null } = (options || {});
    const intensityRatio = ratio ? ratio : intensity / 100;
    for (let j = 0; j < 3; j++) {
        const noise = Math.random() * 2 - 1;
        const adjustedNoise = noise * intensityRatio;
        const newColorChannelValue = data[index + j] + adjustedNoise * 255;
        data[index + j] = Math.max(0, Math.min(255, newColorChannelValue));
    }
};
const global = (_a, ...args_1) => __awaiter(void 0, [_a, ...args_1], void 0, function* ({ data }, options = null) {
    const { intensity = defaultIntensity, ratio = null } = (options || {});
    const intensityRatio = ratio ? ratio : intensity / 100;
    for (let i = 0; i < data.length; i += 4) {
        pixelOp({ index: i, data }, { ratio: intensityRatio });
    }
    return data;
});
const noise = {
    name: 'noise',
=======
exports.sharpen = void 0;
const global = (_a) => __awaiter(void 0, [_a], void 0, function* ({ data, width, height }) {
    const kernel = [
        0, -1, 0,
        -1, 5, -1,
        0, -1, 0
    ];
    const target = new Uint8Array(data.length);
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4;
            let r = 0, g = 0, b = 0;
            for (let ky = -1; ky <= 1; ky++) {
                for (let kx = -1; kx <= 1; kx++) {
                    const xSample = Math.max(0, Math.min(width - 1, x + kx));
                    const ySample = Math.max(0, Math.min(height - 1, y + ky));
                    const sampleIdx = (ySample * width + xSample) * 4;
                    const kernelIdx = (ky + 1) * 3 + (kx + 1);
                    r += data[sampleIdx + 0] * kernel[kernelIdx];
                    g += data[sampleIdx + 1] * kernel[kernelIdx];
                    b += data[sampleIdx + 2] * kernel[kernelIdx];
                }
            }
            target[idx + 0] = Math.min(255, Math.max(0, r));
            target[idx + 1] = Math.min(255, Math.max(0, g));
            target[idx + 2] = Math.min(255, Math.max(0, b));
            target[idx + 3] = data[idx + 3];
        }
    }
    data.set(target);
    return data;
});
const sharpen = {
    name: 'sharpen',
>>>>>>> feat/additional-effects-and-modes
    browser: global,
    node: global,
    pixelOp: pixelOp
};
<<<<<<< HEAD
exports.noise = noise;
=======
exports.sharpen = sharpen;


/***/ }),

/***/ 1433:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.degrade = exports.pixelate = void 0;
var browser_1 = __webpack_require__(3629);
Object.defineProperty(exports, "pixelate", ({ enumerable: true, get: function () { return browser_1.pixelate; } }));
var browser_2 = __webpack_require__(7143);
Object.defineProperty(exports, "degrade", ({ enumerable: true, get: function () { return browser_2.degrade; } }));


/***/ }),

/***/ 1935:
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
>>>>>>> feat/additional-effects-and-modes


/***/ }),

<<<<<<< HEAD
/***/ 104:
=======
/***/ 2024:
>>>>>>> feat/additional-effects-and-modes
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
<<<<<<< HEAD
exports.grayscale = void 0;
const defaultIntensity = 1;
const global = (_a, ...args_1) => __awaiter(void 0, [_a, ...args_1], void 0, function* ({ data }, options = null) {
    const { intensity = defaultIntensity } = (options || {});
=======
exports.applyEffect = void 0;
const getEffect = (effectPool, effect) => {
    for (let [key, value] of Object.entries(effectPool)) {
        if (key === effect) {
            return value.method;
        }
    }
    return null;
};
const applyEffect = (_a) => __awaiter(void 0, [_a], void 0, function* ({ data, width, height, effectPool, effect, options = null }) {
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

/***/ 2055:
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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.rgbToHsv = exports.hsvToRgb = exports.urlToBuffer = exports.fileToBuffer = exports.bufferToBitmap = exports.bufferToBlob = exports.useMode = exports.useEffect = exports.listEffects = exports.listModes = exports.stage = void 0;
const urlToBuffer_1 = __webpack_require__(9954);
Object.defineProperty(exports, "urlToBuffer", ({ enumerable: true, get: function () { return urlToBuffer_1.urlToBuffer; } }));
const global_1 = __webpack_require__(4250);
const bufferToBitmap_1 = __webpack_require__(9520);
Object.defineProperty(exports, "bufferToBitmap", ({ enumerable: true, get: function () { return bufferToBitmap_1.bufferToBitmap; } }));
const fileToBuffer_1 = __webpack_require__(5241);
Object.defineProperty(exports, "fileToBuffer", ({ enumerable: true, get: function () { return fileToBuffer_1.fileToBuffer; } }));
const bufferToBlob_1 = __webpack_require__(2468);
Object.defineProperty(exports, "bufferToBlob", ({ enumerable: true, get: function () { return bufferToBlob_1.bufferToBlob; } }));
const helpers_1 = __webpack_require__(6527);
Object.defineProperty(exports, "hsvToRgb", ({ enumerable: true, get: function () { return helpers_1.hsvToRgb; } }));
Object.defineProperty(exports, "rgbToHsv", ({ enumerable: true, get: function () { return helpers_1.rgbToHsv; } }));
const modes = __importStar(__webpack_require__(4634));
const browser_1 = __webpack_require__(7800);
const stage = (_a) => __awaiter(void 0, [_a], void 0, function* ({ data, url }) {
    let [buffer, width, height] = [null, 0, 0];
    if (data) {
        if (data instanceof File) {
            [buffer, width, height] = (yield (0, fileToBuffer_1.fileToBuffer)(data));
        }
        else if (Array.isArray(data) && data[0] instanceof Uint8Array) {
            [buffer, width, height] = [...data];
        }
        else if (typeof data === 'object') {
            let preStaged = data;
            if (preStaged.data instanceof Uint8Array && preStaged.width && preStaged.height) {
                [buffer, width, height] = [preStaged.data, preStaged.width, preStaged.height];
            }
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
const useEffect = (_a, effect_1, options_1) => __awaiter(void 0, [_a, effect_1, options_1], void 0, function* ({ data, width, height }, effect, options) {
    return (0, global_1.useEffect)({ data, width, height }, browser_1.effectPool, effect, options || {});
});
exports.useEffect = useEffect;
const useMode = (_a, mode_1) => __awaiter(void 0, [_a, mode_1], void 0, function* ({ data, width, height }, mode) {
    return (0, global_1.useMode)({ data, width, height }, browser_1.effectPool, mode);
});
exports.useMode = useMode;


/***/ }),

/***/ 2059:
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
const applyEffect_1 = __webpack_require__(2024);
const useEffect = (_a, effectPool_1, effect_1, options_1) => __awaiter(void 0, [_a, effectPool_1, effect_1, options_1], void 0, function* ({ data, width, height }, effectPool, effect, options) {
    const effectsToUse = (!Array.isArray(effect) ? [effect] : effect);
    if (Array.isArray(options) && options.length !== effectsToUse.length) {
        throw new Error('Invalid options length');
    }
    let i = 0;
    for (let currentEffect of effectsToUse) {
        if (!effectPool[currentEffect]) {
            throw new Error(`Invalid effect: ${currentEffect}`);
        }
        const applied = yield (0, applyEffect_1.applyEffect)({
            data, width, height, effectPool,
            effect: currentEffect,
            options: Array.isArray(options) ? options[i] : options
        });
        [data, width, height] = [applied.data, applied.width, applied.height];
        i++;
    }
    return { data, width, height };
});
exports.useEffect = useEffect;


/***/ }),

/***/ 2118:
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
exports.vaporwave = void 0;
const vaporwave = (_a) => __awaiter(void 0, [_a], void 0, function* ({ data }) {
    if (data.length === 0)
        return data;
    const COLORS = [
        [0, 184, 255], // Cyan
        [255, 0, 193], // Magenta
        [150, 0, 255], // Purple
        [0, 255, 249], // Teal
    ];
    const setPixel = (j, r, g, b, a) => {
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
        }
        else if (r > 15 && r <= 60 && g > 15 && g <= 60 && b > 15 && b <= 60) {
            setPixel(j, COLORS[0][0], COLORS[0][1], COLORS[0][2], a);
        }
        else if (r > 60 && r <= 120 && g > 60 && g <= 120 && b > 60 && b <= 120) {
            setPixel(j, COLORS[1][0], COLORS[1][1], COLORS[1][2], a);
        }
        else if (r > 120 && r <= 180 && g > 120 && g <= 180 && b > 120 && b <= 180) {
            setPixel(j, COLORS[2][0], COLORS[2][1], COLORS[2][2], a);
        }
        else if (r > 180 && r <= 234 && g > 180 && g <= 234 && b > 180 && b <= 234) {
            setPixel(j, COLORS[3][0], COLORS[3][1], COLORS[3][2], a);
        }
        else if (r >= 235 && g >= 235 && b >= 235) {
            setPixel(j, 255, 255, 255, a);
        }
        else {
            setPixel(j, r, g, b, a); // Preserve original pixel if no condition matches
        }
    }
    return data;
});
exports.vaporwave = vaporwave;


/***/ }),

/***/ 2468:
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
const bufferToBlob = (_a) => __awaiter(void 0, [_a], void 0, function* ({ data, width, height }) {
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

/***/ 2654:
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
exports.brightness = void 0;
const defaultBrightness = 10;
const pixelOp = ({ index, data }, options = null) => {
    let { brightness = defaultBrightness } = (options || {});
    brightness *= 2.55;
    for (let j = 0; j < 3; j++) {
        let newColorChannelValue = data[index + j] + brightness;
        data[index + j] = Math.max(0, Math.min(255, newColorChannelValue));
    }
};
const global = (_a, ...args_1) => __awaiter(void 0, [_a, ...args_1], void 0, function* ({ data }, options = null) {
    let { brightness = defaultBrightness } = (options || {});
    brightness *= 2.55;
>>>>>>> feat/additional-effects-and-modes
    for (let i = 0; i < data.length; i += 4) {
        pixelOp({ index: i, data }, { brightness });
    }
    return data;
});
const brightness = {
    name: 'brightness',
    browser: global,
    node: global,
    pixelOp: pixelOp
};
exports.brightness = brightness;


/***/ }),

/***/ 2677:
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
exports.anaglyph = void 0;
const global = (_a, ...args_1) => __awaiter(void 0, [_a, ...args_1], void 0, function* ({ data, width, height }, options = null) {
    var _b, _c, _d;
    const config = (options || {});
    const rShift = (_b = config.redShift) !== null && _b !== void 0 ? _b : { x: 5, y: 0 };
    const gShift = (_c = config.greenShift) !== null && _c !== void 0 ? _c : { x: -5, y: 0 };
    const bShift = (_d = config.blueShift) !== null && _d !== void 0 ? _d : { x: 0, y: 5 };
    const copy = new Uint8Array(data);
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4;
            // Shift RED
            const rx = (x + rShift.x + width) % width;
            const ry = (y + rShift.y + height) % height;
            data[idx] = copy[(ry * width + rx) * 4];
            // Shift GREEN
            const gx = (x + gShift.x + width) % width;
            const gy = (y + gShift.y + height) % height;
            data[idx + 1] = copy[(gy * width + gx) * 4 + 1];
            // Shift BLUE
            const bx = (x + bShift.x + width) % width;
            const by = (y + bShift.y + height) % height;
            data[idx + 2] = copy[(by * width + bx) * 4 + 2];
            // Alpha remains unchanged
        }
    }
    return data;
});
const anaglyph = {
    name: 'anaglyph',
    browser: global,
    node: global
};
exports.anaglyph = anaglyph;


/***/ }),

/***/ 2935:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hsvToRgb = void 0;
const hsvToRgb = (h, s, v) => {
    let r = 0, g = 0, b = 0;
    let i = Math.floor(h * 6);
    let f = h * 6 - i;
    let p = v * (1 - s);
    let q = v * (1 - f * s);
    let t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0:
            r = v, g = t, b = p;
            break;
        case 1:
            r = q, g = v, b = p;
            break;
        case 2:
            r = p, g = v, b = t;
            break;
        case 3:
            r = p, g = q, b = v;
            break;
        case 4:
            r = t, g = p, b = v;
            break;
        case 5:
            r = v, g = p, b = q;
            break;
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
};
exports.hsvToRgb = hsvToRgb;


/***/ }),

/***/ 3097:
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
exports.noise = void 0;
const defaultIntensity = 10;
const pixelOp = ({ index, data }, options = null) => {
    const { intensity = defaultIntensity, ratio = null } = (options || {});
    const intensityRatio = ratio ? ratio : intensity / 100;
    for (let j = 0; j < 3; j++) {
        const noise = Math.random() * 2 - 1;
        const adjustedNoise = noise * intensityRatio;
        const newColorChannelValue = data[index + j] + adjustedNoise * 255;
        data[index + j] = Math.max(0, Math.min(255, newColorChannelValue));
    }
};
const global = (_a, ...args_1) => __awaiter(void 0, [_a, ...args_1], void 0, function* ({ data }, options = null) {
    const { intensity = defaultIntensity, ratio = null } = (options || {});
    const intensityRatio = ratio ? ratio : intensity / 100;
    for (let i = 0; i < data.length; i += 4) {
        pixelOp({ index: i, data }, { ratio: intensityRatio });
    }
    return data;
});
const noise = {
    name: 'noise',
    browser: global,
    node: global,
    pixelOp: pixelOp
};
exports.noise = noise;


/***/ }),

/***/ 3295:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.rgbToHsv = void 0;
const rgbToHsv = (r, g, b) => {
    r /= 255, g /= 255, b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, v = max;
    let d = max - min;
    let s = max === 0 ? 0 : d / max;
    if (max !== min) {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return [h, s || 0, v || 0];
};
exports.rgbToHsv = rgbToHsv;


/***/ }),

/***/ 3629:
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
const helpers_1 = __webpack_require__(6527);
const defaultIntensity = 8;
const browser = (_a, ...args_1) => __awaiter(void 0, [_a, ...args_1], void 0, function* ({ data, width, height }, options = null) {
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

/***/ 4084:
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
const math_1 = __webpack_require__(8421);
const helpers_1 = __webpack_require__(6527);
const weight = [0.25, 0.5];
const chimera = (_a) => __awaiter(void 0, [_a], void 0, function* ({ data, width, height, effects }) {
    const algorithm = (_a) => __awaiter(void 0, [_a], void 0, function* ({ data, width, height }) {
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
    data = (yield effects.blur.method({ data, width, height }, { direction, intensity })) || data;
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
    data = (yield effects.rectangles.method({ data, width, height }, { offset: 10, intensity: 15, sizeModifier: 1.25 })) || data;
    return data;
});
exports.chimera = chimera;


/***/ }),

/***/ 4250:
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
__exportStar(__webpack_require__(2059), exports);
__exportStar(__webpack_require__(4637), exports);
__exportStar(__webpack_require__(4742), exports);
__exportStar(__webpack_require__(2024), exports);


/***/ }),

/***/ 4543:
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
exports.mirrorfold = void 0;
const mirrorfold = (_a, ...args_1) => __awaiter(void 0, [_a, ...args_1], void 0, function* ({ data, width, height }, options = {}) {
    var _b, _c, _d;
    if (data.length === 0)
        return data;
    const folds = (_b = options.folds) !== null && _b !== void 0 ? _b : 4;
    const blendOpacity = (_c = options.blendOpacity) !== null && _c !== void 0 ? _c : 0.5;
    const randomOffset = (_d = options.randomOffset) !== null && _d !== void 0 ? _d : true;
    const tempData = new Uint8Array(data); // Copy for mirroring without overwrite
    // Calculate fold sizes (assume even division for simplicity; adjust for odd dims)
    const foldWidth = Math.floor(width / Math.sqrt(folds));
    const foldHeight = Math.floor(height / Math.sqrt(folds));
    const gridSize = Math.sqrt(folds); // e.g., 2 for 4 folds (2x2 grid)
    for (let gy = 0; gy < gridSize; gy++) {
        for (let gx = 0; gx < gridSize; gx++) {
            const baseX = gx * foldWidth;
            const baseY = gy * foldHeight;
            // Apply random offset if enabled (small glitch shift, e.g., -5 to 5 px)
            const offsetX = randomOffset ? Math.floor(Math.random() * 10 - 5) : 0;
            const offsetY = randomOffset ? Math.floor(Math.random() * 10 - 5) : 0;
            // Mirror the section from the top-left fold (source) to this position
            for (let y = 0; y < foldHeight; y++) {
                for (let x = 0; x < foldWidth; x++) {
                    // Source: mirror/flip based on grid position (e.g., flip X for right folds, Y for bottom)
                    const srcX = (gx % 2 === 1 ? foldWidth - 1 - x : x) + offsetX;
                    const srcY = (gy % 2 === 1 ? foldHeight - 1 - y : y) + offsetY;
                    // Clamp source coords to valid range
                    const clampedSrcX = Math.max(0, Math.min(foldWidth - 1, srcX));
                    const clampedSrcY = Math.max(0, Math.min(foldHeight - 1, srcY));
                    const srcIdx = (clampedSrcY * width + clampedSrcX) * 4;
                    const destIdx = ((baseY + y) * width + (baseX + x)) * 4;
                    // Blend with original if near edges or for opacity
                    const originalR = data[destIdx];
                    const originalG = data[destIdx + 1];
                    const originalB = data[destIdx + 2];
                    const mirroredR = tempData[srcIdx];
                    const mirroredG = tempData[srcIdx + 1];
                    const mirroredB = tempData[srcIdx + 2];
                    // Simple alpha blend
                    data[destIdx] = Math.floor(mirroredR * blendOpacity + originalR * (1 - blendOpacity));
                    data[destIdx + 1] = Math.floor(mirroredG * blendOpacity + originalG * (1 - blendOpacity));
                    data[destIdx + 2] = Math.floor(mirroredB * blendOpacity + originalB * (1 - blendOpacity));
                    // Alpha unchanged
                }
            }
        }
    }
    return data;
});
exports.mirrorfold = mirrorfold;


/***/ }),

<<<<<<< HEAD
/***/ 118:
=======
/***/ 4545:
>>>>>>> feat/additional-effects-and-modes
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
<<<<<<< HEAD
exports.vaporwave = void 0;
const vaporwave = (_a) => __awaiter(void 0, [_a], void 0, function* ({ data }) {
    if (data.length === 0)
        return data;
    const COLORS = [
        [0, 184, 255], // Cyan
        [255, 0, 193], // Magenta
        [150, 0, 255], // Purple
        [0, 255, 249], // Teal
    ];
    const setPixel = (j, r, g, b, a) => {
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
        }
        else if (r > 15 && r <= 60 && g > 15 && g <= 60 && b > 15 && b <= 60) {
            setPixel(j, COLORS[0][0], COLORS[0][1], COLORS[0][2], a);
        }
        else if (r > 60 && r <= 120 && g > 60 && g <= 120 && b > 60 && b <= 120) {
            setPixel(j, COLORS[1][0], COLORS[1][1], COLORS[1][2], a);
        }
        else if (r > 120 && r <= 180 && g > 120 && g <= 180 && b > 120 && b <= 180) {
            setPixel(j, COLORS[2][0], COLORS[2][1], COLORS[2][2], a);
        }
        else if (r > 180 && r <= 234 && g > 180 && g <= 234 && b > 180 && b <= 234) {
            setPixel(j, COLORS[3][0], COLORS[3][1], COLORS[3][2], a);
        }
        else if (r >= 235 && g >= 235 && b >= 235) {
            setPixel(j, 255, 255, 255, a);
        }
        else {
            setPixel(j, r, g, b, a); // Preserve original pixel if no condition matches
        }
=======
exports.dither = void 0;
const defaultIntensity = 0.5;
const global = (_a, ...args_1) => __awaiter(void 0, [_a, ...args_1], void 0, function* ({ data, width, height }, options = null) {
    const { intensity = defaultIntensity } = (options || {});
    for (let i = 0; i < data.length; i += 4) {
        const grayscale = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = data[i + 1] = data[i + 2] = grayscale;
    }
    for (let i = 0; i < data.length; i += 4) {
        const nPixel = data[i] > (intensity * 255) ? 255 : 0;
        const quantError = data[i] - nPixel;
        data[i] = nPixel;
        if (i + 4 < data.length)
            data[i + 4] = data[i + 4] + quantError * 7 / 16;
        if (i + (width * 4) < data.length)
            data[i + (width * 4)] = data[i + (width * 4)] + quantError * 5 / 16;
        if (i + (width * 4) + 4 < data.length)
            data[i + (width * 4) + 4] = data[i + (width * 4) + 4] + quantError * 1 / 16;
        if (i + (width * 4) - 4 >= 0)
            data[i + (width * 4) - 4] = data[i + (width * 4) - 4] + quantError * 3 / 16;
        data[i + 1] = data[i + 2] = data[i];
>>>>>>> feat/additional-effects-and-modes
    }
    return new Uint8Array(data);
});
<<<<<<< HEAD
exports.vaporwave = vaporwave;
=======
const dither = {
    name: 'dither',
    browser: global,
    node: global
};
exports.dither = dither;
>>>>>>> feat/additional-effects-and-modes


/***/ }),

<<<<<<< HEAD
/***/ 136:
=======
/***/ 4588:
>>>>>>> feat/additional-effects-and-modes
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
<<<<<<< HEAD
exports.borders = void 0;
const defaultBorderSize = 10;
const defaultBorderColor = [0, 0, 0];
const defaultBorderOpacity = 1;
const global = (_a, ...args_1) => __awaiter(void 0, [_a, ...args_1], void 0, function* ({ data, width, height }, options = null) {
    const { size = defaultBorderSize, color = defaultBorderColor, opacity = defaultBorderOpacity } = (options || {});
    for (let i = 0; i < data.length; i += 4) {
        let x = (i / 4) % width, y = Math.floor((i / 4) / width);
        if (x < size || x >= width - size || y < size || y >= height - size) {
            data[i] = data[i] * (1 - opacity) + color[0] * opacity;
            data[i + 1] = data[i + 1] * (1 - opacity) + color[1] * opacity;
            data[i + 2] = data[i + 2] * (1 - opacity) + color[2] * opacity;
=======
exports.interferenceLines = void 0;
const global = (_a, ...args_1) => __awaiter(void 0, [_a, ...args_1], void 0, function* ({ data, width, height }, options = null) {
    var _b, _c, _d, _e;
    const config = (options || {});
    const lineThickness = (_b = config.lineThickness) !== null && _b !== void 0 ? _b : 2;
    const interferenceIntensity = (_c = config.interferenceIntensity) !== null && _c !== void 0 ? _c : 0.3;
    const noiseIntensity = (_d = config.noiseIntensity) !== null && _d !== void 0 ? _d : 0.1;
    const colorBleed = (_e = config.colorBleed) !== null && _e !== void 0 ? _e : 0.2;
    const tempData = new Uint8Array(data); // Copy for shifts and bleeding
    // Apply scanlines by darkening every other set of rows
    for (let y = 0; y < height; y++) {
        const isScanline = (y % (lineThickness * 2)) < lineThickness; // Alternate bands
        const darkenFactor = isScanline ? 0.85 : 1.0; // Slight darken for VHS lines
        for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4;
            // Darken for scanlines
            data[idx] = Math.floor(tempData[idx] * darkenFactor);
            data[idx + 1] = Math.floor(tempData[idx + 1] * darkenFactor);
            data[idx + 2] = Math.floor(tempData[idx + 2] * darkenFactor);
            // Add noise (random perturbation)
            if (Math.random() < noiseIntensity) {
                const noise = Math.floor(Math.random() * 50 - 25); // -25 to 25 shift
                data[idx] = Math.max(0, Math.min(255, data[idx] + noise));
                data[idx + 1] = Math.max(0, Math.min(255, data[idx + 1] + noise));
                data[idx + 2] = Math.max(0, Math.min(255, data[idx + 2] + noise));
            }
        }
        // Random row shifts for glitchy tracking (interference)
        if (Math.random() < interferenceIntensity) {
            const shift = Math.floor(Math.random() * 10 - 5); // -5 to 5 pixel horizontal shift
            for (let x = 0; x < width; x++) {
                const srcX = Math.max(0, Math.min(width - 1, x + shift));
                const idx = (y * width + x) * 4;
                const srcIdx = (y * width + srcX) * 4;
                data[idx] = tempData[srcIdx];
                data[idx + 1] = tempData[srcIdx + 1];
                data[idx + 2] = tempData[srcIdx + 2];
            }
        }
    }
    // Add color bleed (slight RGB channel shifts for VHS chromatic aberration)
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4;
            // Shift red slightly left, blue right (simple bleed)
            const redShift = Math.floor(colorBleed * 5); // e.g., 1 pixel if colorBleed=0.2
            const blueShift = -redShift;
            const rSrcX = Math.max(0, Math.min(width - 1, x + redShift));
            const bSrcX = Math.max(0, Math.min(width - 1, x + blueShift));
            data[idx] = tempData[(y * width + rSrcX) * 4]; // Red  from shifted
            data[idx + 2] = tempData[(y * width + bSrcX) * 4 + 2]; // Blue from shifted
>>>>>>> feat/additional-effects-and-modes
        }
    }
    return data;
});
<<<<<<< HEAD
const borders = {
    name: 'borders',
    browser: global,
    node: global
};
exports.borders = borders;
=======
const interferenceLines = {
    name: 'interferenceLines',
    browser: global,
    node: global
};
exports.interferenceLines = interferenceLines;


/***/ }),

/***/ 4634:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mirrorfold = exports.quadtree = exports.pixelsort = exports.vaporwave = exports.nostalgia = exports.acid = exports.lacunae = exports.chimera = void 0;
var chimera_1 = __webpack_require__(4084);
Object.defineProperty(exports, "chimera", ({ enumerable: true, get: function () { return chimera_1.chimera; } }));
var lacunae_1 = __webpack_require__(5092);
Object.defineProperty(exports, "lacunae", ({ enumerable: true, get: function () { return lacunae_1.lacunae; } }));
var acid_1 = __webpack_require__(8090);
Object.defineProperty(exports, "acid", ({ enumerable: true, get: function () { return acid_1.acid; } }));
var nostalgia_1 = __webpack_require__(1181);
Object.defineProperty(exports, "nostalgia", ({ enumerable: true, get: function () { return nostalgia_1.nostalgia; } }));
var vaporwave_1 = __webpack_require__(2118);
Object.defineProperty(exports, "vaporwave", ({ enumerable: true, get: function () { return vaporwave_1.vaporwave; } }));
var pixelsort_1 = __webpack_require__(9941);
Object.defineProperty(exports, "pixelsort", ({ enumerable: true, get: function () { return pixelsort_1.pixelsort; } }));
var quadtree_1 = __webpack_require__(8076);
Object.defineProperty(exports, "quadtree", ({ enumerable: true, get: function () { return quadtree_1.quadtree; } }));
var mirrorfold_1 = __webpack_require__(4543);
Object.defineProperty(exports, "mirrorfold", ({ enumerable: true, get: function () { return mirrorfold_1.mirrorfold; } }));
>>>>>>> feat/additional-effects-and-modes


/***/ }),

<<<<<<< HEAD
/***/ 143:
/***/ (function(__unused_webpack_module, exports) {
=======
/***/ 4637:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {
>>>>>>> feat/additional-effects-and-modes


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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
<<<<<<< HEAD
exports.degrade = void 0;
const defaultQuality = 0.075;
const browser = (_a, ...args_1) => __awaiter(void 0, [_a, ...args_1], void 0, function* ({ data, width, height }, options = null) {
    const { quality = defaultQuality } = (options || {});
    const globalScope = typeof window !== 'undefined' ? window : self;
    const canvas = new OffscreenCanvas(width, height);
    const context = canvas.getContext('2d');
    if (!context) {
        throw new Error('Failed to obtain context');
=======
exports.useMode = void 0;
const applyMode_1 = __webpack_require__(4742);
const modes = __importStar(__webpack_require__(4634));
const useMode = (_a, effectPool_1, mode_1) => __awaiter(void 0, [_a, effectPool_1, mode_1], void 0, function* ({ data, width, height }, effectPool, mode) {
    const modesToUse = (!Array.isArray(mode) ? [mode] : mode);
    for (let currentMode of modesToUse) {
        if (!modes.hasOwnProperty(currentMode)) {
            throw new Error(`Invalid mode: ${currentMode}`);
        }
        const applied = yield (0, applyMode_1.applyMode)({
            data, width, height, effectPool, mode: currentMode
        });
        [data, width, height] = [applied.data, applied.width, applied.height];
    }
    return { data, width, height };
});
exports.useMode = useMode;


/***/ }),

/***/ 4742:
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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const modes = __importStar(__webpack_require__(4634));
const getMode = (mode) => {
    for (let [key, value] of Object.entries(modes)) {
        if (key === mode) {
            return value;
        }
    }
    return null;
};
const applyMode = (_a) => __awaiter(void 0, [_a], void 0, function* ({ data, width, height, mode, effectPool }) {
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

/***/ 5092:
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
const helpers_1 = __webpack_require__(6527);
const math_1 = __webpack_require__(8421);
const lacunae = (_a) => __awaiter(void 0, [_a], void 0, function* ({ data }) {
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
>>>>>>> feat/additional-effects-and-modes
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
<<<<<<< HEAD
const degrade = {
    name: 'degrade',
    browser: browser
};
exports.degrade = degrade;


/***/ }),

/***/ 152:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrayPick = void 0;
const arrayPick = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};
exports.arrayPick = arrayPick;


/***/ }),

/***/ 172:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.heatmap = exports.borders = exports.chromaticAberration = exports.solarize = exports.scanlines = exports.hueShift = exports.sharpen = exports.brightness = exports.noise = exports.grayscale = exports.rainbow = exports.rectangles = exports.dither = void 0;
var blur_1 = __webpack_require__(668);
Object.defineProperty(exports, "blur", ({ enumerable: true, get: function () { return blur_1.blur; } }));
var dither_1 = __webpack_require__(545);
Object.defineProperty(exports, "dither", ({ enumerable: true, get: function () { return dither_1.dither; } }));
var rectangles_1 = __webpack_require__(267);
Object.defineProperty(exports, "rectangles", ({ enumerable: true, get: function () { return rectangles_1.rectangles; } }));
var rainbow_1 = __webpack_require__(233);
Object.defineProperty(exports, "rainbow", ({ enumerable: true, get: function () { return rainbow_1.rainbow; } }));
var grayscale_1 = __webpack_require__(104);
Object.defineProperty(exports, "grayscale", ({ enumerable: true, get: function () { return grayscale_1.grayscale; } }));
var noise_1 = __webpack_require__(97);
Object.defineProperty(exports, "noise", ({ enumerable: true, get: function () { return noise_1.noise; } }));
var brightness_1 = __webpack_require__(654);
Object.defineProperty(exports, "brightness", ({ enumerable: true, get: function () { return brightness_1.brightness; } }));
var sharpen_1 = __webpack_require__(356);
Object.defineProperty(exports, "sharpen", ({ enumerable: true, get: function () { return sharpen_1.sharpen; } }));
var hueShift_1 = __webpack_require__(291);
Object.defineProperty(exports, "hueShift", ({ enumerable: true, get: function () { return hueShift_1.hueShift; } }));
var scanlines_1 = __webpack_require__(651);
Object.defineProperty(exports, "scanlines", ({ enumerable: true, get: function () { return scanlines_1.scanlines; } }));
var solarize_1 = __webpack_require__(460);
Object.defineProperty(exports, "solarize", ({ enumerable: true, get: function () { return solarize_1.solarize; } }));
var chromaticAberration_1 = __webpack_require__(926);
Object.defineProperty(exports, "chromaticAberration", ({ enumerable: true, get: function () { return chromaticAberration_1.chromaticAberration; } }));
var borders_1 = __webpack_require__(136);
Object.defineProperty(exports, "borders", ({ enumerable: true, get: function () { return borders_1.borders; } }));
var heatmap_1 = __webpack_require__(447);
Object.defineProperty(exports, "heatmap", ({ enumerable: true, get: function () { return heatmap_1.heatmap; } }));


/***/ }),

/***/ 181:
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
exports.nostalgia = void 0;
const nostalgia = (_a) => __awaiter(void 0, [_a], void 0, function* ({ data, width, height, effects }) {
    data = yield effects.degrade.method({ data, width, height }, { quality: 0.85 });
    for (const direction of ['horizontal', 'vertical']) {
        data = (yield effects.blur.method({ data, width, height }, { direction, intensity: 2 })) || data;
    }
    data = yield effects.chromaticAberration.method({ data, width, height }, { intensity: 2 });
    data = yield effects.grayscale.method({ data, width, height }, { intensity: 0.275 });
    data = yield effects.noise.method({ data, width, height }, { intensity: 8 });
    data = yield effects.brightness.method({ data, width, height }, { brightness: 2 });
    return data;
});
exports.nostalgia = nostalgia;
=======
exports.lacunae = lacunae;
>>>>>>> feat/additional-effects-and-modes


/***/ }),

<<<<<<< HEAD
/***/ 233:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {
=======
/***/ 5241:
/***/ (function(__unused_webpack_module, exports) {
>>>>>>> feat/additional-effects-and-modes


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
<<<<<<< HEAD
exports.rainbow = void 0;
const math_1 = __webpack_require__(421);
const global = (_a) => __awaiter(void 0, [_a], void 0, function* ({ data, width, height }) {
    const rPhase = (0, math_1.random)() * 2 * math_1.PI;
    const gPhase = (0, math_1.random)() * 2 * math_1.PI;
    const bPhase = (0, math_1.random)() * 2 * math_1.PI;
    for (let i = 0; i < data.length; i += 4) {
        const x = (i / 4) % width;
        const y = (0, math_1.floor)((i / 4) / width);
        const grayscale = data[i];
        const rWave = grayscale * (0.75 + 0.25 * (0, math_1.sin)(2 * math_1.PI * (x / width) + rPhase));
        const gWave = grayscale * (0.75 + 0.25 * (0, math_1.sin)(2 * math_1.PI * (y / height) + gPhase));
        const bWwave = grayscale * (0.75 + 0.25 * (0, math_1.sin)(2 * math_1.PI * ((x / width + y / height) + bPhase)));
        data[i] = (0, math_1.pow)(rWave / 255, 0.75) * 255;
        data[i + 1] = (0, math_1.pow)(gWave / 255, 0.75) * 255;
        data[i + 2] = (0, math_1.pow)(bWwave / 255, 0.75) * 255;
    }
    return data;
=======
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
>>>>>>> feat/additional-effects-and-modes
});
exports.fileToBuffer = fileToBuffer;


/***/ }),

<<<<<<< HEAD
/***/ 241:
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

/***/ 250:
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
__exportStar(__webpack_require__(59), exports);
__exportStar(__webpack_require__(637), exports);
__exportStar(__webpack_require__(742), exports);
__exportStar(__webpack_require__(24), exports);


/***/ }),

/***/ 267:
=======
/***/ 5267:
>>>>>>> feat/additional-effects-and-modes
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
<<<<<<< HEAD
const math_1 = __webpack_require__(421);
=======
const math_1 = __webpack_require__(8421);
>>>>>>> feat/additional-effects-and-modes
const defaultOffset = 5;
const defaultIntensity = 10;
const defaultSizeModifier = 1;
const defaultInvertChance = 0.15;
const minDimensionFraction = 0.25;
const minRectangularity = 1.5;
const global = (_a, ...args_1) => __awaiter(void 0, [_a, ...args_1], void 0, function* ({ data, width, height }, options = null) {
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

<<<<<<< HEAD
/***/ 291:
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
exports.hueShift = void 0;
const helpers_1 = __webpack_require__(527);
const defaultShift = 180;
const global = (_a, ...args_1) => __awaiter(void 0, [_a, ...args_1], void 0, function* ({ data }, options = null) {
    const { shift = defaultShift } = (options || {});
    for (let i = 0; i < data.length; i += 4) {
        let hsv = (0, helpers_1.rgbToHsv)(data[i], data[i + 1], data[i + 2]);
        hsv[0] = (hsv[0] + shift / 360.0) % 1;
        let rgb = (0, helpers_1.hsvToRgb)(hsv[0], hsv[1], hsv[2]);
        data[i] = rgb[0];
        data[i + 1] = rgb[1];
        data[i + 2] = rgb[2];
        data[i + 3] = data[i + 3];
    }
    return data;
});
const hueShift = {
    name: 'hueShift',
    browser: global,
    node: global
};
exports.hueShift = hueShift;


/***/ }),

/***/ 295:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.rgbToHsv = void 0;
const rgbToHsv = (r, g, b) => {
    r /= 255, g /= 255, b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, v = max;
    let d = max - min;
    let s = max === 0 ? 0 : d / max;
    if (max !== min) {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return [h, s || 0, v || 0];
};
exports.rgbToHsv = rgbToHsv;


/***/ }),

/***/ 316:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hsvToRgb = void 0;
const hsvToRgb = (h, s, v) => {
    let r = 0, g = 0, b = 0;
    let i = Math.floor(h * 6);
    let f = h * 6 - i;
    let p = v * (1 - s);
    let q = v * (1 - f * s);
    let t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0:
            r = v, g = t, b = p;
            break;
        case 1:
            r = q, g = v, b = p;
            break;
        case 2:
            r = p, g = v, b = t;
            break;
        case 3:
            r = p, g = q, b = v;
            break;
        case 4:
            r = t, g = p, b = v;
            break;
        case 5:
            r = v, g = p, b = q;
            break;
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
};
exports.hsvToRgb = hsvToRgb;


/***/ }),

/***/ 356:
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
exports.sharpen = void 0;
const global = (_a) => __awaiter(void 0, [_a], void 0, function* ({ data, width, height }) {
    const kernel = [
        0, -1, 0,
        -1, 5, -1,
        0, -1, 0
    ];
    const target = new Uint8Array(data.length);
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4;
            let r = 0, g = 0, b = 0;
            for (let ky = -1; ky <= 1; ky++) {
                for (let kx = -1; kx <= 1; kx++) {
                    const xSample = Math.max(0, Math.min(width - 1, x + kx));
                    const ySample = Math.max(0, Math.min(height - 1, y + ky));
                    const sampleIdx = (ySample * width + xSample) * 4;
                    const kernelIdx = (ky + 1) * 3 + (kx + 1);
                    r += data[sampleIdx + 0] * kernel[kernelIdx];
                    g += data[sampleIdx + 1] * kernel[kernelIdx];
                    b += data[sampleIdx + 2] * kernel[kernelIdx];
                }
            }
            target[idx + 0] = Math.min(255, Math.max(0, r));
            target[idx + 1] = Math.min(255, Math.max(0, g));
            target[idx + 2] = Math.min(255, Math.max(0, b));
            target[idx + 3] = data[idx + 3];
        }
    }
    data.set(target);
    return data;
});
const sharpen = {
    name: 'sharpen',
    browser: global,
    node: global
};
exports.sharpen = sharpen;


/***/ }),

/***/ 421:
/***/ ((__unused_webpack_module, exports) => {
=======
/***/ 5460:
/***/ (function(__unused_webpack_module, exports) {
>>>>>>> feat/additional-effects-and-modes


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PI = exports.pow = exports.random = exports.floor = exports.sin = exports.max = exports.min = void 0;
// Math references
const min = Math.min;
exports.min = min;
const max = Math.max;
exports.max = max;
const sin = Math.sin;
exports.sin = sin;
const floor = Math.floor;
exports.floor = floor;
const random = Math.random;
exports.random = random;
const pow = Math.pow;
exports.pow = pow;
const PI = Math.PI;
exports.PI = PI;


/***/ }),

/***/ 428:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isBrowser = void 0;
const isBrowser = () => {
    return typeof self !== 'undefined' || typeof window !== 'undefined';
};
exports.isBrowser = isBrowser;


/***/ }),

/***/ 433:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.degrade = exports.pixelate = void 0;
var browser_1 = __webpack_require__(629);
Object.defineProperty(exports, "pixelate", ({ enumerable: true, get: function () { return browser_1.pixelate; } }));
var browser_2 = __webpack_require__(143);
Object.defineProperty(exports, "degrade", ({ enumerable: true, get: function () { return browser_2.degrade; } }));


/***/ }),

/***/ 447:
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
exports.heatmap = void 0;
;
const defaultIntensity = 0.8;
const defaultControlPoints = [
    { stop: 0.0, color: { r: 0, g: 0, b: 255 } },
    { stop: 0.1, color: { r: 0, g: 255, b: 0 } },
    { stop: 0.3, color: { r: 255, g: 255, b: 0 } },
    { stop: 0.5, color: { r: 255, g: 165, b: 0 } },
    { stop: 0.7, color: { r: 255, g: 0, b: 0 } },
    { stop: 1.0, color: { r: 128, g: 0, b: 128 } }
];
const interpolateColor = (colors, t) => {
    if (t <= 0)
        return colors[0].color;
    if (t >= 1)
        return colors[colors.length - 1].color;
    let i = 1;
    for (; i < colors.length - 1; i++) {
        if (t < colors[i].stop)
            break;
    }
    const t0 = colors[i - 1].stop, t1 = colors[i].stop;
    const ratio = (t - t0) / (t1 - t0);
    return {
        r: Math.round(colors[i - 1].color.r * (1 - ratio) + colors[i].color.r * ratio),
        g: Math.round(colors[i - 1].color.g * (1 - ratio) + colors[i].color.g * ratio),
        b: Math.round(colors[i - 1].color.b * (1 - ratio) + colors[i].color.b * ratio),
        a: 255
    };
};
const global = (_a, ...args_1) => __awaiter(void 0, [_a, ...args_1], void 0, function* ({ data, width, height }, options = null) {
    const { intensity = defaultIntensity, controlPoints = defaultControlPoints } = (options || {});
    const dataLength = width * height * 4;
    for (let i = 0; i < dataLength; i += 4) {
        const pixelIntensity = (data[i] + data[i + 1] + data[i + 2]) / (3 * 255);
        const color = interpolateColor(controlPoints, pixelIntensity * intensity);
        data[i] = color.r;
        data[i + 1] = color.g;
        data[i + 2] = color.b;
        data[i + 3] = color.a || data[i + 3];
    }
    return data;
});
const heatmap = {
    name: 'heatmap',
    browser: global,
    node: global
};
exports.heatmap = heatmap;


/***/ }),

/***/ 460:
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
exports.solarize = void 0;
const defaultIntensity = 0.5;
const solarization = (value, intensity) => {
    const threshold = Math.floor(intensity * 255);
    return value < threshold ? value : 255 - value;
};
const pixelOp = ({ index, data }, options = null) => {
    const { intensity = defaultIntensity } = (options || {});
    const r = data[index], g = data[index + 1], b = data[index + 2];
    data[index] = solarization(r, intensity);
    data[index + 1] = solarization(g, intensity);
    data[index + 2] = solarization(b, intensity);
    data[index + 3] = data[index + 3];
};
const global = (_a, ...args_1) => __awaiter(void 0, [_a, ...args_1], void 0, function* ({ data }, options = null) {
    const { intensity = defaultIntensity } = (options || {});
    for (let i = 0; i < data.length; i += 4) {
        pixelOp({ index: i, data }, { intensity });
    }
    return data;
});
const solarize = {
    name: 'solarize',
    browser: global,
    node: global,
    pixelOp: pixelOp
};
exports.solarize = solarize;


/***/ }),

<<<<<<< HEAD
/***/ 468:
=======
/***/ 5651:
>>>>>>> feat/additional-effects-and-modes
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
<<<<<<< HEAD
exports.bufferToBlob = void 0;
const bufferToBlob = (_a) => __awaiter(void 0, [_a], void 0, function* ({ data, width, height }) {
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

/***/ 520:
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
exports.bufferToBitmap = void 0;
const bufferToBitmap = (_a) => __awaiter(void 0, [_a], void 0, function* ({ data, width, height }) {
    const imgData = new ImageData(new Uint8ClampedArray(data), width, height);
    const canvas = new OffscreenCanvas(width, height);
    const context = canvas.getContext('2d');
    if (!context) {
        throw new Error('Unable to get canvas context');
    }
    context.putImageData(imgData, 0, 0);
    return createImageBitmap(canvas);
});
exports.bufferToBitmap = bufferToBitmap;
=======
exports.scanlines = void 0;
const defaultOpacity = 0.5;
const defaultThickness = 1;
const defaultLines = 10;
const global = (_a, ...args_1) => __awaiter(void 0, [_a, ...args_1], void 0, function* ({ data, width, height }, options = null) {
    const { opacity = defaultOpacity, thickness = defaultThickness, lines = defaultLines, } = (options || {});
    const scanlinePixelAmount = Math.floor(height / lines);
    for (let i = 0; i < data.length; i += 4) {
        let currentLine = Math.floor((i / 4) / width);
        if (currentLine % scanlinePixelAmount < thickness) {
            data[i] = data[i] * (1 - opacity);
            data[i + 1] = data[i + 1] * (1 - opacity);
            data[i + 2] = data[i + 2] * (1 - opacity);
        }
    }
    return data;
});
const scanlines = {
    name: 'scanlines',
    browser: global,
    node: global
};
exports.scanlines = scanlines;
>>>>>>> feat/additional-effects-and-modes


/***/ }),

<<<<<<< HEAD
/***/ 527:
=======
/***/ 6152:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrayPick = void 0;
const arrayPick = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};
exports.arrayPick = arrayPick;


/***/ }),

/***/ 6527:
>>>>>>> feat/additional-effects-and-modes
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
<<<<<<< HEAD
__exportStar(__webpack_require__(83), exports);
__exportStar(__webpack_require__(152), exports);
__exportStar(__webpack_require__(428), exports);
__exportStar(__webpack_require__(935), exports);
__exportStar(__webpack_require__(316), exports);
__exportStar(__webpack_require__(295), exports);
__exportStar(__webpack_require__(884), exports);
=======
__exportStar(__webpack_require__(1083), exports);
__exportStar(__webpack_require__(6152), exports);
__exportStar(__webpack_require__(428), exports);
__exportStar(__webpack_require__(1935), exports);
__exportStar(__webpack_require__(2935), exports);
__exportStar(__webpack_require__(3295), exports);
__exportStar(__webpack_require__(9884), exports);
>>>>>>> feat/additional-effects-and-modes


/***/ }),

<<<<<<< HEAD
/***/ 545:
=======
/***/ 7087:
>>>>>>> feat/additional-effects-and-modes
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
<<<<<<< HEAD
exports.dither = void 0;
const defaultIntensity = 0.5;
const global = (_a, ...args_1) => __awaiter(void 0, [_a, ...args_1], void 0, function* ({ data, width, height }, options = null) {
    const { intensity = defaultIntensity } = (options || {});
    for (let i = 0; i < data.length; i += 4) {
        const grayscale = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = data[i + 1] = data[i + 2] = grayscale;
    }
    for (let i = 0; i < data.length; i += 4) {
        const nPixel = data[i] > (intensity * 255) ? 255 : 0;
        const quantError = data[i] - nPixel;
        data[i] = nPixel;
        if (i + 4 < data.length)
            data[i + 4] = data[i + 4] + quantError * 7 / 16;
        if (i + (width * 4) < data.length)
            data[i + (width * 4)] = data[i + (width * 4)] + quantError * 5 / 16;
        if (i + (width * 4) + 4 < data.length)
            data[i + (width * 4) + 4] = data[i + (width * 4) + 4] + quantError * 1 / 16;
        if (i + (width * 4) - 4 >= 0)
            data[i + (width * 4) - 4] = data[i + (width * 4) - 4] + quantError * 3 / 16;
        data[i + 1] = data[i + 2] = data[i];
    }
    return new Uint8Array(data);
});
const dither = {
    name: 'dither',
    browser: global,
    node: global
};
exports.dither = dither;
=======
exports.waveDistort = void 0;
const defaultAmplitude = 10;
const defaultFrequency = 0.05;
const defaultAxis = 'x';
const global = (_a, ...args_1) => __awaiter(void 0, [_a, ...args_1], void 0, function* ({ data, width, height }, options = null) {
    const { amplitude = defaultAmplitude, frequency = defaultFrequency, axis = defaultAxis } = (options || {});
    const tempData = new Uint8Array(data); // Copy to avoid overwriting during shifts
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4;
            const waveInput = (axis === 'x' ? y : x) * frequency * Math.PI * 2;
            const offset = Math.sin(waveInput) * amplitude;
            const srcX = Math.max(0, Math.min(width - 1, Math.floor(x + (axis === 'x' ? offset : 0))));
            const srcY = Math.max(0, Math.min(height - 1, Math.floor(y + (axis === 'y' ? offset : 0))));
            const srcIdx = (srcY * width + srcX) * 4;
            data[idx] = tempData[srcIdx];
            data[idx + 1] = tempData[srcIdx + 1];
            data[idx + 2] = tempData[srcIdx + 2];
            data[idx + 3] = tempData[srcIdx + 3];
        }
    }
    return data;
});
const waveDistort = {
    name: 'waveDistort',
    browser: global,
    node: global
};
exports.waveDistort = waveDistort;
>>>>>>> feat/additional-effects-and-modes


/***/ }),

<<<<<<< HEAD
/***/ 629:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {
=======
/***/ 7143:
/***/ (function(__unused_webpack_module, exports) {
>>>>>>> feat/additional-effects-and-modes


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
<<<<<<< HEAD
exports.pixelate = void 0;
const helpers_1 = __webpack_require__(527);
const defaultIntensity = 8;
const browser = (_a, ...args_1) => __awaiter(void 0, [_a, ...args_1], void 0, function* ({ data, width, height }, options = null) {
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

/***/ 634:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pixelsort = exports.vaporwave = exports.nostalgia = exports.acid = exports.lacunae = exports.chimera = void 0;
var chimera_1 = __webpack_require__(84);
Object.defineProperty(exports, "chimera", ({ enumerable: true, get: function () { return chimera_1.chimera; } }));
var lacunae_1 = __webpack_require__(92);
Object.defineProperty(exports, "lacunae", ({ enumerable: true, get: function () { return lacunae_1.lacunae; } }));
var acid_1 = __webpack_require__(90);
Object.defineProperty(exports, "acid", ({ enumerable: true, get: function () { return acid_1.acid; } }));
var nostalgia_1 = __webpack_require__(181);
Object.defineProperty(exports, "nostalgia", ({ enumerable: true, get: function () { return nostalgia_1.nostalgia; } }));
var vaporwave_1 = __webpack_require__(118);
Object.defineProperty(exports, "vaporwave", ({ enumerable: true, get: function () { return vaporwave_1.vaporwave; } }));
var pixelsort_1 = __webpack_require__(941);
Object.defineProperty(exports, "pixelsort", ({ enumerable: true, get: function () { return pixelsort_1.pixelsort; } }));
=======
exports.degrade = void 0;
const defaultQuality = 0.075;
const browser = (_a, ...args_1) => __awaiter(void 0, [_a, ...args_1], void 0, function* ({ data, width, height }, options = null) {
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

/***/ 7447:
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
exports.heatmap = void 0;
;
const defaultIntensity = 0.8;
const defaultControlPoints = [
    { stop: 0.0, color: { r: 0, g: 0, b: 255 } },
    { stop: 0.1, color: { r: 0, g: 255, b: 0 } },
    { stop: 0.3, color: { r: 255, g: 255, b: 0 } },
    { stop: 0.5, color: { r: 255, g: 165, b: 0 } },
    { stop: 0.7, color: { r: 255, g: 0, b: 0 } },
    { stop: 1.0, color: { r: 128, g: 0, b: 128 } }
];
const interpolateColor = (colors, t) => {
    if (t <= 0)
        return colors[0].color;
    if (t >= 1)
        return colors[colors.length - 1].color;
    let i = 1;
    for (; i < colors.length - 1; i++) {
        if (t < colors[i].stop)
            break;
    }
    const t0 = colors[i - 1].stop, t1 = colors[i].stop;
    const ratio = (t - t0) / (t1 - t0);
    return {
        r: Math.round(colors[i - 1].color.r * (1 - ratio) + colors[i].color.r * ratio),
        g: Math.round(colors[i - 1].color.g * (1 - ratio) + colors[i].color.g * ratio),
        b: Math.round(colors[i - 1].color.b * (1 - ratio) + colors[i].color.b * ratio),
        a: 255
    };
};
const global = (_a, ...args_1) => __awaiter(void 0, [_a, ...args_1], void 0, function* ({ data, width, height }, options = null) {
    const { intensity = defaultIntensity, controlPoints = defaultControlPoints } = (options || {});
    const dataLength = width * height * 4;
    for (let i = 0; i < dataLength; i += 4) {
        const pixelIntensity = (data[i] + data[i + 1] + data[i + 2]) / (3 * 255);
        const color = interpolateColor(controlPoints, pixelIntensity * intensity);
        data[i] = color.r;
        data[i + 1] = color.g;
        data[i + 2] = color.b;
        data[i + 3] = color.a || data[i + 3];
    }
    return data;
});
const heatmap = {
    name: 'heatmap',
    browser: global,
    node: global
};
exports.heatmap = heatmap;
>>>>>>> feat/additional-effects-and-modes


/***/ }),

<<<<<<< HEAD
/***/ 637:
=======
/***/ 7800:
>>>>>>> feat/additional-effects-and-modes
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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
<<<<<<< HEAD
=======
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.effectPool = void 0;
const effectsCommon = __importStar(__webpack_require__(8172));
const effectsBrowser = __importStar(__webpack_require__(1433));
const effectsUsed = Object.values(Object.assign(Object.assign({}, effectsCommon), effectsBrowser));
exports.effectPool = effectsUsed.reduce((obj, effect) => {
    if (effect.hasOwnProperty('browser')) {
        obj[effect.name] = {
            method: effect.browser
        };
        if (effect.hasOwnProperty('pixelOp')) {
            obj[effect.name].pixelOp = effect.pixelOp;
        }
    }
    return obj;
}, {});


/***/ }),

/***/ 8076:
/***/ (function(__unused_webpack_module, exports) {


>>>>>>> feat/additional-effects-and-modes
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
<<<<<<< HEAD
exports.useMode = void 0;
const applyMode_1 = __webpack_require__(742);
const modes = __importStar(__webpack_require__(634));
const useMode = (_a, effectPool_1, mode_1) => __awaiter(void 0, [_a, effectPool_1, mode_1], void 0, function* ({ data, width, height }, effectPool, mode) {
    const modesToUse = (!Array.isArray(mode) ? [mode] : mode);
    for (let currentMode of modesToUse) {
        if (!modes.hasOwnProperty(currentMode)) {
            throw new Error(`Invalid mode: ${currentMode}`);
        }
        const applied = yield (0, applyMode_1.applyMode)({
            data, width, height, effectPool, mode: currentMode
        });
        [data, width, height] = [applied.data, applied.width, applied.height];
    }
    return { data, width, height };
=======
exports.quadtree = void 0;
const quadtree = (_a, ...args_1) => __awaiter(void 0, [_a, ...args_1], void 0, function* ({ data, width, height }, options = {}) {
    var _b, _c;
    if (data.length === 0)
        return data;
    const maxDepth = (_b = options.maxDepth) !== null && _b !== void 0 ? _b : 8;
    const varianceThreshold = (_c = options.varianceThreshold) !== null && _c !== void 0 ? _c : 50;
    // Helper to compute average color and variance for a square region
    const computeStats = (x, y, size) => {
        let sumR = 0, sumG = 0, sumB = 0;
        let sumSqR = 0, sumSqG = 0, sumSqB = 0;
        const pixelCount = size * size;
        for (let dy = 0; dy < size; dy++) {
            for (let dx = 0; dx < size; dx++) {
                const px = x + dx;
                const py = y + dy;
                if (px >= width || py >= height)
                    continue; // Clamp to bounds
                const idx = (py * width + px) * 4;
                const r = data[idx];
                const g = data[idx + 1];
                const b = data[idx + 2];
                sumR += r;
                sumG += g;
                sumB += b;
                sumSqR += r * r;
                sumSqG += g * g;
                sumSqB += b * b;
            }
        }
        const avgR = sumR / pixelCount;
        const avgG = sumG / pixelCount;
        const avgB = sumB / pixelCount;
        // Variance as average squared difference (for RGB combined)
        const varR = (sumSqR / pixelCount) - avgR * avgR;
        const varG = (sumSqG / pixelCount) - avgG * avgG;
        const varB = (sumSqB / pixelCount) - avgB * avgB;
        const variance = (varR + varG + varB) / 3;
        return { avgR, avgG, avgB, variance };
    };
    // Recursive function to build the quadtree
    const buildTree = (x, y, size, depth) => {
        const { avgR, avgG, avgB, variance } = computeStats(x, y, size);
        const node = { x, y, size, averageR: avgR, averageG: avgG, averageB: avgB };
        if (variance > varianceThreshold && depth < maxDepth && size > 1) {
            const half = Math.floor(size / 2);
            node.children = [
                buildTree(x, y, half, depth + 1), // Top-left
                buildTree(x + half, y, half, depth + 1), // Top-right
                buildTree(x, y + half, half, depth + 1), // Bottom-left
                buildTree(x + half, y + half, half, depth + 1) // Bottom-right
            ];
        }
        return node;
    };
    // Build the root quadtree (full image)
    const root = buildTree(0, 0, Math.min(width, height), 0); // Assume square for simplicity; adjust if needed
    // Function to fill the buffer with average colors from leaf nodes
    const fillBuffer = (node) => {
        if (!node.children) {
            // Leaf: fill the region with average color
            const r = Math.floor(node.averageR);
            const g = Math.floor(node.averageG);
            const b = Math.floor(node.averageB);
            for (let dy = 0; dy < node.size; dy++) {
                for (let dx = 0; dx < node.size; dx++) {
                    const px = node.x + dx;
                    const py = node.y + dy;
                    if (px >= width || py >= height)
                        continue;
                    const idx = (py * width + px) * 4;
                    data[idx] = r;
                    data[idx + 1] = g;
                    data[idx + 2] = b;
                    // Alpha unchanged
                }
            }
        }
        else {
            // Recurse on children
            node.children.forEach(fillBuffer);
        }
    };
    fillBuffer(root);
    return data;
>>>>>>> feat/additional-effects-and-modes
});
exports.quadtree = quadtree;


/***/ }),

<<<<<<< HEAD
/***/ 651:
/***/ (function(__unused_webpack_module, exports) {
=======
/***/ 8090:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {
>>>>>>> feat/additional-effects-and-modes


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
<<<<<<< HEAD
exports.scanlines = void 0;
const defaultOpacity = 0.5;
const defaultThickness = 1;
const defaultLines = 10;
const global = (_a, ...args_1) => __awaiter(void 0, [_a, ...args_1], void 0, function* ({ data, width, height }, options = null) {
    const { opacity = defaultOpacity, thickness = defaultThickness, lines = defaultLines, } = (options || {});
    const scanlinePixelAmount = Math.floor(height / lines);
    for (let i = 0; i < data.length; i += 4) {
        let currentLine = Math.floor((i / 4) / width);
        if (currentLine % scanlinePixelAmount < thickness) {
            data[i] = data[i] * (1 - opacity);
            data[i + 1] = data[i + 1] * (1 - opacity);
            data[i + 2] = data[i + 2] * (1 - opacity);
        }
    }
    return data;
});
const scanlines = {
    name: 'scanlines',
    browser: global,
    node: global
};
exports.scanlines = scanlines;
=======
exports.acid = void 0;
const helpers_1 = __webpack_require__(6527);
const acid = (_a) => __awaiter(void 0, [_a], void 0, function* ({ data, width, height, effects }) {
    const pixelOps = (0, helpers_1.getPixelOps)(effects);
    const noiseIntensityRatio = 0.1;
    const scanlinesConfig = { opacity: 0.1, thickness: 2, lines: 100 };
    const rectangleConfig = { offset: 20, intensity: 15, sizeModifier: 3, invertChance: 0.1 };
    const crAbConfig = { intensity: 5 };
    data = (yield effects.scanlines.method({ data, width, height }, scanlinesConfig)) || data;
    data = (yield effects.rainbow.method({ data, width, height })) || data;
    data = (yield effects.rectangles.method({ data, width, height }, rectangleConfig)) || data;
    for (let i = 0; i < data.length; i += 4) {
        pixelOps.solarize({ index: i, data }, { intensity: 0.4 });
        pixelOps.brightness({ index: i, data }, { brightness: -4 });
        pixelOps.noise({ index: i, data }, { ratio: noiseIntensityRatio });
    }
    data = (yield effects.chromaticAberration.method({ data, width, height }, crAbConfig)) || data;
    return data;
});
exports.acid = acid;
>>>>>>> feat/additional-effects-and-modes


/***/ }),

<<<<<<< HEAD
/***/ 654:
/***/ (function(__unused_webpack_module, exports) {
=======
/***/ 8172:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {
>>>>>>> feat/additional-effects-and-modes


Object.defineProperty(exports, "__esModule", ({ value: true }));
<<<<<<< HEAD
exports.brightness = void 0;
const defaultBrightness = 10;
const pixelOp = ({ index, data }, options = null) => {
    let { brightness = defaultBrightness } = (options || {});
    brightness *= 2.55;
    for (let j = 0; j < 3; j++) {
        let newColorChannelValue = data[index + j] + brightness;
        data[index + j] = Math.max(0, Math.min(255, newColorChannelValue));
    }
};
const global = (_a, ...args_1) => __awaiter(void 0, [_a, ...args_1], void 0, function* ({ data }, options = null) {
    let { brightness = defaultBrightness } = (options || {});
    brightness *= 2.55;
    for (let i = 0; i < data.length; i += 4) {
        pixelOp({ index: i, data }, { brightness });
    }
    return data;
});
const brightness = {
    name: 'brightness',
    browser: global,
    node: global,
    pixelOp: pixelOp
};
exports.brightness = brightness;
=======
exports.interferenceLines = exports.fractalNoise = exports.waveDistort = exports.heatmap = exports.borders = exports.anaglyph = exports.chromaticAberration = exports.solarize = exports.scanlines = exports.hueShift = exports.sharpen = exports.brightness = exports.noise = exports.grayscale = exports.rainbow = exports.rectangles = exports.dither = void 0;
var blur_1 = __webpack_require__(668);
Object.defineProperty(exports, "blur", ({ enumerable: true, get: function () { return blur_1.blur; } }));
var dither_1 = __webpack_require__(4545);
Object.defineProperty(exports, "dither", ({ enumerable: true, get: function () { return dither_1.dither; } }));
var rectangles_1 = __webpack_require__(5267);
Object.defineProperty(exports, "rectangles", ({ enumerable: true, get: function () { return rectangles_1.rectangles; } }));
var rainbow_1 = __webpack_require__(1233);
Object.defineProperty(exports, "rainbow", ({ enumerable: true, get: function () { return rainbow_1.rainbow; } }));
var grayscale_1 = __webpack_require__(104);
Object.defineProperty(exports, "grayscale", ({ enumerable: true, get: function () { return grayscale_1.grayscale; } }));
var noise_1 = __webpack_require__(3097);
Object.defineProperty(exports, "noise", ({ enumerable: true, get: function () { return noise_1.noise; } }));
var brightness_1 = __webpack_require__(2654);
Object.defineProperty(exports, "brightness", ({ enumerable: true, get: function () { return brightness_1.brightness; } }));
var sharpen_1 = __webpack_require__(1356);
Object.defineProperty(exports, "sharpen", ({ enumerable: true, get: function () { return sharpen_1.sharpen; } }));
var hueShift_1 = __webpack_require__(9291);
Object.defineProperty(exports, "hueShift", ({ enumerable: true, get: function () { return hueShift_1.hueShift; } }));
var scanlines_1 = __webpack_require__(5651);
Object.defineProperty(exports, "scanlines", ({ enumerable: true, get: function () { return scanlines_1.scanlines; } }));
var solarize_1 = __webpack_require__(5460);
Object.defineProperty(exports, "solarize", ({ enumerable: true, get: function () { return solarize_1.solarize; } }));
var chromaticAberration_1 = __webpack_require__(9926);
Object.defineProperty(exports, "chromaticAberration", ({ enumerable: true, get: function () { return chromaticAberration_1.chromaticAberration; } }));
var anaglyph_1 = __webpack_require__(2677);
Object.defineProperty(exports, "anaglyph", ({ enumerable: true, get: function () { return anaglyph_1.anaglyph; } }));
var borders_1 = __webpack_require__(1136);
Object.defineProperty(exports, "borders", ({ enumerable: true, get: function () { return borders_1.borders; } }));
var heatmap_1 = __webpack_require__(7447);
Object.defineProperty(exports, "heatmap", ({ enumerable: true, get: function () { return heatmap_1.heatmap; } }));
var waveDistort_1 = __webpack_require__(7087);
Object.defineProperty(exports, "waveDistort", ({ enumerable: true, get: function () { return waveDistort_1.waveDistort; } }));
var fractalNoise_1 = __webpack_require__(8768);
Object.defineProperty(exports, "fractalNoise", ({ enumerable: true, get: function () { return fractalNoise_1.fractalNoise; } }));
var interferenceLines_1 = __webpack_require__(4588);
Object.defineProperty(exports, "interferenceLines", ({ enumerable: true, get: function () { return interferenceLines_1.interferenceLines; } }));
>>>>>>> feat/additional-effects-and-modes


/***/ }),

<<<<<<< HEAD
/***/ 668:
=======
/***/ 8421:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PI = exports.pow = exports.random = exports.floor = exports.sin = exports.max = exports.min = void 0;
// Math references
const min = Math.min;
exports.min = min;
const max = Math.max;
exports.max = max;
const sin = Math.sin;
exports.sin = sin;
const floor = Math.floor;
exports.floor = floor;
const random = Math.random;
exports.random = random;
const pow = Math.pow;
exports.pow = pow;
const PI = Math.PI;
exports.PI = PI;


/***/ }),

/***/ 8768:
>>>>>>> feat/additional-effects-and-modes
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
<<<<<<< HEAD
exports.blur = void 0;
const defaultDirection = 'horizontal';
const defaultIntensity = 5;
const global = (_a, ...args_1) => __awaiter(void 0, [_a, ...args_1], void 0, function* ({ data, width, height }, options = null) {
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

/***/ 742:
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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
=======
exports.fractalNoise = void 0;
const perlinNoise = (() => {
    const p = new Array(512);
    const permutation = [
        151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23,
        190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33,
        88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166,
        77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244,
        102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196,
        135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123,
        5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42,
        223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9,
        129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228,
        251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107,
        49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254,
        138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180
    ];
    for (let i = 0; i < 256; i++) {
        p[256 + i] = p[i] = permutation[i];
    }
    const fade = (t) => {
        return t * t * t * (t * (t * 6 - 15) + 10);
    };
    const lerp = (t, a, b) => {
        return a + t * (b - a);
    };
    const grad = (hash, x, y, z) => {
        const h = hash & 15;
        const u = h < 8 ? x : y;
        const v = h < 4 ? y : (h === 12 || h === 14 ? x : z);
        return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
    };
    return (x, y, z) => {
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
        return lerp(w, lerp(v, lerp(u, grad(p[AA], x, y, z), grad(p[BA], x - 1, y, z)), lerp(u, grad(p[AB], x, y - 1, z), grad(p[BB], x - 1, y - 1, z))), lerp(v, lerp(u, grad(p[AA + 1], x, y, z - 1), grad(p[BA + 1], x - 1, y, z - 1)), lerp(u, grad(p[AB + 1], x, y - 1, z - 1), grad(p[BB + 1], x - 1, y - 1, z - 1))));
    };
})();
const global = (_a, ...args_1) => __awaiter(void 0, [_a, ...args_1], void 0, function* ({ data, width, height }, options = null) {
    var _b, _c, _d, _e;
    const config = (options || {});
    const octaves = (_b = config.octaves) !== null && _b !== void 0 ? _b : 4;
    const persistence = (_c = config.persistence) !== null && _c !== void 0 ? _c : 0.5;
    const scale = (_d = config.scale) !== null && _d !== void 0 ? _d : 4;
    const intensity = (_e = config.intensity) !== null && _e !== void 0 ? _e : 0.5;
    const maxValue = (1 - Math.pow(persistence, octaves)) / (1 - persistence);
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
            noise /= maxValue;
            const idx = (y * width + x) * 4;
            const shift = noise * intensity * 128;
            data[idx] = Math.max(0, Math.min(255, data[idx] + shift));
            data[idx + 1] = Math.max(0, Math.min(255, data[idx + 1] + shift));
            data[idx + 2] = Math.max(0, Math.min(255, data[idx + 2] + shift));
        }
    }
    return data;
});
const fractalNoise = {
    name: 'fractalNoise',
    browser: global,
    node: global
};
exports.fractalNoise = fractalNoise;


/***/ }),

/***/ 9291:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


>>>>>>> feat/additional-effects-and-modes
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
<<<<<<< HEAD
exports.applyMode = void 0;
const modes = __importStar(__webpack_require__(634));
const getMode = (mode) => {
    for (let [key, value] of Object.entries(modes)) {
        if (key === mode) {
            return value;
        }
    }
    return null;
};
const applyMode = (_a) => __awaiter(void 0, [_a], void 0, function* ({ data, width, height, mode, effectPool }) {
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
=======
exports.hueShift = void 0;
const helpers_1 = __webpack_require__(6527);
const defaultShift = 180;
const global = (_a, ...args_1) => __awaiter(void 0, [_a, ...args_1], void 0, function* ({ data }, options = null) {
    const { shift = defaultShift } = (options || {});
    for (let i = 0; i < data.length; i += 4) {
        let hsv = (0, helpers_1.rgbToHsv)(data[i], data[i + 1], data[i + 2]);
        hsv[0] = (hsv[0] + shift / 360.0) % 1;
        let rgb = (0, helpers_1.hsvToRgb)(hsv[0], hsv[1], hsv[2]);
        data[i] = rgb[0];
        data[i + 1] = rgb[1];
        data[i + 2] = rgb[2];
        data[i + 3] = data[i + 3];
    }
    return data;
});
const hueShift = {
    name: 'hueShift',
    browser: global,
    node: global
};
exports.hueShift = hueShift;
>>>>>>> feat/additional-effects-and-modes


/***/ }),

<<<<<<< HEAD
/***/ 800:
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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.effectPool = void 0;
const effectsCommon = __importStar(__webpack_require__(172));
const effectsBrowser = __importStar(__webpack_require__(433));
const effectsUsed = Object.values(Object.assign(Object.assign({}, effectsCommon), effectsBrowser));
exports.effectPool = effectsUsed.reduce((obj, effect) => {
    if (effect.hasOwnProperty('browser')) {
        obj[effect.name] = {
            method: effect.browser
        };
        if (effect.hasOwnProperty('pixelOp')) {
            obj[effect.name].pixelOp = effect.pixelOp;
        }
    }
    return obj;
}, {});


/***/ }),

/***/ 884:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPixelOps = void 0;
const hasPixelOp = (item) => {
    return item.pixelOp !== undefined;
};
const getPixelOps = (effects) => {
    return Object.entries(effects)
        .reduce((acc, [k, v]) => {
        if (hasPixelOp(v)) {
            acc[k] = v.pixelOp;
        }
        return acc;
    }, {});
};
exports.getPixelOps = getPixelOps;


/***/ }),

/***/ 926:
/***/ (function(__unused_webpack_module, exports) {


=======
/***/ 9520:
/***/ (function(__unused_webpack_module, exports) {


>>>>>>> feat/additional-effects-and-modes
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
<<<<<<< HEAD
exports.chromaticAberration = void 0;
const defaultIntensity = 5;
const global = (_a, ...args_1) => __awaiter(void 0, [_a, ...args_1], void 0, function* ({ data, width }, options = null) {
    const { intensity = defaultIntensity } = (options || {});
    const rLayer = new Uint8Array(data.length);
    const gLayer = new Uint8Array(data.length);
    const bLayer = new Uint8Array(data.length);
    for (let i = 0; i < data.length; i += 4) {
        rLayer[i] = data[i];
        gLayer[i + 1] = data[i + 1];
        bLayer[i + 2] = data[i + 2];
        rLayer[i + 3] = gLayer[i + 3] = bLayer[i + 3] = data[i + 3];
    }
    const shiftLayer = (layer, offset) => {
        const shiftedLayer = new Uint8Array(layer.length);
        for (let i = 0; i < layer.length; i += 4) {
            const x = (i / 4) % width, y = Math.floor((i / 4) / width);
            const shiftedX = Math.max(0, Math.min(width - 1, x + offset));
            const shiftedIndex = (shiftedX + y * width) * 4;
            shiftedLayer[shiftedIndex] = layer[i];
            shiftedLayer[shiftedIndex + 1] = layer[i + 1];
            shiftedLayer[shiftedIndex + 2] = layer[i + 2];
            shiftedLayer[shiftedIndex + 3] = layer[i + 3];
        }
        return shiftedLayer;
    };
    const rShift = Math.floor((Math.random() * 2 - 1) * intensity);
    const gShift = Math.floor((Math.random() * 2 - 1) * intensity);
    const bShift = Math.floor((Math.random() * 2 - 1) * intensity);
    const shiftedRLayer = shiftLayer(rLayer, rShift);
    const shiftedGLayer = shiftLayer(gLayer, gShift);
    const shiftedBLayer = shiftLayer(bLayer, bShift);
    for (let i = 0; i < data.length; i += 4) {
        data[i] = shiftedRLayer[i];
        data[i + 1] = shiftedGLayer[i + 1];
        data[i + 2] = shiftedBLayer[i + 2];
        data[i + 3] = data[i + 3];
    }
    return data;
});
const chromaticAberration = {
    name: 'chromaticAberration',
    browser: global,
    node: global
};
exports.chromaticAberration = chromaticAberration;
=======
exports.bufferToBitmap = void 0;
const bufferToBitmap = (_a) => __awaiter(void 0, [_a], void 0, function* ({ data, width, height }) {
    const imgData = new ImageData(new Uint8ClampedArray(data), width, height);
    const canvas = new OffscreenCanvas(width, height);
    const context = canvas.getContext('2d');
    if (!context) {
        throw new Error('Unable to get canvas context');
    }
    context.putImageData(imgData, 0, 0);
    return createImageBitmap(canvas);
});
exports.bufferToBitmap = bufferToBitmap;
>>>>>>> feat/additional-effects-and-modes


/***/ }),

<<<<<<< HEAD
/***/ 935:
/***/ ((__unused_webpack_module, exports) => {
=======
/***/ 9884:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPixelOps = void 0;
const hasPixelOp = (item) => {
    return item.pixelOp !== undefined;
};
const getPixelOps = (effects) => {
    return Object.entries(effects)
        .reduce((acc, [k, v]) => {
        if (hasPixelOp(v)) {
            acc[k] = v.pixelOp;
        }
        return acc;
    }, {});
};
exports.getPixelOps = getPixelOps;


/***/ }),

/***/ 9926:
/***/ (function(__unused_webpack_module, exports) {
>>>>>>> feat/additional-effects-and-modes


Object.defineProperty(exports, "__esModule", ({ value: true }));
<<<<<<< HEAD
exports.removeAlphaChannel = void 0;
const removeAlphaChannel = (data) => {
    for (let i = 0; i < data.length; i += 4) {
        data[i + 3] = 255;
    }
    return data;
};
exports.removeAlphaChannel = removeAlphaChannel;
=======
exports.chromaticAberration = void 0;
const defaultIntensity = 5;
const global = (_a, ...args_1) => __awaiter(void 0, [_a, ...args_1], void 0, function* ({ data, width }, options = null) {
    const { intensity = defaultIntensity } = (options || {});
    const rLayer = new Uint8Array(data.length);
    const gLayer = new Uint8Array(data.length);
    const bLayer = new Uint8Array(data.length);
    for (let i = 0; i < data.length; i += 4) {
        rLayer[i] = data[i];
        gLayer[i + 1] = data[i + 1];
        bLayer[i + 2] = data[i + 2];
        rLayer[i + 3] = gLayer[i + 3] = bLayer[i + 3] = data[i + 3];
    }
    const shiftLayer = (layer, offset) => {
        const shiftedLayer = new Uint8Array(layer.length);
        for (let i = 0; i < layer.length; i += 4) {
            const x = (i / 4) % width, y = Math.floor((i / 4) / width);
            const shiftedX = Math.max(0, Math.min(width - 1, x + offset));
            const shiftedIndex = (shiftedX + y * width) * 4;
            shiftedLayer[shiftedIndex] = layer[i];
            shiftedLayer[shiftedIndex + 1] = layer[i + 1];
            shiftedLayer[shiftedIndex + 2] = layer[i + 2];
            shiftedLayer[shiftedIndex + 3] = layer[i + 3];
        }
        return shiftedLayer;
    };
    const rShift = Math.floor((Math.random() * 2 - 1) * intensity);
    const gShift = Math.floor((Math.random() * 2 - 1) * intensity);
    const bShift = Math.floor((Math.random() * 2 - 1) * intensity);
    const shiftedRLayer = shiftLayer(rLayer, rShift);
    const shiftedGLayer = shiftLayer(gLayer, gShift);
    const shiftedBLayer = shiftLayer(bLayer, bShift);
    for (let i = 0; i < data.length; i += 4) {
        data[i] = shiftedRLayer[i];
        data[i + 1] = shiftedGLayer[i + 1];
        data[i + 2] = shiftedBLayer[i + 2];
        data[i + 3] = data[i + 3];
    }
    return data;
});
const chromaticAberration = {
    name: 'chromaticAberration',
    browser: global,
    node: global
};
exports.chromaticAberration = chromaticAberration;
>>>>>>> feat/additional-effects-and-modes


/***/ }),

<<<<<<< HEAD
/***/ 941:
=======
/***/ 9941:
>>>>>>> feat/additional-effects-and-modes
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
exports.pixelsort = void 0;
const pixelsort = (_a, ...args_1) => __awaiter(void 0, [_a, ...args_1], void 0, function* ({ data, width, height, effects }, options = {}) {
    var _b, _c, _d;
    if (data.length === 0)
        return data;
    const minThreshold = (_b = options.minThreshold) !== null && _b !== void 0 ? _b : 50;
    const maxThreshold = (_c = options.maxThreshold) !== null && _c !== void 0 ? _c : 200;
    const direction = (_d = options.direction) !== null && _d !== void 0 ? _d : 'vertical';
    // Precompute brightness multipliers as constants for minor speed-up in hot loop
    const R_WEIGHT = 0.299;
    const G_WEIGHT = 0.587;
    const B_WEIGHT = 0.114;
    // Helper to calculate brightness (luminance) for a pixel at index j
    const getBrightness = (j) => {
        return R_WEIGHT * data[j] + G_WEIGHT * data[j + 1] + B_WEIGHT * data[j + 2];
    };
    if (direction === 'horizontal') {
        for (let y = 0; y < height; y++) {
            const rowStart = y * width * 4;
            let start = 0;
            while (start < width) {
                while (start < width && getBrightness(rowStart + start * 4) < minThreshold) {
                    start++;
                }
                if (start >= width)
                    break;
                let end = start;
                while (end < width && getBrightness(rowStart + end * 4) <= maxThreshold) {
                    end++;
                }
                if (end === start) {
                    start++;
                    continue;
                }
                if (end > start + 1) {
                    // Optimization: Pre-allocate indices array with exact size to avoid resize overhead
                    const segmentLength = end - start;
                    const indices = new Array(segmentLength);
                    for (let i = 0; i < segmentLength; i++) {
                        indices[i] = rowStart + (start + i) * 4;
                    }
                    // Sort indices by brightness (descending)
                    indices.sort((a, b) => getBrightness(b) - getBrightness(a));
                    // Optimization: Reuse a single temp Uint8Array if possible, but since sizes vary, create once per segment (no change needed here, but it's fine as is)
                    const tempSegment = new Uint8Array(segmentLength * 4);
                    for (let i = 0; i < segmentLength; i++) {
                        const src = indices[i];
                        const dest = i * 4;
                        tempSegment[dest] = data[src];
                        tempSegment[dest + 1] = data[src + 1];
                        tempSegment[dest + 2] = data[src + 2];
                        tempSegment[dest + 3] = data[src + 3];
                    }
                    data.set(tempSegment, rowStart + start * 4);
                }
                start = end;
            }
        }
    }
    else if (direction === 'vertical') {
        for (let x = 0; x < width; x++) {
            const colStart = x * 4;
            let start = 0;
            while (start < height) {
                while (start < height && getBrightness(colStart + start * width * 4) < minThreshold) {
                    start++;
                }
                if (start >= height)
                    break;
                let end = start;
                while (end < height && getBrightness(colStart + end * width * 4) <= maxThreshold) {
                    end++;
                }
                if (end === start) {
                    start++;
                    continue;
                }
                if (end > start + 1) {
                    const segmentLength = end - start;
                    const indices = new Array(segmentLength);
                    for (let i = 0; i < segmentLength; i++) {
                        indices[i] = colStart + (start + i) * width * 4;
                    }
                    indices.sort((a, b) => getBrightness(b) - getBrightness(a));
                    const tempSegment = new Uint8Array(segmentLength * 4);
                    for (let i = 0; i < segmentLength; i++) {
                        const src = indices[i];
                        const dest = i * 4;
                        tempSegment[dest] = data[src];
                        tempSegment[dest + 1] = data[src + 1];
                        tempSegment[dest + 2] = data[src + 2];
                        tempSegment[dest + 3] = data[src + 3];
                    }
                    // Optimization: Use a single loop for copy-back, but unroll slightly for speed (though JS engines optimize this anyway)
                    for (let i = 0; i < segmentLength; i++) {
                        const destIndex = colStart + (start + i) * width * 4;
                        data[destIndex] = tempSegment[i * 4];
                        data[destIndex + 1] = tempSegment[i * 4 + 1];
                        data[destIndex + 2] = tempSegment[i * 4 + 2];
                        data[destIndex + 3] = tempSegment[i * 4 + 3];
                    }
                }
                start = end;
            }
        }
    }
    // Optimization: Chain effects in a loop, but since there are few, no big gain—kept as is for readability
    for (const dir of ['horizontal', 'vertical']) {
        data = (yield effects.blur.method({ data, width, height }, { direction: dir, intensity: 2 })) || data;
    }
    data = yield effects.chromaticAberration.method({ data, width, height }, { intensity: 2 });
    data = yield effects.grayscale.method({ data, width, height }, { intensity: 0.275 });
    data = yield effects.noise.method({ data, width, height }, { intensity: 7 });
    data = yield effects.brightness.method({ data, width, height }, { brightness: -2 });
    return data;
});
exports.pixelsort = pixelsort;


/***/ }),

<<<<<<< HEAD
/***/ 954:
=======
/***/ 9954:
>>>>>>> feat/additional-effects-and-modes
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
<<<<<<< HEAD
/******/ 	var __webpack_exports__ = __webpack_require__(55);
=======
/******/ 	var __webpack_exports__ = __webpack_require__(2055);
>>>>>>> feat/additional-effects-and-modes
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});