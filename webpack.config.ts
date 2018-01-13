import * as path from "path";
import * as webpack from "webpack";

const config: webpack.Configuration = {
    entry: "./src/index.ts",
    devServer: {
        contentBase: ".",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
};

export default config;
