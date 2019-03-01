angular.module("sshop").controller("homeCtrl", function($scope, products, paginator, cart, $mdToast) {

    $scope.table_ready = true;
    $scope.products = products.data.sort((a, b) => a.id - b.id).map(product => {product.quantity = 1; return product});
    $scope.paginator = paginator.create($scope.products, 8);
    $scope.paginator.init();

    $scope.addToCart = function(product) {
        cart.addProductToCart(product);
        product.quantity = 1;
        $scope.showToast("Produto adicionado");
    }

    $scope.showToast = function(message) {
        $mdToast.show(
            $mdToast.simple()
            .textContent(message)
            .position('bottom right')
            .hideDelay(3000)
        ).then(function() {}).catch(function() {});
    }

});