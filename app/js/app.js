import "../scss/style.scss";
import "../scss/header.scss";
import "../scss/sidenav.scss";
import "../scss/home.scss";
import "../scss/table.scss";
import "../scss/cart.scss";

angular.module("sshop", ["ngMaterial", "ngMessages", "ngRoute"]);
angular.module("sshop").controller("sshopCtrl", function ($scope) {
    
});

require("./config/routeConfig.js");

require("./controllers/headerCtrl.js");
require("./controllers/sidenavCtrl.js");
require("./controllers/homeCtrl.js");
require("./controllers/cartCtrl.js");

require("./services/sshopAPIService.js");
require("./services/cartService.js");

require("./factory/paginatorFactory.js")

require("./value/configValue.js");