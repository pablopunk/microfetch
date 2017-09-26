const test = require('ava')
const microfetch = require('..')
const isomorphicFetch = require('isomorphic-fetch')

const insecureUrl = 'http://pablopunk.com/'
const secureUrl = 'https://pablo.life'

test('Works with isomorphic-fetch', async t => {
  const f = microfetch(isomorphicFetch)
  const result = await f(insecureUrl)
  t.true(result.ok)
  t.true(/^https.*$/.test(result.url))
})

test("Don't modify https", async t => {
  const f = microfetch(isomorphicFetch)
  const result = await f(secureUrl)
  t.true(result.ok)
  t.is(result.url, 'https://pablo.life')
})
