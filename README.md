# node-timestamp

[![Build Status](https://travis-ci.org/rockyliyanlok/node-timestamp.svg?branch=master)](https://travis-ci.org/rockyliyanlok/node-timestamp) [![Download Stats](https://img.shields.io/npm/dw/@rockyli/timestamp.svg)](https://github.com/rockyliyanlok/node-timestamp)

A lightweight Javascript library to convert between timestamp and datetime string.

## Installation

To install timestamp library, use [npm](http://github.com/npm/npm):

```
npm install @rockyli/timestamp
```

## Usage

```javascript
const timestamp = require('@rockyli/timestamp');

timestamp.current(); // return current timestamp in seconds
timestamp.current('ms'); // return current timestamp in milliseconds

timestamp.fromDatetimeString('2019-03-13', { format: 'YYYY-MM-DD' }); // return timestamp of 2019-03-13 00:00:00 in seconds
timestamp.fromDatetimeString('2019-03-13T12:34:00+08:00', { unit: 'ms' }); // return timestamp of 2019-03-13 12:34:00 in milliseconds

timestamp.toDatetimeString(1552406400); // return datetime string of 2019-03-13T00:00:00.000+08:00
timestamp.toDatetimeString(1552406400, { format: 'YYYY-MM-DD' }); // return datetime string of 2019-03-13
timestamp.toDatetimeString(1552406400, { format: 'HH:ss' }); // return datetime string of 00:00

random.integer(min = 0, max = 100); // generate integer from 0 to 100
random.number(min = 0, max = 100); // generate number from 0.0 to 100.0
random.boolean(); // true or false
random.bytes(len = 16); // generate cryptographically strong pseudo-random data
random.string(len = 16, type = 'alphanumeric', capitalization = 'lowercase'); // generate random string

```