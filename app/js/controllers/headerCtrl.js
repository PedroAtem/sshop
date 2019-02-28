angular.module("sshop").controller("headerCtrl", function ($scope, $rootScope, $mdSidenav) {

    $scope.toogleSidenav = function() {
        $rootScope.$emit("sshopToggleSidenav", {});
    }

    $scope.sidenavIsOpen = function() {
        return $mdSidenav('sshop-sidenav').isOpen() || false;
    }

    $scope.title = 'S-SHOP';

});