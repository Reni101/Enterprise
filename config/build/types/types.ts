export type BuildMod = 'production' | 'development'
export type BuildPlatform = 'mobile' | 'desktop'

export interface BuildOptions {
  platform: BuildPlatform
  mode: BuildMod
  path: BuildPath
  isDev: boolean
  port: number
}

export interface BuildPath {
  entry: string
  build: string
  html: string
  src: string
  public: string
}

export interface BuildEnv {
  mode?: BuildMod
  port?: number
  platform?: BuildPlatform
}
