# breakdance-reflinks [![NPM version](https://img.shields.io/npm/v/breakdance-reflinks.svg?style=flat)](https://www.npmjs.com/package/breakdance-reflinks) [![NPM monthly downloads](https://img.shields.io/npm/dm/breakdance-reflinks.svg?style=flat)](https://npmjs.org/package/breakdance-reflinks)  [![NPM total downloads](https://img.shields.io/npm/dt/breakdance-reflinks.svg?style=flat)](https://npmjs.org/package/breakdance-reflinks) [![Linux Build Status](https://img.shields.io/travis/breakdance/breakdance-reflinks.svg?style=flat&label=Travis)](https://travis-ci.org/breakdance/breakdance-reflinks)

> Breakdance plugin that aggregates the urls from hrefs and src attributes at the bottom of the file as reference links.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save breakdance-reflinks
```

This is a plugin for [breakdance](http://breakdance.io), the HTML-to-markdown converter.

## What does this do?

Moves URLs to the bottom of the rendered markdown document, and replaces them with numbered "placeholder" reference links.

This has both advantages and disadvantages, depending on your needs.

* **advantage**: this can make the markdown more readable
* **disadvantage**: the downside is that the "placeholder" URLs are numbered, so it won't be immediately clear to readers what the actual URL is until they visit the corresponding reference link at the bottom of the document.

## Usage

Use breakdance's `.before` method to register the plugin.

```js
var Breakdance = require('breakdance');

// IMPORTANT! you must enable reflinks. You can do 
// that here or on the `.render` method
var breakdance = new Breakdance({reflinks: true});
var reflinks = require('breakdance-reflinks');

// this adds a 
breakdance.before('eos', reflinks());

// after registering the plugin, use the `.render` method
// to convert HTML to markdown
var markdown = breakdance.render(/* html string */);
console.log(markdown);
```

Visit the [breakdance documentation](http://breakdance.io) for more information about using and customizing breakdance.

## About

### Related projects

* [breakdance-checklist](https://www.npmjs.com/package/breakdance-checklist): Plugin that adds checklist rendering support to breakdance, similar to task lists in github-flavored-markdown. | [homepage](https://github.com/breakdance/breakdance-checklist "Plugin that adds checklist rendering support to breakdance, similar to task lists in github-flavored-markdown.")
* [breakdance-util](https://www.npmjs.com/package/breakdance-util): Utility functions for breakdance plugins. | [homepage](https://github.com/breakdance/breakdance-util "Utility functions for breakdance plugins.")
* [breakdance](https://www.npmjs.com/package/breakdance): Breakdance is a node.js library for converting HTML to markdown. Highly pluggable, flexible and easy… [more](http://breakdance.io) | [homepage](http://breakdance.io "Breakdance is a node.js library for converting HTML to markdown. Highly pluggable, flexible and easy to use. It's time for your markup to get down.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

Please read the [contributing guide](.github/contributing.md) for advice on opening issues, pull requests, and coding standards.

### Building docs

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2017, [Jon Schlinkert](https://github.com/jonschlinkert).
MIT

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.4.2, on February 15, 2017._