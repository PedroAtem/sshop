angular.module("sshop").controller("sidenavCtrl", function ($scope, $rootScope, $mdSidenav) {

    $rootScope.$on("sshopToggleSidenav", function(){
        $scope.toggleSidenav();
    });

    $rootScope.$on("sshopToggleSidenavIsOpen", function(){
        return $mdSidenav('sshop-sidenav');
    });

    $scope.toggleSidenav = function() {
        $mdSidenav('sshop-sidenav').toggle();
    }

});