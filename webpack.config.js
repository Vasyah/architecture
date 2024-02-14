
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
    mode: process.env.MODE,
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
        client: {

            progress: true,
        }
    },
    resolve: {
        extensions: [
            '.tsx',
            '.ts',
            '.js'
        ]
    },
    plugins: [	// плагин для создания html файла с подключенными скриптами
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
        }), new webpack.DefinePlugin({
            __IS_DEV__: process.env.MODE,
        })],

};

module.exports = { ...config, stats: { children: true } };