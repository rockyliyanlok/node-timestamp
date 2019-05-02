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

timestamp.fromDate(new Date()); // return current timestamp in seconds
timestamp.fromDate(new Date(), { unit: 'ms' }); // return current timestamp in seconds

timestamp.fromDatetimeString('2019-03-13', { format: 'YYYY-MM-DD' }); // return timestamp of 2019-03-13 00:00:00 in seconds
timestamp.fromDatetimeString('2019-03-13T12:34:00+08:00', { unit: 'ms' }); // return timestamp of 2019-03-13 12:34:00 in milliseconds

timestamp.toDate(1556766507); // return Date object of 2019-05-02T11:08:27.000+08:00

timestamp.toDatetimeString(1552406400); // return datetime string of 2019-03-13T00:00:00.000+08:00
timestamp.toDatetimeString(1552406400, { format: 'YYYY-MM-DD' }); // return datetime string of 2019-03-13
timestamp.toDatetimeString(1552406400, { format: 'HH:ss' }); // return datetime string of 00:00

```

## API

- `current(unit)`
  - `unit` - current timestamp unit. (default: 's') [OPTIONAL]
 
- `fromDate(date, options)`
  - `date` - datet object to convert
  - `options.unit` - datetime string unit. (default: 's') [OPTIONAL]

- `fromDatetimeString(datetimeString, options)`
  - `datetimeString` - datetime string to convert
  - `options.format` - datetime string format. (default: 'YYYY-MM-DDTHH:mm:ss.SSSZ') [OPTIONAL]
  - `options.timezone` - datetime string timezone. (default: 'Asia/Shanghai') [OPTIONAL]
  - `options.unit` - datetime string unit. (default: 's') [OPTIONAL]
 
- `toDate(timestamp, options)`
  - `timestamp` - timestamp to convert
  - `options.unit` - datetime string unit. (default: 's') [OPTIONAL]

- `toDatetimeString(timestamp, options)`
  - `timestamp` - timestamp to convert 
  - `options.format` - datetime string format. (default: 'YYYY-MM-DDTHH:mm:ss.SSSZ') [OPTIONAL]
  - `options.timezone` - datetime string timezone. (default: 'Asia/Shanghai') [OPTIONAL]
  - `options.unit` - datetime string unit. (default: 's') [OPTIONAL]
 

## Tests

```
npm install
npm run test
```

## LICENSE

node-timestamp is licensed under the MIT license.
