const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    devtool: "none",
    entry: "./src/index.js",
    output: {
        filename: "main.[contentHash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html",
    })],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader",   // 3): Injects styles into dom
                    "css-loader",       // 2): Turns css into JS
                    "sass-loader"],     // 1): Turns sass into css
            },
        ],
    },
};