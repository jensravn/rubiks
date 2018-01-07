import * as path from "path";
import * as webpack from "webpack";

const config: webpack.Configuration = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
};

export default config;
