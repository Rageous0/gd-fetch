'use strict';

//Total 10

//Search (2)
module.exports.levelSearch = require("./levelSearch.js");
module.exports.userSearch = require("./userSearch.js");

//Fetch (3)
module.exports.fetchLevel = require("./fetchLevel.js");
module.exports.downloadLevel = require("./downloadLevel.js");
module.exports.fetchUser = require("./fetchUser.js");

//Account (2)
module.exports.encPassword = require("./password.js");
module.exports.accountRegister = require("./register.js");

//Converting (2)
module.exports.diffString = require("./diffString.js"); /* BETA */
module.exports.getRole = require("./getRole.js");

//Debug (1)
module.exports.version = "0.0.3-BETA";

//Last updated v0.0.3-BETA

/*
~ This version comes with bugfixes
~ Performance improvements
~ Better base information
*/