import webpack from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { BuildEnv, BuildMod, BuildPath } from './config/build/types/types'
import path from 'path'

export default (env: BuildEnv): webpack.Configuration => {
  const buildPath: BuildPath = {
    entry: path.resolve(__dirname, 'src/app/index.tsx'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public/index.html'),
    src: path.resolve(__dirname, 'src'),
    public: path.resolve(__dirname, 'public'),
  }

  const mode: BuildMod = env.mode ?? 'development'
  const PORT = env.port ?? 3000
  const platform = env.platform ?? 'desktop'
  const isDev: boolean = mode === 'development'

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    isDev,
    path: buildPath,
    port: PORT,
    platform,
  })

  return config
}
