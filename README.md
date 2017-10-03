# microfetch

<p align="center">
  <a href="https://travis-ci.org/pablopunk/microfetch"><img src="https://img.shields.io/travis/pablopunk/microfetch.svg" /> </a>
  <a href="https://codecov.io/gh/pablopunk/microfetch"><img src="https://img.shields.io/codecov/c/github/pablopunk/microfetch.svg" /> </a>
  <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" /> </a>
  <a href="https://github.com/pablopunk/miny"><img src="https://img.shields.io/badge/made_with-miny-1eced8.svg" /> </a>
  <a href="https://www.npmjs.com/package/microfetch"><img src="http://img.shields.io/npm/dt/microfetch.svg" /></a>
</p>

<p align="center">
  <i>Use https every time you fetch</i>
</p>

See [pablopunk/microsec](github.com/pablopunk/microsec) to see the problem I'm trying to solve with this.


## Install

```sh
npm install microfetch
```


## Usage

Use any fetch module similar to `node-fetch` (see `test.js` for examples):

```js
const fetch = require('isomorphic-fetch')
const microfetch = require('microfetch')

const result = await microfetch(url)
```


## License

MIT. © 2017 Pablo Varela


## Author

| ![me](https://gravatar.com/avatar/fa50aeff0ddd6e63273a068b04353d9d?size=100) |
| ---------------------------------------------------------------------------- |
| [Pablo Varela](https://pablo.life)                                           |

