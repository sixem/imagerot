## ImageRot Effects

<p>Details about the native effects provided by ImageRot</p>
<p>All of these effects are available for testing in the <a href="https://five.sh/imagerot/">ImageRot UI</a></p>

## What are effects?

Effects are like image filters. You can chain them together for unique results, or you can apply them single-handedly.

<br/>

<!--- API BEGIN --->

# Anaglyph

* **Name:** `anaglyph`

Adds an anaglyph-like (3D) effect to the image.

### Configuration

| Property   | Type     | Default         | Description                        |
| ---------- | -------- | --------------- | ---------------------------------- |
| redShift   | `object` | `{x: 5, y: 0}`  | Pixel offset for the red channel   |
| greenShift | `object` | `{x: -5, y: 0}` | Pixel offset for the green channel |
| blueShift  | `object` | `{x: 0, y: 5}`  | Pixel offset for the blue channel  |

# Degrade

* **Name:** `degrade`

Adds JPEG artifacts to the image.

### Configuration

| Property | Type     | Default | Description                                        |
| -------- | -------- | ------- | -------------------------------------------------- |
| quality  | `number` | `0.075` | JPEG quality (a lower value equals more artifacts) |

# Interference Lines

* **Name:** `interferenceLines`

Adds interference lines (VHS or lost footage-like effect) to the image.

### Configuration

| Property              | Type     | Default | Description                                                     |
| --------------------- | -------- | ------- | --------------------------------------------------------------- |
| lineThickness         | `number` | `2`     | Thickness of each scanline in pixels                            |
| interferenceIntensity | `number` | `0.3`   | Fraction of rows with horizontal shifts or glitch distortions   |
| noiseIntensity        | `number` | `0.1`   | Strength of random noise layered on top                         |
| colorBleed            | `number` | `0.2`   | Amount of RGB misalignment to simulate VHS-style color bleeding |

# Pixelate

* **Name:** `pixelate`

Pixelates the image.

### Configuration

| Property  | Type     | Default | Description          |
| --------- | -------- | ------- | -------------------- |
| intensity | `number` | `8`     | Pixelation intensity |

# Blur

* **Name:** `blur`

Adds motion blur to the image.

### Configuration

| Property  | Type     | Default      | Description           |
| --------- | -------- | ------------ | --------------------- |
| direction | `string` | `horizontal` | Blur direction        |
| intensity | `number` | `5`          | Intensity of the blur |

# Borders

* **Name:** `borders`

Adds borders to the edges of the image.

### Configuration

| Property | Type     | Default     | Description        |
| -------- | -------- | ----------- | ------------------ |
| size     | `number` | `10`        | Size of the border |
| color    | `tuple`  | `[0, 0, 0]` | Border color (RGB) |
| opacity  | `number` | `1`         | Border opacity     |

# Brightness

* **Name:** `brightness`

Adjusts the brightness of the image, either lowering or increasing it.

### Configuration

| Property   | Type     | Default | Description                            |
| ---------- | -------- | ------- | -------------------------------------- |
| brightness | `number` | `10`    | A negative value will darken the image |

# Chromatic Aberration

* **Name:** `chromaticAberration`

Adds a chromatic aberration effect to the image.

### Configuration

| Property  | Type     | Default | Description                 |
| --------- | -------- | ------- | --------------------------- |
| intensity | `number` | `5`     | Amount of aberration to add |

# Dither

* **Name:** `dither`

Dithers the image.

### Configuration

| Property  | Type     | Default | Description                |
| --------- | -------- | ------- | -------------------------- |
| intensity | `number` | `0.5`   | Amount of dithering to add |

# Grayscale

* **Name:** `grayscale`

Adds a black and white effect to the image.

### Configuration

| Property  | Type     | Default | Description                                                   |
| --------- | -------- | ------- | ------------------------------------------------------------- |
| intensity | `number` | `1.0`   | `0` results in no change, `1` applies a full grayscale effect |

# Heatmap

* **Name:** `heatmap`

Adds a pseudo-heatmap effect to the image.

### Configuration

| Property      | Type     | Default | Description           |
| ------------- | -------- | ------- | --------------------- |
| intensity     | `number` | `0.8`   | Heatmap intensity     |
| controlPoints | `object` | `–`     | Custom control points |

# Hue Shift

* **Name:** `hueShift`

Hue shifts the image.

### Configuration

| Property | Type     | Default | Description                     |
| -------- | -------- | ------- | ------------------------------- |
| shift    | `number` | `180`   | Shifting in degrees (`0`–`360`) |

# Noise

* **Name:** `noise`

Adds noise to the image.

### Configuration

| Property  | Type     | Default           | Description            |
| --------- | -------- | ----------------- | ---------------------- |
| intensity | `number` | `10`              | Amount of noise to add |
| ratio     | `number` | `intensity / 100` | Ratio overriding       |

# Rainbow

* **Name:** `rainbow`

Adds random rainbow colors to the image.

# Rectangles

* **Name:** `rectangles`

Creates random clipped rectangles over the image.

### Configuration

| Property     | Type     | Default | Description                                    |
| ------------ | -------- | ------- | ---------------------------------------------- |
| offset       | `number` | `5`     | Random offset in `px`                          |
| intensity    | `number` | `10`    | Amount of rectangles to add                    |
| sizeModifier | `number` | `1`     | Size modifier of the rectangles                |
| invertChance | `number` | `0.15`  | Chance for a rectangle to have inverted colors |

# Scanlines

* **Name:** `scanlines`

Adds VHS-like scanlines to the image.

### Configuration

| Property  | Type     | Default | Description            |
| --------- | -------- | ------- | ---------------------- |
| opacity   | `number` | `0.5`   | Scanline opacity       |
| thickness | `number` | `1`     | Line thickness in `px` |
| lines     | `number` | `10`    | Amount of lines to add |

# Sharpen

* **Name:** `sharpen`

Attempts to sharpen the image.

# Solarize

* **Name:** `solarize`

Adds a solarization-like effect to the image.

### Configuration

| Property  | Type     | Default | Description      |
| --------- | -------- | ------- | ---------------- |
| intensity | `number` | `0.5`   | Effect intensity |

# Fractal Noise

* **Name:** `fractalNoise`

Adds a fractal noise effect to the image.

### Configuration

| Property    | Type     | Default | Description                                          |
| ----------- | -------- | ------- | ---------------------------------------------------- |
| octaves     | `number` | `4`     | Number of noise layers stacked to create the effect. |
| persistence | `number` | `0.5`   | Controls amplitude falloff per octave (layer).       |
| scale       | `number` | `4`     | Controls zoom level of the base noise.               |
| intensity   | `number` | `0.5`   | Blending strength of the noise effect.               |

# Wave Distort

* **Name:** `waveDistort`

Applies a sine wave-based distortion to the image, either horizontally or vertically.

### Configuration

| Property  | Type         | Default | Description                                                      |
| --------- | ------------ | ------- | ---------------------------------------------------------------- |
| amplitude | `number`     | `10`    | Height of the wave distortion                                    |
| frequency | `number`     | `0.05`  | Number of wave cycles per pixel unit                             |
| axis      | `'x' \| 'y'` | `'x'`   | Direction of the wave (`'x'` for horizontal, `'y'` for vertical) |

<!--- API END --->