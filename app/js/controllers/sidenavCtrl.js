angular.module("sshop").controller("sidenavCtrl", function ($scope, $rootScope, $mdSidenav, $location, $routeParams) {

    $rootScope.$on("sshopToggleSidenav", function(){
        $scope.toggleSidenav();
    });

    $rootScope.$on("sshopToggleSidenavIsOpen", function(){
        return $mdSidenav('sshop-sidenav');
    });

    $scope.sidenavIsOpen = function() {
        return $mdSidenav('sshop-sidenav').isOpen() || false;
    }

    $scope.toggleSidenav = function() {
        $mdSidenav('sshop-sidenav').toggle();
    }

});