'use strict'

const { parse } = require('url')
const prepend = require('prepend-url')

const microsecify = url => prepend(url, 'https://microsec.pw')

async function customFetch (urlToFetch, ...args) {
  const parsedUrl = parse(urlToFetch)
  if (parsedUrl.protocol === 'https:') {
    return this.fetch(urlToFetch, ...args)
  }
  return this.fetch(microsecify(parsedUrl), ...args)
}

const factory = fetch => {
  return customFetch.bind({ fetch })
}

module.exports = factory
