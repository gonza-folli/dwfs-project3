const user = require('../modules/user');
const menus = require('../modules/menus')




module.exports = function (app) {
    app.use("/user", user)
    app.use("/menus", menus)
};

