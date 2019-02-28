angular.module("sshop").controller("productListCtrl", function($scope, products) {

    $scope.title = 'sdbfinsdf';
    $scope.products = products.data;
    $scope.products = $scope.products.sort((a, b) => a.id - b.id);

});