import SystemJS from 'systemjs'
import lodash from 'lodash'
import * as singleSpa from 'single-spa'

window._ = lodash

SystemJS.config(window.sofeManifest)

// register sofe
registerDep('sofe', () => require('sofe'))

registerDep('lodash', () => require('lodash'))

// See https://rxjs-dev.firebaseapp.com/guide/v6/migration for Import Paths explanation
registerDep('rxjs', () => require('rxjs'))
registerDep('rxjs/operators', () => require('rxjs/operators'))

registerDep('single-spa', () => require('single-spa'))
registerDep('react', () => require('react'))
registerDep('react-dom', () => require('react-dom'))
registerDep('react-dom/server', () => require('react-dom/server'))

// A "requirer" is a function that requires a module. It is not called until
// a sofe service needs the dependency. This prevents the code from being executed
// unnecessarily during the critical initialization phase of the app
function registerDep(name, requirer) {
  SystemJS.registerDynamic(name, [], false, function(_r, _e, _m) {
    _m.exports = requirer()
  })
}
