## gd-fetch

#### How to install, setup and use gd-fetch?

1) Install:
`npm i gd-fetch` or `npm i gd-fetch@version`

2) Require the library in your project :
```js
const gd = require('gd-fetch');
```

3) Make use of the functions available for the version of the lib you use, offers.



#### Documentation

• `levelSearch` - Searches a level with specified data.

**Explanation:**

Function, takes an *object* of search parameters.

Executes query based on your data in the *query object*.

*promise:* true

**Example:**

```js
gd.levelSearch({ search: 'easy', page: 1 }).then(res => console.log(res)).catch(e => e);
/*
Will give an object like,
{ response: 1,
  message: null,
  page: 1,
  names:
   [ 'Easy ',
     'Easy Seas',
     'Easy Stereo Madness',
     'easy coins',
     'Easy ToE2',
     'Easy Back On Track',
     'Easy Deadlocked',
     'easy coins',
     'Easy Area 1 ',
     'easy and baad' ],
  ids:
   [ '490078',
     '34447420',
     '3943870',
     '12187891',
     '2867766',
     '4078954',
     '11177057',
     '11139611',
     '10998146',
     '482850' ],
  creatorids:
   [ '389329',
     '6649649',
     '1326499',
     '3615200',
     '2395280',
     '1326499',
     '8814334',
     '7487316',
     '2121048',
     '581645' ],
  diffs: [ '30', '10', '10', '20', '30', '10', '40', '20', '30', '30' ] }
*/
```

**Parameters (of object):**

*search* - String to search by - doesn't work while using type. **Type of:** `String`

*type* - Type to use in search - doesn't work while using search. **Type of:** `String`

  types:
  
  `search` - Works as most liked.
  
  `md` - Searches most downloads.
  
  `ml` - Searches most liked.
  
  `trending` - Searches trending.
  
  `recent` - Searches recent.
  
  `magic` - Searches magic.
  
  `awarded` - Searched awarded.
  
  `featured` - Searches featured.
  
  `hof` - Searches hall of fame.
  
*diff* - Difficult to search by. **Type of:** `String`

  difficults:
  
  `Easy`, `Normal`, `Hard`, `Harder`, `Insane`, `Demon`, `Easy Demon`, `Medium Demon`, `Hard Demon`, `Insane Demon`, `Extreme Demon` - All difficults that can be used in search.
  
*length* - Specified length to search by. **Type of:** `String`

  lengths:
  
  `tiny` - 0 - 10 seconds long.
  
  `short` - 11 - 30 seconds long.
  
  `medium` - 31 - 60 seconds (1 minute) long.
  
  `long` - 61 - 120 seconds (2 minutes) long.
  
  `xl` - 120+ seconds (2 minutes+) long.
  
*page* - Search specified page. **Type of:** `Number`

*feature* - Set filter to feature only. **Type of:** `<filter>Boolean`

*original* - Set filter to original only. **Type of:** `<filter>Boolean`

*twoPlayer* - Set filter to twoPlayer only. **Type of:** `<filter>Boolean`

*epic* - Set filter to epic only. **Type of:** `<filter>Boolean`

*coins* - Set filter to (verified/silver) coins only. **Type of:** `<filter>Boolean`

*songType* - Set type of song to search by. **Type of:** `Number`

  songTypes:
  
  `1` - Search by official song (1-21)
  
  `2` - Saerch by custom songs (from NewGrounds)
  
*song* - Song number or ID. **Type of:** `<id>Number`

  Specification:
  
  If **songType** is set to 1, you can only provide number 1-21 for songs.
  
  Else if **songType** is set to 2, you can provide a song ID (from NG) and it'll try to seach by it.
  


• `userSearch` - Searches users, will only give one result because Geometry Dash is weird.

**Explanation:**

Function, takes an *object* of search parameters.

Executes query based on your data in the *query object*.

*Promise:* true

**Example:**

```js
gd.userSearch({ search: 'Rageous', page: 1 }).then(res => console.log(res)).catch(e => e);
/*
Will give an object like,
{ response: 1, message: null, userid: 15462734 }
*/
```

**Parameters (of object):**

*search* - String to search by. **Type of:** `String`

*page* - Search specified page. **Type of:** `Number`



• `fetchLevel` - Takes an ID to fetch level data of.

**Explanation:**

Takes an parameter, *number* and uses it to find specific level by ID.

*promise:* true

**Example:**

```js
gd.fetchLevel(11940).then(res => console.log(res)).catch(e => e);
/*
Will give an object like,
{ resposne: 1,
  message: null,
  name: 'Level Easy',
  id: 11940,
  description: 'Cody',
  version: 1,
  gameVersion: 7,
  creatorID: 2565,
  difficult: 'Normal',
  demondiff: '-',
  isdemon: false,
  isauto: false,
  objects: 0,
  stars: 3,
  featurescore: 14,
  epic: 0,
  downloads: 34592898,
  likes: 2963872,
  length: '3',
  original: '0',
  passcode: -1,
  audioTrack: '0',
  songID: '0',
  coins: '0',
  verifiedcoins: '0',
  requestedstars: '0',
  uploaded: '5 years ago',
  updated: '5 years ago' }
*/
```

**Parameters:**

*id* - Used for fetching level, only supporting id!!! **Type of:** `<id>Number`



• `downloadLevel` - Takes an ID to fetch level data of.

**Explanation:**

Takes an parameter, *number* and uses it to find specific level by ID.

*promise:* true

**Example:**

```js
gd.downloadLevel(6508283).then(res => console.log(res)).catch(e => e);
/*
Will give an object like,
{ response: 1,
  message: null,
  data: 'H4sIAAAAAAAAC-y92c41OY4g9kJfHoR2CYm5aMN2YS49PVv3TWJ6xigD3WMM4DG8wA_viBC1hCQuoZPVXQVUour_M49IiqIokhIlxj_-rYk_6rfjN33-35z_t7_9on7zv6njOH4Lv6nflDt_VPH8I_6m_r81pEIh1aFPWO3cb0rlv3T-K__YSKRCQvUklLa_ZYRnh_q3C1DKnhVCyom-6N-goNqYeXAWBVd-AX6OzqyhteugGeG7vtPHBF...',
  file: '/root/something/proj/node_modules/gd-fetch/6508283.txt' }
*/
```

**Parameters:**

*id* - Used for getting level, only supporting id!!! **Type of:** `<id>Number`



• `encPassword` - XOR's specified string, generating "crypted" password for GD.

**Explanation:**

Function, takes a *string* and XOR's it with a key, so it can output a *gjp* (encoded password).

*Promise:* true

**Example:**

```js
gd.encPassword('abcfed246').then(res => console.log(res)).catch(e => e);
/*
Will give an object like,
{ response: 1, 
  message: null, 
  password: 'UlVWVFNXBQEE' }
```

**Parameters:**

*text* - Text to XOR as a gjp. **Type of:** `String`



• `accountRegister` - Makes an account.

**Explanation:**

Function, takes three strings were as one needs to be mail.

If provided an empty string in second parameter it will random generate an 8 character password.

Check the section for error codes, to get a better understanding handling rejections.

*promise:* true

**Example:**

```js
gd.accountRegister('HaNkOPq', 'mypassword28', 'mymail@fakedmailxd.com').then(res => console.log(res));
/*
Will give an object like,
{ response: 1,
  message: null,
  registered: true,
  username: 'HaNkOPq',
  email: 'mymail@fakedmailxd.com',
  password: 'mypassword28' }
*/
```

**Parameters:**

*name* - Username for the account *(cannot be used alredy, if used you'll get response -2)*. **Type of:** `String`

*pass* - Password for the account *(if empty it will random generate a 8 digit password, must be at least 6 digits *(if not meeting requirements an error is guaranteed)*. **Type of:** `String`

*mail* - Email for the account *(cannot be used else an error with response: -6 may occur)*. **Type of:** `<mail>String`



• `version` - Variable showing the current lib version.

**Explanation:**

A variable displaying current version (0.0.1).

*promise:* false

**Example:**

```js
console.log(gd.version); //Should output current lib version "0.0.1"
```


#### External sources and own sources

• [String | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

• [Object | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)

• [Number | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

• [Promise | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)


• `<mail>String` - String that must be validated as an mail, must contain at least one . and @ and cannot contain characters other than A-Z, a-z, 0-9, -, _.

• `<id>Number` - Must be an ID such as a level ID, song ID, user ID etc.

• `<filter>Boolean` - For levelSearch function, boolean used by filters e.g rated only, etc.

*In this case all parameters that goes by "Number" should be integers and contain no floating points. With that I mean they should be something like 75067 and not like 568.47.*



#### Error codes

`0` - Error response from this library itself, can be caused by unknown error or invalid form data.

`-1` - Server-sided (unknown (by me)), can be caused if the server denies the action or server returning nothing.

`-2` - Username taken, caused by username you try to use for your account is alredy in use.

`-4` - Invalid username, caused by username being invalid e.g too long or invalid characters such as dots, paranthesis etc.

`-6` - Invalid email / email alredy in use ( / Banned mail), caused my using an email alredy or not meeting certain criterias in use (or one banned from the GD servers).



#### Developer

**Rageous0**

• [Github](https://github.com/Rageous0)

• [npm](https://www.npmjs.com/~rageous)

• [Twitter](https://twitter.com/RageousGD)