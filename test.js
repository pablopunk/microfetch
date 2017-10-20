const test = require('ava')
const microfetch = require('.')
const isomorphicFetch = require('isomorphic-fetch')
const got = require('got')
const nodeFetch = require('node-fetch')

const insecureUrl = 'http://pablopunk.com/'
const secureUrl = 'https://pablo.life'

test('works with isomorphic-fetch', async t => {
  const f = microfetch(isomorphicFetch)
  const result = await f(insecureUrl)
  t.is(result.status, 200)
  t.true(/^https.*$/.test(result.url))
})

test('works with got', async t => {
  const f = microfetch(got)
  const result = await f(insecureUrl)
  t.is(result.statusCode, 200)
  t.true(/^https.*$/.test(result.url))
})

test('works with node-fetch', async t => {
  const f = microfetch(nodeFetch)
  const result = await f(insecureUrl)
  t.is(result.status, 200)
  t.true(/^https.*$/.test(result.url))
})

test('does not modify https', async t => {
  const f = microfetch(isomorphicFetch)
  const result = await f(secureUrl)
  t.true(result.ok)
  t.is(result.url, 'https://pablo.life')
})

test('thows error with null fetch', async t => {
  const err = t.throws(() => microfetch(null), TypeError)
  t.regex(err.message, /cannot be null/i)
})
