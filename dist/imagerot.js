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

/***/ 452:
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
exports.borders = void 0;
const defaultBorderSize = 10;
const defaultBorderColor = [0, 0, 0];
const defaultBorderOpacity = 1;
const global = ({ data, width, height }, options = null) => __awaiter(void 0, void 0, void 0, function* () {
    const { size = defaultBorderSize, color = defaultBorderColor, opacity = defaultBorderOpacity } = (options || {});
    for (let i = 0; i < data.length; i += 4) {
        let x = (i / 4) % width, y = Math.floor((i / 4) / width);
        if (x < size || x >= width - size || y < size || y >= height - size) {
            data[i] = data[i] * (1 - opacity) + color[0] * opacity;
            data[i + 1] = data[i + 1] * (1 - opacity) + color[1] * opacity;
            data[i + 2] = data[i + 2] * (1 - opacity) + color[2] * opacity;
        }
    }
    return data;
});
const borders = {
    name: 'borders',
    browser: global,
    node: global
};
exports.borders = borders;


/***/ }),

/***/ 758:
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
const global = ({ data }, options = null) => __awaiter(void 0, void 0, void 0, function* () {
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


/***/ }),

/***/ 499:
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
exports.chromaticAberration = void 0;
const defaultIntensity = 5;
const global = ({ data, width }, options = null) => __awaiter(void 0, void 0, void 0, function* () {
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


/***/ }),

/***/ 626:
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
exports.grayscale = void 0;
const defaultIntensity = 1;
const global = ({ data }, options = null) => __awaiter(void 0, void 0, void 0, function* () {
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


/***/ }),

/***/ 281:
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
const global = ({ data, width, height }, options = null) => __awaiter(void 0, void 0, void 0, function* () {
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

/***/ 934:
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
const helpers_1 = __webpack_require__(513);
const defaultShift = 180;
const global = ({ data }, options = null) => __awaiter(void 0, void 0, void 0, function* () {
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

/***/ 871:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.heatmap = exports.borders = exports.chromaticAberration = exports.solarize = exports.scanlines = exports.hueShift = exports.sharpen = exports.brightness = exports.noise = exports.grayscale = exports.rainbow = exports.rectangles = exports.dither = exports.blur = void 0;
var blur_1 = __webpack_require__(216);
Object.defineProperty(exports, "blur", ({ enumerable: true, get: function () { return blur_1.blur; } }));
var dither_1 = __webpack_require__(888);
Object.defineProperty(exports, "dither", ({ enumerable: true, get: function () { return dither_1.dither; } }));
var rectangles_1 = __webpack_require__(164);
Object.defineProperty(exports, "rectangles", ({ enumerable: true, get: function () { return rectangles_1.rectangles; } }));
var rainbow_1 = __webpack_require__(466);
Object.defineProperty(exports, "rainbow", ({ enumerable: true, get: function () { return rainbow_1.rainbow; } }));
var grayscale_1 = __webpack_require__(626);
Object.defineProperty(exports, "grayscale", ({ enumerable: true, get: function () { return grayscale_1.grayscale; } }));
var noise_1 = __webpack_require__(930);
Object.defineProperty(exports, "noise", ({ enumerable: true, get: function () { return noise_1.noise; } }));
var brightness_1 = __webpack_require__(758);
Object.defineProperty(exports, "brightness", ({ enumerable: true, get: function () { return brightness_1.brightness; } }));
var sharpen_1 = __webpack_require__(291);
Object.defineProperty(exports, "sharpen", ({ enumerable: true, get: function () { return sharpen_1.sharpen; } }));
var hueShift_1 = __webpack_require__(934);
Object.defineProperty(exports, "hueShift", ({ enumerable: true, get: function () { return hueShift_1.hueShift; } }));
var scanlines_1 = __webpack_require__(471);
Object.defineProperty(exports, "scanlines", ({ enumerable: true, get: function () { return scanlines_1.scanlines; } }));
var solarize_1 = __webpack_require__(54);
Object.defineProperty(exports, "solarize", ({ enumerable: true, get: function () { return solarize_1.solarize; } }));
var chromaticAberration_1 = __webpack_require__(499);
Object.defineProperty(exports, "chromaticAberration", ({ enumerable: true, get: function () { return chromaticAberration_1.chromaticAberration; } }));
var borders_1 = __webpack_require__(452);
Object.defineProperty(exports, "borders", ({ enumerable: true, get: function () { return borders_1.borders; } }));
var heatmap_1 = __webpack_require__(281);
Object.defineProperty(exports, "heatmap", ({ enumerable: true, get: function () { return heatmap_1.heatmap; } }));


/***/ }),

/***/ 930:
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
const global = ({ data }, options = null) => __awaiter(void 0, void 0, void 0, function* () {
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

/***/ 466:
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
exports.rainbow = void 0;
const math_1 = __webpack_require__(517);
const global = ({ data, width, height }) => __awaiter(void 0, void 0, void 0, function* () {
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

/***/ 471:
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
exports.scanlines = void 0;
const defaultOpacity = 0.5;
const defaultThickness = 1;
const defaultLines = 10;
const global = ({ data, width, height }, options = null) => __awaiter(void 0, void 0, void 0, function* () {
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


/***/ }),

/***/ 291:
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
const global = ({ data, width, height }) => __awaiter(void 0, void 0, void 0, function* () {
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

/***/ 54:
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
const global = ({ data }, options = null) => __awaiter(void 0, void 0, void 0, function* () {
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

/***/ 186:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.degrade = exports.pixelate = void 0;
var browser_1 = __webpack_require__(449);
Object.defineProperty(exports, "pixelate", ({ enumerable: true, get: function () { return browser_1.pixelate; } }));
var browser_2 = __webpack_require__(61);
Object.defineProperty(exports, "degrade", ({ enumerable: true, get: function () { return browser_2.degrade; } }));


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

/***/ 347:
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

/***/ 63:
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
__exportStar(__webpack_require__(63), exports);
__exportStar(__webpack_require__(737), exports);
__exportStar(__webpack_require__(347), exports);


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

/***/ 737:
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

/***/ 641:
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
const bufferToBitmap = ({ data, width, height }) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.rgbToHsv = exports.hsvToRgb = exports.urlToBuffer = exports.fileToBuffer = exports.bufferToBitmap = exports.bufferToBlob = exports.useMode = exports.useEffect = exports.listEffects = exports.listModes = exports.stage = void 0;
const urlToBuffer_1 = __webpack_require__(468);
Object.defineProperty(exports, "urlToBuffer", ({ enumerable: true, get: function () { return urlToBuffer_1.urlToBuffer; } }));
const global_1 = __webpack_require__(951);
const bufferToBitmap_1 = __webpack_require__(641);
Object.defineProperty(exports, "bufferToBitmap", ({ enumerable: true, get: function () { return bufferToBitmap_1.bufferToBitmap; } }));
const fileToBuffer_1 = __webpack_require__(208);
Object.defineProperty(exports, "fileToBuffer", ({ enumerable: true, get: function () { return fileToBuffer_1.fileToBuffer; } }));
const bufferToBlob_1 = __webpack_require__(433);
Object.defineProperty(exports, "bufferToBlob", ({ enumerable: true, get: function () { return bufferToBlob_1.bufferToBlob; } }));
const helpers_1 = __webpack_require__(513);
Object.defineProperty(exports, "hsvToRgb", ({ enumerable: true, get: function () { return helpers_1.hsvToRgb; } }));
Object.defineProperty(exports, "rgbToHsv", ({ enumerable: true, get: function () { return helpers_1.rgbToHsv; } }));
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
const useEffect = ({ data, width, height }, effect, options) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, global_1.useEffect)({ data, width, height }, browser_1.effectPool, effect, options || {});
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
            return value.method;
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

/***/ 352:
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
exports.acid = void 0;
const helpers_1 = __webpack_require__(513);
const acid = ({ data, width, height, effects }) => __awaiter(void 0, void 0, void 0, function* () {
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

/***/ 961:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.acid = exports.lacunae = exports.chimera = void 0;
var chimera_1 = __webpack_require__(53);
Object.defineProperty(exports, "chimera", ({ enumerable: true, get: function () { return chimera_1.chimera; } }));
var lacunae_1 = __webpack_require__(450);
Object.defineProperty(exports, "lacunae", ({ enumerable: true, get: function () { return lacunae_1.lacunae; } }));
var acid_1 = __webpack_require__(352);
Object.defineProperty(exports, "acid", ({ enumerable: true, get: function () { return acid_1.acid; } }));


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