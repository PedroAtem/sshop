require("../scss/style.scss");
require("../scss/header.scss");
require("../scss/sidenav.scss");
require("../scss/home.scss");
require("../scss/table.scss");
require("../scss/cart.scss");
require("../scss/product.scss");

angular.module("sshop", ["ngMaterial", "ngMessages", "ngRoute"]);
angular.module("sshop").controller("sshopCtrl", function ($scope) {
    
});

require("./config/routeConfig.js");

require("./controllers/headerCtrl.js");
require("./controllers/sidenavCtrl.js");
require("./controllers/homeCtrl.js");
require("./controllers/cartCtrl.js");
require("./controllers/admin/adminOrdersCtrl.js");
require("./controllers/admin/adminProductsCtrl.js");

require("./services/sshopAPIService.js");
require("./services/cartService.js");

require("./factory/paginatorFactory.js")

require("./value/configValue.js");