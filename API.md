<h1 align="center">ImageRot API</h1>
<br/>
<p align="center">Details about the methods, effects, modes and properties provided by ImageRot</p>
<br/>

<!--- API BEGIN --->

# Common Methods
Contains details about the *common* methods shared between Node and the browser environment

## stage(`params`)
A utility method that loads image data from a provided `File`, `URL`, or `IRotData`.

### Returns
- Type: `Promise<IRotItem>`
- Resolves with an `IRotItem` object containing the loaded image data.

### Parameters
| Name    | Type        | Description                                      |
| ------- | ----------- | ------------------------------------------------ |
| params  | `{ data?: File \| IRotData, url?: string }` | An object containing either a `data` property (or a `url` property). |

## useEffect(`params`, `effect`, `options?`)
A utility method that applies one or more effects to image data.

### Returns
- Type: `Promise<IRotItem>`
- Resolves with an `IRotItem` object containing the transformed image data.

### Parameters
| Name    | Type        | Description                                     |
| ------- | ----------- | ----------------------------------------------- |
| params  | `IRotItem`  | The image data to transform.                    |
| effect  | `string` \| `string[]` | The effect or effects to apply.      |
| options | `TEffectOptions` | The options for the applied effect(s).     |

## useMode(`{params}`, `mode`)
A utility method that applies one or more modes (effects) to image data.

### Returns
- Type: `Promise<IRotItem>`
- Resolves with an `IRotItem` object containing the transformed image data.

### Parameters
| Name   | Type        | Description                                    |
| ------ | ----------- | ---------------------------------------------- |
| params | `IRotItem`  | The image data to transform.                   |
| mode   | `string` \| `string[]` | The mode or modes to apply.                |

## urlToBuffer(`url`)
A utility method that fetches an image from a URL and converts it into a buffer.

### Returns
- Type: `Promise<IRotData>`
- Resolves with a buffer representing the image data and its dimensions.

### Parameters
| Name | Type        | Description                       |
| ---- | ----------- | --------------------------------- |
| url  | `string`    | The URL of the image to convert.  |

## hsvToRgb(`h`, `s`, `v`)
A utility method that converts HSV (Hue, Saturation, Value) values to RGB (Red, Green, Blue) values.

### Returns
- Type: `Tuple<[number, number, number]>`    
- A tuple representing the RGB values as an array of three numbers: `[red, green, blue]`.

### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| h    | `number` | The hue value (ranging from 0 to 1) to convert to RGB. |
| s    | `number` | The saturation value (ranging from 0 to 1) to convert to RGB. |
| v    | `number` | The value/brightness value (ranging from 0 to 1) to convert to RGB. |

This utility method takes the HSV values and calculates the corresponding RGB values using the provided formulas. The resulting RGB values are returned as a tuple [red, green, blue].

## rgbToHsv(`r`, `g`, `b`)
A utility method that converts RGB (Red, Green, Blue) values to HSV (Hue, Saturation, Value) values.

### Returns
- Type: `Tuple<[number, number, number]>`
- A tuple representing the HSV values as an array of three numbers: `[hue, saturation, value]`.

### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| r    | `number` | The red value (ranging from 0 to 255) to convert to HSV. |
| g    | `number` | The green value (ranging from 0 to 255) to convert to HSV. |
| b    | `number` | The blue value (ranging from 0 to 255) to convert to HSV. |

## listModes()
* #### Returns: `Array` => `string[]`
Returns a list of the available modes

## listEffects()
* #### Returns: `Array` => `string[]`
Returns a list of the available effects

# Targeted Methods (Node)
Contains details about the methods exclusively exposed to the Node environment

## saveBuffer(`{params}`, `path`, `config?`)
A utility method that creates an image file from provided raw data.

### Returns
- Type: `Promise<void>`
- Resolves when the image has been successfully written to the provided path.

### Parameters
| Name    | Type                           | Description                                            |
| ------- | ------------------------------ | -------------------------------------------------------|
| params  | `IRotItem`                     | An object containing the image data, width, and height.|
| path    | `string`                       | The path where the image should be saved.              |
| config? | `TSaveBufferConf` \| `null`    | An optional configuration object for image creation.   |

The optional `config` parameter should be an object with the following properties:

| Name   | Type      | Description                                        |
| ------ | --------- | -------------------------------------------------- |
| mime   | `string`  | The MIME type of the image (default: `'image/png'`). |

## urlToBuffer(`url`)
A utility method that fetches an image from a URL and returns its data as a `Uint8Array` along with its width and height.

### Returns
- Type: `Promise<IRotData>`
- Resolves with a `IRotData` object containing the image data, width and height.

### Parameters
| Name   | Type       | Description                     |
| ------ | ---------- | ------------------------------- |
| url    | `string`   | The URL of the image to fetch.  |

## fileBufferToUint8Array(`buffer`)
A utility method that converts a file buffer into a `Uint8Array`.

### Returns
- Type: `Promise<Uint8Array>`
- Resolves with a `Uint8Array` containing the image data.

### Parameters
| Name    | Type        | Description                                      |
| ------- | ----------- | ------------------------------------------------ |
| buffer  | `Buffer` | A buffer containing the file data. |

# Targeted Methods (Browser)
Contains details about the methods exclusively exposed to the browser environment

## bufferToBlob(`{params}`)
A utility method that converts image buffer data into a Blob URL.

### Returns
- Type: `Promise<string>`
- Resolves with a Blob URL representing the image.

### Parameters
| Name    | Type        | Description                                            |
| ------- | ----------- | ------------------------------------------------------ |
| params  | `IRotItem`  | An object containing the image data, width, and height.|

## fileToBuffer(`file`)
A utility method that converts a File object into an image buffer.

### Returns
- Type: `Promise<IRotData>`
- Resolves with an object containing the image data buffer and the width and height of the image.

### Parameters
| Name    | Type        | Description                     |
| ------- | ----------- | ------------------------------- |
| file    | `File`      | The file to convert to a buffer.| 

# Types
Contains details about the different types that are used in this documentation

## Type: `IRotData`
An immutable tuple representing image data for processing.

### Structure
- Type: `Tuple<Uint8Array | null, number, number>`
The tuple has the following elements:

| Index | Type             | Description                                           |
| ----- | ---------------- | ----------------------------------------------------- |
| 0     | `Uint8Array` \| `null` | The raw image data in a typed array, or `null`. |
| 1     | `number`         | The width of the image.                               |
| 2     | `number`         | The height of the image.                              |

## Interface: `IRotItem`
An interface representing image data for processing.

### Structure
The interface has the following properties:

| Property | Type           | Description                       |
| -------- | -------------- | --------------------------------- |
| data     | `Uint8Array`   | The raw image data.               |
| width    | `number`       | The width of the image.           |
| height   | `number`       | The height of the image.          |

## Type: `TSaveBufferConf`
A type representing the configuration for saving a buffer.

### Structure
| Name | Type        | Description |
| ---- | ----------- | ----------- |
| mime | `string` | Optional. The MIME type of the image to save. Defaults to 'image/png'. |


<!--- API END --->