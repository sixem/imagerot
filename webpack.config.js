const path = require('path');

module.exports = {
    entry: './typescript/imagerot/browser/index.ts',
    output: {
        filename: 'imagerot.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'imagerot',
        libraryTarget: 'umd',
        globalObject: 'this',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: [
                    '/node_modules/',
                    '/typescript/imagerot/node/**/*'
                ]
            },
        ],
    }
};
