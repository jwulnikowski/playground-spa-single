export function prefix(location, ...prefixes) {
  return prefixes.some(
    prefix => (
      location.href.indexOf(`${location.origin}/${prefix}`) !== -1
    )
  )
}

export function navbar(location) {
  return true
}

export function people(location) {
  console.log(prefix(location, 'people'));
  return prefix(location, 'people')
}

export function planets(location) {
  console.log(prefix(location, 'planets'));
  return prefix(location, 'planets')
}
