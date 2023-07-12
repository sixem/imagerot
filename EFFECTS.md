<h1 align="center">ImageRot Effects</h1>
<br/>
<p align="center">Details about the native effects provided by ImageRot</p>
<p align="center">All of these effects are available for testing in the <a href="https://five.sh/imagerot/">Web UI</a></p>

### What are effects?
Effects are like image filters. You can chain them together for unique results, or you can apply them single-handedly.

<br/>

<!--- API BEGIN --->

# Degrade
- **Name:** `degrade`

Adds JPEG artifacts to the image.
### Configuration
| Property | Type           | Default         | Description         |
| -------- | -------------- | ------------------- | ------------------- |
| quality | `number` | 0.075  | JPEG quality (a lower value equals more artifacts) |

# Pixelate
- **Name:** `pixelate`

Pixelates the image.
### Configuration
| Property | Type           | Default         | Description         |
| -------- | -------------- | ------------------- | ------------------- |
| intensity | `number` | 8 | Pixelation intensity |

# Blur
- **Name:** `blur`

Adds motion blur to the image.
### Configuration
| Property | Type           | Default         | Description         |
| -------- | -------------- | ------------------- | ------------------- |
| direction | `string` | `horizontal` | Blur direction |
| intensity | `number` | 5 | Intensity of the blur |

# Borders
- **Name:** `borders`

Adds borders to the edges of the image.
### Configuration
| Property | Type           | Default         | Description         |
| -------- | -------------- | ------------------- | ------------------- |
| size | `number`   | 10  | Size of the border  |
| color | `tuple`   | `[0, 0, 0]`  | Border color (RGB)  |
| opacity | `number` | 1 | Border opacity (transparency) |

# Brightness
- **Name:** `brightness`

Adjusts the brightness of the image, either lowering or increasing it.
### Configuration
| Property | Type           | Default         | Description         |
| -------- | -------------- | ------------------- | ------------------- |
| brightness | `number` | 10 | A negative value will darken the image |

# Chromatic Aberration
- **Name:** `chromaticAberration`

Adds a chromatic aberration effect to the image.
### Configuration
| Property | Type           | Default         | Description         |
| -------- | -------------- | ------------------- | ------------------- |
| intensity | `number` | 5 | Amount of aberration to add |

# Dither
- **Name:** `dither`

Dithers the image.
### Configuration
| Property | Type           | Default         | Description         |
| -------- | -------------- | ------------------- | ------------------- |
| intensity | `number` | 0.5 | Amount of dithering to add |

# Grayscale
- **Name:** `grayscale`

Adds a black and white effect to the image.
### Configuration
| Property | Type           | Default         | Description         |
| -------- | -------------- | ------------------- | ------------------- |
| intensity | `number` | 1.0 | A value of `0` will result in no change while `1` will have a full grayscale effect |

# Heatmap
- **Name:** `heatmap`

Adds a pseudo-heatmap effect to the image.
### Configuration
| Property | Type           | Default         | Description         |
| -------- | -------------- | ------------------- | ------------------- |
| intensity | `number` | 0.8 | Heatmap intensity |
| controlPoints | `object` | \- | Custom control points |

# Hue Shift
- **Name:** `hueShift`

Hue shifts the image.
### Configuration
| Property | Type           | Default         | Description         |
| -------- | -------------- | ------------------- | ------------------- |
| shift | `number` | 180 | Shifting in degrees (`0` - `360`) |

# Noise
- **Name:** `noise`

Adds noise to the image.
### Configuration
| Property | Type           | Default         | Description         |
| -------- | -------------- | ------------------- | ------------------- |
| intensity | `number` | 10 | Amount of noise to add |
| ratio | `number` | `intensity / 100` | Ratio overriding |

# Rainbow
- **Name:** `rainbow`

Adds random rainbow colors to the image.

# Rectangles
- **Name:** `rectangles`

Creates random clipped rectangles over the image.
### Configuration
| Property | Type           | Default         | Description         |
| -------- | -------------- | ------------------- | ------------------- |
| offset | `number` | 5 | Random offset in `px` |
| intensity | `number` | 10 | Amount of rectangles to add |
| sizeModifier | `number` | 1 | Size modifier of the rectangles |
| invertChance | `number` | 0.15 | Chance for a rectangle to have inverted colors |

# Scanlines
- **Name:** `scanlines`

Adds VHS-like scanlines to the image.
### Configuration
| Property | Type           | Default         | Description         |
| -------- | -------------- | ------------------- | ------------------- |
| opacity | `number` | 0.5 | Scanline opacity |
| thickness | `number` | 1 | Line thickness in `px` |
| lines | `number` | 10 | Amount of lines to add |

# Sharpen
- **Name:** `sharpen`

Attempts to sharpen the image.

# Solarize
- **Name:** `solarize`

Adds a solarization-like effect to the image.
### Configuration
| Property | Type           | Default         | Description         |
| -------- | -------------- | ------------------- | ------------------- |
| intensity | `number` | 0.5 | Effect intensity |

<!--- API END --->