// npm install readline-sync
const version = require('../package.json').version
const link = "https://github.com/RegioneLombardia/bootstrap-lombardia/"
const team = ["Enzo Ferri"]

const fs = require('fs')
const readlineSync = require('readline-sync')

let new_data
const fixes = []
const feats = []

const fileContent = fs.readFileSync('commits.txt', 'utf-8')
const lines = fileContent.split('\n');

for (const line of lines) {
  // 0=Hash 1=shortHash 2=author 3=tag 4=message (--pretty='%H|%hs|%an|%d|%s)
  const commit = line.split('|')
  // se trova commit relativo a precedente tag: rlx.x.x esce
  if (commit[3] != undefined && commit[3].includes('tag: rl')) {
    let prev_version = commit[3].replace(', origin/main, origin/HEAD','')
    prev_version = prev_version.slice(1,prev_version.indexOf(')'))
    new_data = printNewData(prev_version)
    break
  }
  // esclude commit non del team
  if (team.indexOf(commit[2]) < 0) {
    continue
  }
  // memorizza separatamente i commit relativi a fix e feat
  if (commit[4].includes('fix')) {
    fixes.push(commit)
  } else if (commit[4].includes('feat')) {
    feats.push(commit)
  }
}

// accoda il precedente CHANGELOG
const old_data = fs.readFileSync('CHANGELOG.md')
fs.writeFileSync('CHANGELOG.md', new_data.concat(old_data.toString()))


function printNewData (prev_version) {
  let currentDate = new Date().toISOString().split('T')[0]
  new_data = `# [rl${version}](${link}compare/rl${prev_version}...rl${version}) (${currentDate})\n\n`
  if (version.split('.')[2] > 0) {
      new_data = '#' + new_data
  }
  if (fixes.length > 0) {
    new_data = new_data.concat(`### BugFixes\n\n`)
    for (const fix of fixes) {
      new_data = new_data.concat(printMessage(fix))
    }
    new_data = new_data.concat('\n\n')
  }
  if (feats.length > 0) {
    new_data = new_data.concat(`### Features\n\n`)
    for (const feat of feats) {
      new_data = new_data.concat(printMessage(feat))
    }
    new_data = new_data.concat('\n\n')
  }
  return new_data
}

function printMessage(commit) {
  return `* ${commit[4].slice(commit[4].indexOf(':')+1).trim()} ([${commit[1]}](${link}commit/${commit[0]}))\n`
}
