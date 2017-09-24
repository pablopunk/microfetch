# microfetch

[![build status](https://img.shields.io/travis/pablopunk/microfetch.svg)](https://travis-ci.org/pablopunk/microfetch)
[![code coverage](https://img.shields.io/codecov/c/github/pablopunk/microfetch.svg)](https://codecov.io/gh/pablopunk/microfetch)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![license](https://img.shields.io/github/license/pablopunk/microfetch.svg)](<>)

> Use https every time you fetch

See [github.com/pablopunk/microsec](https://github.com/pablopunk/microsec) to see the problem I'm trying to solve with this.


## Install

```sh
npm install microfetch
```


## Usage

```js
// use any fetch module similar to `fetch`
const fetch = require('isomorphic-fetch')
const microfetch = require('microfetch')(fetch)

const result = await microfetch(url)
```


## Author

| ![me](https://www.gravatar.com/avatar/fa50aeff0ddd6e63273a068b04353d9d?s=100) |
| ----------------------------------------------------------------------------- |
| © 2017 [Pablo Varela](http://pablo.life)                                      |


## License

[MIT](LICENSE) © [Pablo Varela](https://pablo.life)


## Contributors

| Name             | Website              |
| ---------------- | -------------------- |
| **Pablo Varela** | <https://pablo.life> |
