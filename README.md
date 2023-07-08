# ImageRot
![cover](https://github.com/sixem/imagerot/assets/2825338/b1b3c703-6776-450c-89c2-5c8724e84d1b)

A lightweight, cross-environment image library for applying unique effects via raw image buffers.

Get started by reading the [API documentation](API.md).

Check out the [Web UI](https://five.sh/imagerot/) if you want to test out different effects or modes!

## Features
### Cross-Environment Consistency
* Achieves similar results in both Node and browser environments, ensuring good integration and usage across different environments.

### Configurable Build
* Allows for a custom build that only includes the desired effects or modes.

### Web Worker Support
* Compatible to be run within web workers in the browser, enabling improved performance.

### Lightweight Design
* Built with an emphasis on lightness, the package requires zero dependencies in the browser environment.

## Packaged Build
For use in the browser, the easiest way to get started is to use the pre-built source available at `dist/imagerot.min.js`. This file bundles everything you need into a single file.

Include the script in your HTML `<head/>` tag:
```html
<script type="text/javascript" src="imagerot.min.js"></script>
```

## Package Manager
To use it in Node, install it using NPM:
```bash
npm install --save imagerot
```

Import the package:
```js
import imagerot from 'imagerot';
```

If you are targeting the browser, you can also use:
```js
import imagerot from 'imagerot/browser';
```

## Example Usage
The basic usage is the same in Node as it is in the browser.

The general workflow consists of preparing an input using `stage()`, then modifying it using `useMode()` or `useEffect()`:
```js
let staged = await imagerot.stage({
    // This can be a browser File, a pre-staged variable or even a Buffer returned from `fs`
    data: file
});
```
By the way, this also supports URLs:
```js
let staged = await imagerot.stage({
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Shaqi_jrvej.jpg'
});
```
To modify the staged variable:
```js
// Apply the `chimera` effect to the image
staged = await imagerot.useMode(staged, 'chimera');
// Apply a `pixelate` effect to the image
staged = await imagerot.useEffect(staged, 'pixelate', { intensity: 50 });
```
The project exports some environment-specific variables for both browser and Node, but in this example we'll only cover the basic ones.

For a more detailed overview of the available functions, refer to the [API documentation](API.md).

To display the modified image in the Browser, one can use `bufferToBlob()`:
```js
const img = document.querySelector('img.output');
// Convert the buffer to a Blob URL and display it
img.setAttribute('src', await imagerot.bufferToBlob(staged));
```

Or, to save the modified image in Node, you can use `saveBuffer()`
```js
const output = `${Math.floor(Date.now() / 1000)}.png`;
await imagerot.saveBuffer(staged, output);
```

## Building
You can build the project from source yourself:
```bash
git clone https://github.com/sixem/imagerot/
cd imagerot
npm install
npm run build
```
This will create both a `lib` for Node-usage and a `dist` with the packaged browser-compatible files.

You can also adjust the exported effects and modes before building, if you want to create a customized bundle.

### Targeted Builds:
* **Browser:** `npm run build:webpack`
* **Node:** `npm run build:ts`

## Disclaimer
This project has taken a lot of inspiration from [datamosh](https://github.com/Datamosh-js/datamosh), which is a similar project, so big thanks to the creator of that! 💖

ImageRot was created to provide a way to easily manipulate buffers in the browser. It puts a big focus on general effects, image editing, and the combination of effects and modes to create unique results! :sparkles: