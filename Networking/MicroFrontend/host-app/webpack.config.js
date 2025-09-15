const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        publicPath: 'auto',
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
        hot: true,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'host',
            remotes: {
                cart: 'cart@http://localhost:3001/remoteEntry.js',
            },
            shared: {
                "react": {
                    singleton: true,
                    requiredVersion: '^18.0.0',
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: '^18.0.0',
                },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
};
