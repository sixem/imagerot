const arrayPick = <T>(array: T[]): T =>
{
    return array[Math.floor(Math.random() * array.length)];
};

export {
    arrayPick
};
