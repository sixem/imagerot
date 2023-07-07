const removeAlphaChannel = (data: Uint8Array) =>
{
    for(let i = 0; i < data.length; i += 4) {
        data[i + 3] = 255;
    }

    return data;
};

export { removeAlphaChannel };
