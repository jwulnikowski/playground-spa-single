/* eslint-env node */
const webpack = require('webpack')
const path = require('path')
var fs = require('fs')
var mkdirp = require('mkdirp')

const fg = require('fast-glob')
var ncp = require('ncp').ncp
ncp.limit = 4

const regexFindNameWihtoutHash = /^([a-zA-Z/-]+)\w+/gm
const regexFindNameWithoutTwoFirstDir = /(projects\/)?(([^\/]*)\/){2}(.*)/gm
const manifestFile = 'build/sofe-mainfest.json'
const buildDest = './build/assets'

var content = fs.readFileSync(manifestFile)
var jsonContent = JSON.parse(content)

fg(['./*/build/**/*.js', './projects/*/build/**/*.js', '!node_modules']).then(
  (entries) => {
    entries.map(
      (entry) => {
        const basename = path.basename(entry)
        const nameOfModule = basename.match(regexFindNameWihtoutHash)[0]
        jsonContent.sofe.manifest[nameOfModule] = `./assets/${nameOfModule}/${basename}`
      }
    )
    fs.writeFile(manifestFile, JSON.stringify(jsonContent), console.log)
  }
)

fg(['./*/build/**', './projects/*/build/**/*.js',  '!node_modules']).then(
  (entries) => entries.map((entry) => {
    console.log('NEWFILE:', entry)
    while ((result = regexFindNameWithoutTwoFirstDir.exec(entry)) !== null) {
      console.log(result)
      const fileToCopy = result[4]
      console.log(fileToCopy)
      if (fileToCopy) {
        const newLocation = `${buildDest}/${fileToCopy}`
        mkdirp(path.dirname(newLocation))
        fs.copyFile(`./${entry}`, newLocation, console.log)
        console.log(entry, newLocation);
      }
    }

  })
)
// ncp('./*/build', './build', console.log)

