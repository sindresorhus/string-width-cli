# string-width-cli

> Get the visual width of a string - the number of columns required to display it

Some Unicode characters are [fullwidth](https://en.wikipedia.org/wiki/Halfwidth_and_fullwidth_forms) and use double the normal width.

Useful to be able to measure the actual width of command-line output.


## Install

```
$ npm install --global string-width-cli
```


## Usage

```
$ string-width --help

  Usage
    $ string-width <text>

  Example
    $ string-width a古
    3
```


## Related

- [string-width](https://github.com/sindresorhus/string-width) - API for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
