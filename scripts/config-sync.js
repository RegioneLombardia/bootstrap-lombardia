const replace = require('replace-in-file')

const configYmlPath = '_config.yml'
const jsPath = 'src/js/version.js'
const scssPath = 'src/scss/custom-lombardia/_version.scss'
// package.json is updated by `npm version major/minor/patch` or similar
const version = require('../package.json').version

const configYmlOptions = {
  files: configYmlPath,
  from: /current_version:.+/gi,
  to: `current_version:\t\t${version}`,
}

const configJsOptions = {
  files: jsPath,
  from: /BOOTSTRAP_LOMBARDIA_VERSION = .+/gi,
  to: `BOOTSTRAP_LOMBARDIA_VERSION = '${version}'`,
}

const configScssOptions = {
  files: scssPath,
  from: /bootstrap-lombardia-version:.+/gi,
  to: `bootstrap-lombardia-version: '${version}';`,
}

const replaceInFile = (config) => {
  return replace.sync(config).map((el) => el.file)
}

try {
  let changedFiles = replaceInFile(configYmlOptions)
  changedFiles = changedFiles.concat(replaceInFile(configJsOptions))
  changedFiles = changedFiles.concat(replaceInFile(configScssOptions))
  console.info('Modified files:', changedFiles.join(', '))
} catch (error) {
  console.error(e)
  process.exit(1)
}
