import yaml from 'yaml'
import { readFileSync, writeFileSync } from 'fs'

const pkg = readFileSync('package.json', 'utf-8')
let changelog = readFileSync('changelog.md', 'utf-8')
const { version } = JSON.parse(pkg)
const downloadUrl = `https://github.com/ClokMuch/mihomo-party/releases/download/v${version}`
const latest = {
  version,
  changelog
}

changelog += '\n### 下载地址：\n\n#### Windows10/11：\n\n'
changelog += `- 便携版：[64位](${downloadUrl}/mihomo-party-windows-${version}-x64-portable.7z) | [32位](${downloadUrl}/mihomo-party-windows-${version}-ia32-portable.7z) | [ARM64](${downloadUrl}/mihomo-party-windows-${version}-arm64-portable.7z)\n\n`

writeFileSync('latest.yml', yaml.stringify(latest))
writeFileSync('changelog.md', changelog)
