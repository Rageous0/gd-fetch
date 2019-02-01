### gd-fetch

#### How to install, setup and use gd-fetch?

1 - Install: `npm i gd-fetch` or `npm i gd-fetch@version`.

**Valid Versions: 0.0.1 • 0.0.2-BETA • 0.0.2 • 0.0.3-BETA**

2 - Require the library in your project:
```js
const gd = require('gd-fetch');
```

3 - Make use of the functions available for the version of the library you use, offers.



#### Documentation

**For old methods, goto [gd-fetch](https://rageous0.altervista.org/gd-fetch/0.0.2/)**

**New methods (functions) added:**


`fetchUser` - Takes one parameter. **(BETA)**

**id** - Id of the user you want to fetch data from.

Will get information as stars, coins etc. and social media like YouTube.


`getRole` - Takes two parameters.

**role** - Number of the role, to convert to text variant.

**ignoreErr** - Ignores minor errors and ignores executing code and logging issue to console.

Will convert role to string format, valid role numbers are 0, 1 and 2.


`diffString` - Takes an object of parameters. **(ALPHA)**

**obj** 

  • diff - Difficult integer to use.
  
  • type - Type to convert by, only used if diff is equal to 50 or to specify difficult Demon/Auto.
  
diff takes either Number 0, 10, 20, 30, 40, 50 or String "Demon", "Auto".
type takes either Number 1, 2, 3 or String "Demon", "Auto".
diff numbers equals to 0 - NA, 10 - Easy, 20 - Normal, 30 - Hard, 40 - Harder, 50 - Insane/Demon/Auto (type-dependant, or bypass it by using string).
type numbers is used if diff is equal to 50, can also specify difficults demon and auto and 1 is normal, 2 is demon and 3 is auto.
This does not support different types of demons, just value demon.

*For older versions documentation, head over to -> https://rageous0.altervista.org/{VERSION}/, and it should bring you to main page of docs*

Most recent version of gd-fetch is recommended as it features more important stuff than before.

• Bugfixes

• Three new methods - new ways to make use of the library



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

The README was last updated and written to the 1st of February (2019).
