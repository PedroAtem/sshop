import '../scss/style.scss';
import '../scss/header.scss';
import '../scss/sidenav.scss';
import '../scss/productList.scss';
import '../scss/table.scss';

angular.module("sshop", ['ngMaterial', 'ngMessages', 'ngRoute']);
angular.module("sshop").controller("sshopCtrl", function ($scope) {
    
});

require('./config/routeConfig.js');

require('./controllers/headerCtrl.js');
require('./controllers/sidenavCtrl.js');
require('./controllers/productListCtrl.js');

require('./services/sshopAPIService.js');

require('./value/configValue.js')