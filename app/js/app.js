import '../scss/style.scss';
import '../scss/header.scss';
import '../scss/sidenav.scss';

angular.module("sshop", ['ngMaterial', 'ngMessages']);
angular.module("sshop").controller("sshopCtrl", function ($scope) {
    
});

require('./controllers/headerCtrl.js');
require('./controllers/sidenavCtrl.js');