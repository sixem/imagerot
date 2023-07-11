class OffscreenCanvasMock {
    constructor(width: number, height: number) {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        return canvas;
    }
};

// @ts-ignore: Unreachable code error
HTMLCanvasElement.prototype.convertToBlob = async function () {
    return new Blob();
};

export { OffscreenCanvasMock };
