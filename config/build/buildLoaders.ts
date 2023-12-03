import webpack from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshTypeScript from 'react-refresh-typescript'
import {BuildOptions} from "./types/types";

export const buildLoaders = ({isDev}: BuildOptions): webpack.RuleSetRule[] => {

    const tsLoader = {
        test: /\.tsx?$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    getCustomTransformers: () => ({
                        before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                    }),
                }
            }
        ],
        exclude: /node_modules/,
    }

    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }
    // Svg Loader
    // const svgLoader = {
    //     test: /\.svg$/i,
    //     issuer: /\.[jt]sx?$/,
    //     use: [{loader: '@svgr/webpack', options: {icon: true}}],
    // }

    const sassLoader = {
        test: /\.(s[ac]ss|css)$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => !!resPath.includes('.module'),
                        localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
                    },

                }
            },
            "sass-loader",

        ],
    }

    return [tsLoader, sassLoader, assetLoader]
}