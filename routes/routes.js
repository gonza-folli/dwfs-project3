const user = require('../modules/user');
const menus = require('../modules/menus')
const orders = require('../modules/orders')
const admin = require('../modules/admin')




module.exports = function (app) {
    app.use("/user", user)
    app.use("/menus", menus)
    app.use("/orders", orders)
    app.use("/admin", admin)
};

