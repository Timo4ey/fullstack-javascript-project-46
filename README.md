### Hexlet tests and linter status:

[![Actions Status](https://github.com/Timo4ey/fullstack-javascript-project-46/workflows/hexlet-check/badge.svg)](https://github.com/Timo4ey/fullstack-javascript-project-46/actions) [![Tests Status](https://github.com/Timo4ey/fullstack-javascript-project-46/actions/workflows/moduleTests.yml/badge.svg)](https://github.com/Timo4ey/fullstack-javascript-project-46/actions/workflows/moduleTests.yml) [![Test Coverage](https://api.codeclimate.com/v1/badges/730da5623bf2971d5e60/test_coverage)](https://codeclimate.com/github/Timo4ey/fullstack-javascript-project-46/test_coverage) [![Maintainability](https://api.codeclimate.com/v1/badges/730da5623bf2971d5e60/maintainability)](https://codeclimate.com/github/Timo4ey/fullstack-javascript-project-46/maintainability)
![Node version](https://img.shields.io/badge/NodeJs-v20.3.1_-yellow)

# Difference Calculator

A difference calculator is a program that determines the difference between two data structures. This is a popular task for which there are many online services, such as http://www.jsondiff.com/. A similar mechanism is used when outputting tests or when automatically tracking changes in configuration files.

## Setup

`make install && sudo npm link`

## Usage

### Stylish

`gendiff -f stylish filepath1 filepath2`

```
{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}
```

### Plain

`gendiff -f plain filepath1 filepath2`

```
roperty 'follow' was removed
Property 'proxy' was removed
Property 'timeout' was updated. From 50 to 20
Property 'verbose' was added with value: true
```
