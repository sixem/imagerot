import { modes } from '../modes';

const rot = (input: any) =>
{
    console.log(typeof input);
    return 0;
};

const getModes = () =>
{
    return Object.keys(modes);
};

export {
    rot,
    getModes
};