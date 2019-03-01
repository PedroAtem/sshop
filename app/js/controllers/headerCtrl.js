angular.module("sshop").controller("headerCtrl", function ($scope, $rootScope, $mdSidenav) {

    $scope.toogleSidenav = function() {
        $rootScope.$emit("sshopToggleSidenav", {});
    }

    $scope.sidenavIsOpen = function() {
        return $mdSidenav('sshop-sidenav').isOpen() || false;
    }

    $scope.openMenu = function($mdMenu, ev) {
        originatorEv = ev;
        $mdMenu.open(ev);
    };

    $scope.title = 'S-SHOP';

});