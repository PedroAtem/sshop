angular.module("sshop").controller("homeCtrl", function($scope, products, paginator) {

    $scope.products = products.data.sort((a, b) => a.id - b.id).map(product => {product.quantity = 1; return product});
    $scope.paginator = paginator.create($scope.products, 8);
    
    $scope.paginator.init();

    $scope.addToCart = function(product) {
        console.log(product);
    }

});