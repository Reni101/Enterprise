import { ResolveOptions } from 'webpack'
import { BuildOptions } from './types/types'

export const buildResolvers = ({ path }: BuildOptions): ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.src,
    },
  }
}
