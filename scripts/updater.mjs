import yaml from 'yaml'
import { readFileSync, writeFileSync } from 'fs'
import { getProcessedVersion, isDevBuild, getDownloadUrl, generateDownloadLinksMarkdown } from './version-utils.mjs'

const pkg = readFileSync('package.json', 'utf-8')
let changelog = readFileSync('changelog.md', 'utf-8')
const { version } = JSON.parse(pkg)
const downloadUrl = `https://github.com/ClokMuch/mihomo-party/releases/download/v${version}`
const { version: packageVersion } = JSON.parse(pkg)

// 获取处理后的版本号
const version = getProcessedVersion()
const isDev = isDevBuild()
const downloadUrl = getDownloadUrl(isDev, version)

const latest = {
  version,
  changelog
}

// 使用统一的下载链接生成函数
changelog += generateDownloadLinksMarkdown(downloadUrl, version)


writeFileSync('latest.yml', yaml.stringify(latest))
writeFileSync('changelog.md', changelog)
