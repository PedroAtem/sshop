angular.module("sshop").controller("cartCtrl", function($scope, products, paginator, cart, $mdToast, $location) {;

    $scope.products = products.data.sort((a, b) => a.id - b.id).map(product => {product.quantity = 1; return product});
    $scope.paginator = paginator.create([], 8);
    $scope.getCart = function() {
        $scope.products_in_cart = [];
        $scope.cart = cart.getCart();
        Object.keys($scope.cart).forEach(product_id => {
            var product = $scope.products.filter(product => product_id == product.id);
            if (product.length) {
                product[0].quantity = $scope.cart[product_id];
            }
            $scope.products_in_cart.push(product[0]);
        });
        $scope.paginator.updateItems($scope.products_in_cart);
    }

    $scope.removeFromCart = function(product, index) {
        cart.removeProductFromCart(product);
        $scope.products_in_cart.splice(index, 1);
        $scope.paginator.updateItems($scope.products_in_cart);
    }

    $scope.getTotal = function() {
        var total = 0;
        $scope.products_in_cart.forEach(product => {
            total += product.price * product.quantity;
        });
        return total;
    }

    $scope.finalizePurchase = function() {
        $mdToast.show(
            $mdToast.simple()
            .textContent("Compra finalizada com sucesso!")
            .position('bottom right')
            .hideDelay(3000)
        ).then(function() {
            $location.path( "/home" );
        }).catch(function() {});
    }
    
    $scope.getCart();
    $scope.paginator.init();

});