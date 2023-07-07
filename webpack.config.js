const webpack = require('webpack');
const path = require('path');

module.exports = (_, argv) => {
    const isProduction = argv.mode === 'production';

    const output = {
        path: path.resolve(__dirname, 'dist'),
        library: 'imagerot',
        libraryTarget: 'umd',
        globalObject: 'this',
        umdNamedDefine: true
    };

    const config = {
        entry: './typescript/imagerot/browser/index.ts',
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
        },
        plugins: [
            new webpack.DefinePlugin({
                ENVIRONMENT: JSON.stringify('browser')
            })
        ]
    };

    const devConfig = {
        ...config,
        mode: 'development',
        optimization: {
            minimize: false
        },
        output: {
            filename: 'imagerot.js',
            ...output
        },
    };

    const prodConfig = {
        ...config,
        mode: 'production',
        output: {
            filename: 'imagerot.min.js',
            ...output
        },
    };

    return isProduction ? [devConfig, prodConfig] : devConfig;
};
