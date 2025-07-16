# ImageRot

![cover](https://github.com/sixem/imagerot/assets/2825338/9c1901d4-76e1-44d4-9053-aa3ac044acdc)

**ImageRot** (/ˈɪm.ɪdʒ.rɒt/ *noun*) is a lightweight, cross-environment image library for applying unique effects via raw image buffers.

Get started by reading the [API documentation](https://github.com/sixem/imagerot/blob/main/API.md).

Check out the [Web UI](https://five.sh/imagerot/) if you want to test out different effects or modes!

## 💫 Features
### Cross-Environment Consistency
- Achieves similar results in both Node and browser environments.
- This ensures good integration and usage across different environments.

### Configurable Build
- Allows for a custom build that only includes the desired effects or modes.

### Web Worker Support
- Compatible to be run within web workers in the browser, enabling smoother and improved performance.

### Lightweight
- Built with an emphasis on lightness, the package requires **zero** dependencies in the browser environment.
- The minified build should be no more than 30 to 40 kilobytes in total.

## 🔸 Browser usage
For use in the browser, the easiest way to get started is to use the pre-built source available in [dist](https://github.com/sixem/imagerot/blob/main/dist/).

Include the script in your HTML `<head/>` tag:
```html
<script type="text/javascript" src="/dist/imagerot.min.js"></script>
```

## 🔹 Node usage
To use it in Node, install it using NPM:
```bash
npm install --save imagerot
```

Import the package:
```js
import imagerot from 'imagerot';
```

If you are targeting the browser, you can instead use:
```js
import imagerot from 'imagerot/browser';
```

## 🧪 Example Usage
The basic usage is the same in Node as it is in the browser.

The general workflow consists of staging (preparing) an input, then modifying it by applying different modes or [effects](https://github.com/sixem/imagerot/blob/main/EFFECTS.md):
```js
let staged = await imagerot.stage({
    // This can be a browser File, a pre-staged variable or even a Buffer returned from `fs`
    data: file
    // URLs are supported too:
    //url: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Shaqi_jrvej.jpg'
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

For a more detailed overview of the available functions, refer to the [API documentation](https://github.com/sixem/imagerot/blob/main//API.md).

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

## 🛠️ Building
You can build the project from source yourself:

```bash
git clone https://github.com/sixem/imagerot/
cd imagerot
npm install
npm run build
```

The `canvas` package may require building from source. So, if you get any errors during `npm install` try installing these packages for your OS or distro:

| OS/Distro | Installation                                                                                             |
| ----------- | -------------------------------------------------------------------------------------------------------- |
| **macOS**   | `brew install pkg-config cairo pango libpng jpeg giflib librsvg pixman python-setuptools`                |
| **Ubuntu**  | `sudo apt-get install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev` |
| **Fedora**  | `sudo yum install gcc-c++ cairo-devel pango-devel libjpeg-turbo-devel giflib-devel`                      |
| **Solaris** | `pkgin install cairo pango pkg-config xproto renderproto kbproto xextproto`                              |
| **OpenBSD** | `doas pkg_add cairo pango png jpeg giflib`                                                               |
| **Windows** | See [wiki](https://github.com/Automattic/node-canvas/wiki/Installation:-Windows)    |
| **Others**  | See [wiki](https://github.com/Automattic/node-canvas/wiki)                             |

Once built, it will create both a `lib` for Node-usage and a `dist` with the packaged browser-compatible files.

You can also adjust the exported effects and modes before building, if you want to create a customized bundle.

### Targeted Builds:
* **Browser:** `npm run build:webpack`
* **Node:** `npm run build:ts`

## Disclaimer
This project has taken a lot of inspiration from [datamosh](https://github.com/Datamosh-js/datamosh), which is a similar project, so big thanks to the creator of that! 💖

*ImageRot* was created to provide a way to easily manipulate buffers in the **browser**. It puts a big focus on general effects, image editing, and the combination of effects and modes to create unique results! ✨
