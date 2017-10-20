'use strict'

const { parse } = require('url')
const prepend = require('prepend-url')

const securify = url => prepend(url, 'https://microsec.pw')

async function customFetch (urlToFetch, ...args) {
  const parsedUrl = parse(urlToFetch)
  if (parsedUrl.protocol === 'https:') {
    return this.fetch(urlToFetch, ...args)
  }
  return this.fetch(securify(parsedUrl), ...args)
}

const factory = fetch => {
  if (fetch === null) {
    throw TypeError('Fetching function cannot be null')
  }
  return customFetch.bind({ fetch })
}

module.exports = factory
