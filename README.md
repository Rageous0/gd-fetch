## gd-fetch

#### How to install, setup and use gd-fetch?

1 - Install: `npm i gd-fetch` or `npm i gd-fetch@version`.

**Valid Versions: 0.0.1 • 0.0.2-BETA • 0.0.2**

2 - Require the library in your project:
```js
const gd = require('gd-fetch');
```

3 - Make use of the functions available for the version of the library you use, offers.



#### Documentation

**As of the actual release of 0.0.2 (with a small addition and some bugfixes to the validators) the documentation has been moved to - [gd-fetch](https://rageous0.altervista.org/gd-fetch/0.0.2/).**

*For version 0.0.1 documentation you may refer to [gd-fetch (deprecated)](https://rageous0.altervista.org/gd-fetch/0.0.1/)*

Most recent version of gd-fetch is recommended as it features more important stuff than before.

• Bugfixes

• Issues of checkers fixed

• Added an "israted" value to the fetchLevel function response, this will be true if stars is more than 0.

• New documentation


#### External sources and own sources

• [String | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

• [Object | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)

• [Number | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

• [Promise | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

• [Function | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

*Another source you may refer to, can be w3schools.*


#### Error codes (registering accounts or common errors in general)

`0` - Error response from this library itself, can be caused by unknown error or invalid form data. **GENERAL**

`-1` - Server-sided (unknown), can be caused if the server denies the action or server returning nothing. **GENERAL**

`-2` - Username taken, caused by username you try to use for your account is alredy in use.

`-4` - Invalid username, caused by username being invalid e.g too long or invalid characters such as dots, paranthesis etc.

`-6` - Invalid email / email alredy in use ( / Banned mail), caused my using an email alredy or not meeting certain criterias in use (or one banned from the GD servers).



#### Developer

**Rageous0**

• [Website](https://rageous0.altervista.org)

• [gd-fetch](https://rageous0.altervista.org/gd-fetch/0.0.2/)

• [Github](https://github.com/Rageous0)

• [npm](https://www.npmjs.com/~rageous)

• [Twitter](https://twitter.com/RageousGD)


#### Up to date since?

The README was last updated and written to the 26th of January (2019).