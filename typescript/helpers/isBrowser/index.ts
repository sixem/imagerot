const isBrowser = () =>
{
    return typeof self !== 'undefined' || typeof window !== 'undefined';
};

export { isBrowser };
