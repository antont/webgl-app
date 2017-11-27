const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    // `vue-loader` options
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif|jpeg|svg|xml|json)$/,
                use: ['file-loader']
            },
            {
                //test: /examples/,
                include: [
                    path.join(__dirname, './node_modules/three/examples/js')
                ],
                use: ['imports-loader?THREE=three']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000,
        stats: "minimal"
    },
    resolve: {
        alias: {
            'three-examples': path.join(__dirname, './node_modules/three/examples/js'),
            'vue': 'vue/dist/vue.js'
        },
    }
};