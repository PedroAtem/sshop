angular.module("sshop").controller("cartCtrl", function($scope, sshopAPI, products, paginator, cart, $mdToast, $location) {;

    $scope.user = {
        name: ""
    }
    $scope.table_ready = false;
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
        $scope.table_ready = true;
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
        if ($scope.products_in_cart.length === 0) {
            return $mdToast.show($mdToast.simple().textContent("Não há items no seu carrinho de compras").position('bottom right').hideDelay(2000))
        }
        if ($scope.user.name === "") {
            return $mdToast.show($mdToast.simple().textContent("Por favor, informe um nome").position('bottom right').hideDelay(2000))
        }

        $mdToast.show($mdToast.simple().textContent("Processando pedido...").position('bottom right').hideDelay(2000))
        sshopAPI.postUser($scope.user)
        .then(
            function succes(response) {
                var user = response.data;
                var products = $scope.products_in_cart.map(product => {
                    return {
                        product_id: product.id,
                        amount: product.quantity
                    }
                });
                sshopAPI.postOrder({
                    user_id: user.id,
                    items: products
                }).then(
                    function success(response) {
                        $mdToast.show($mdToast.simple().textContent("Compra finalizada com sucesso").position('bottom right').hideDelay(2000)).then(function() {
                            cart.clearItems();
                            $location.path( "/home" );
                        }).catch(function() {});
                    },
                    function error(response) {
                        $mdToast.show($mdToast.simple().textContent("Erro ao finalizar compra").position('bottom right').hideDelay(2000))
                    }
                );
            },
            function error(response) {
                $mdToast.show($mdToast.simple().textContent("Erro ao inserir usuário").position('bottom right').hideDelay(2000))
            }
        )
    }
    
    $scope.getCart();
    $scope.paginator.init();

});