# JS Square Code

### Leave your secrets here

#### By Maggie Saldivia **{Maggie-Mango}**

## Technologies Used
* HTML
* CSS
* Bootstrap
* JQuery
* JavaScript


## Description

User inputs a word or phrase and the program outputs an encoded message. If the normalized string's length happens to be a square number, the output will look like a square.

## Setup/Installation Requirements

* Clone this repository to your desktop.
* Navigate to the top level of the directory.
* Open cryptosqure/index.html in your browser.

## Tests

| Describe | Test | Expect |
|:--------:|:--------:|:--------:|
|`encode()`| "It will recognizes only letters in a string and normalize the string (remove spaces & lowercase)" | (encode("Hi there!")).toEqual(hithere)) |
|`encode()`| "It will recognize the length of a string and output an encoded message with equal rows and columns if the length is a square number" | (encode("four")).toEqual("fuor") |
|`encode()`| "If the string's length is not a square number, it will add " " until the string's length is a square number and output an encoded message" | (encode("air")).toEqual("ari ") |


## Known Bugs

* User will need to refresh form

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contact Information

maggiemail444@gmail.com