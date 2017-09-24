'use strict';

const url = require('url');
const prepend = require('prepend-url');

const microsecify = url => prepend(url, 'https://microsec.pw');

async function customFetch(urlToFetch, ...args) {
  const parsedUrl = url.parse(urlToFetch);
  if (parsedUrl.protocol === 'https:') {
    return this.fetch(urlToFetch, ...args);
  }
  return this.fetch(microsecify(parsedUrl));
}

const factory = fetch => {
  return customFetch.bind({ fetch });
};

module.exports = factory;
