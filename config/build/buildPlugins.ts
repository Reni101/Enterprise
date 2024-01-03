import webpack, {DefinePlugin} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/types";
import Dotenv from 'dotenv-webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import path from "path";


export const buildPlugins = ({path:paths, isDev, platform}: BuildOptions): webpack.WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
            favicon:path.resolve(paths.public,'favicon.ico')
        }),
        isDev && new webpack.ProgressPlugin(),
        !isDev && new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            chunkFilename: 'css/[name].[contenthash].css'
        }),
        new Dotenv({
            systemvars: true,
        }),
        !isDev && new BundleAnalyzerPlugin(),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(platform),
        }),
        new ForkTsCheckerWebpackPlugin(),
        new ReactRefreshWebpackPlugin(),
        new webpack.DefinePlugin({
            __IS_DEV__:JSON.stringify(isDev)
        }),
        new webpack.HotModuleReplacementPlugin()
    ].filter(Boolean)
}