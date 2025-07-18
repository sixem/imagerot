# ImageRot

<img width="2200" height="468" alt="image" src="https://github.com/user-attachments/assets/1dd1c3f6-ae76-4a0f-9f4d-d32004de3262" />

**ImageRot** (/ˈɪm.ɪdʒ.rɒt/ *noun*) is a lightweight, efficient, cross-environment image library. It lets you apply unique effects and modes to images by manipulating raw image buffers.

This library works in both the browser and node.

To get started, you can read the [API documentation](https://github.com/sixem/imagerot/blob/main/API.md).

Or, you can also check out the [Web UI](https://five.sh/imagerot/) if you want to test out different effects or modes!

## 💫 Features
### Cross-Environment Consistency
- Achieves similar results in both Node and browser environments.
- Ensures good integration and usage across different environments.

### Configurable Build
- Allows for a custom build that only includes the desired effects or modes.
- A minified, custom build can be as low as 30 kilobytes. Pick what you want of effects and modes, and compile it yourself!

### Web Worker Support
- Compatible to be run within web workers in the browser, enabling smoother and _heavily_ improved performance.

### Lightweight
- Built with an emphasis on lightness, the package requires **zero** dependencies in the browser environment.
- Just include the script, and you're done!

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

The general workflow consists of staging (preparing) an input, then modifying it by applying different modes or [effects](https://github.com/sixem/imagerot/blob/main/EFFECTS.md) to it:
```js
let staged = await imagerot.stage({
    // This can be a browser File, a pre-staged variable or even a Buffer returned from `fs`
    data: file
    // URLs are supported too:
    //url: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Shaqi_jrvej.jpg'
});
```

Generally, effects are smaller, more controllable effects that can be chained to create unique effects. Modes on the other hand are more complete overhauls of the image, often consisting of mulitple effects used, or even completely custom methods. These modes are meant to provide a more specific and unique result, while effects are more for smaller edits or for chaining them with each other to create unique effects.

To modify the staged variable:
```js
// Apply the `chimera` mode to the image
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
You can build the project from source yourself. Clone it in any way you prefer, install the packages and run the build:

```bash
git clone https://github.com/sixem/imagerot/ && cd imagerot
npm install
npm run build
```

The `canvas` package may require building from source for some platforms or environments. So, if you get any errors during `npm install` try installing these packages for your OS or distro:

| OS/Distro | Installation                                                                                               |
| ----------- | -------------------------------------------------------------------------------------------------------- |
| **macOS**   | `brew install pkg-config cairo pango libpng jpeg giflib librsvg pixman python-setuptools`                |
| **Ubuntu**  | `sudo apt-get install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev` |
| **Fedora**  | `sudo yum install gcc-c++ cairo-devel pango-devel libjpeg-turbo-devel giflib-devel`                      |
| **Solaris** | `pkgin install cairo pango pkg-config xproto renderproto kbproto xextproto`                              |
| **OpenBSD** | `doas pkg_add cairo pango png jpeg giflib`                                                               |
| **Others**  | See the [wiki](https://github.com/Automattic/node-canvas/wiki/)                                          |

Once built, it will create both a `lib` for Node-usage and a `dist` with the packaged browser-compatible files.

You can also adjust the exported effects and modes before building, if you want to create a customized bundle.

### Targeted Builds:

| Enviornment | Command                 |
| ----------- | ----------------------- |
| **Browser** | `npm run build:webpack` |
| **Node**    | `npm run build:ts`      |

## 🔥 Example Results

Some example results of various modes applied to different images.

<img width="1501" height="400" alt="image" src="https://github.com/user-attachments/assets/9125c7dc-50ce-4e91-9d86-9236665cc8fc" />
<br/><br/>
<img width="1501" height="400" alt="chimera" src="https://github.com/user-attachments/assets/1dcf52ca-1e2a-4e58-8413-9f745a614585" />
<br/><br/>
<img width="1500" height="400" alt="lacunae" src="https://github.com/user-attachments/assets/1649eb2a-a52c-4095-a82b-027a8e2b4794" />
<br/><br/>
<img width="1501" height="400" alt="vaporwave" src="https://github.com/user-attachments/assets/ff1ee45f-dd30-4bf9-8065-1eb03c48cf30" />

## 💡 Contributing

Want to contribute? Take a look at how the current effects and modes work, and feel free to submit your own ideas. Effects are smaller building blocks and easier to add, while modes are more complex and should feel a bit more unique to get accepted.

Whether it's code or just suggestions and feedback, all contributions are welcome!

## 📣 Disclaimers
If you enjoy this project, I'd really appreciate it if you'd leave a star! ⭐

This project has taken a lot of inspiration from [datamosh](https://github.com/Datamosh-js/datamosh), which is a similar project, so big thanks to the creator of that! 💕

*ImageRot* was created to provide a way to easily manipulate buffers in the **browser**. It puts a big focus on general effects, image editing, and the combination of effects and modes to create unique results!

Much love.