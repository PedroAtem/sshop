angular.module("sshop").controller("adminProductsCtrl", function($scope, sshopAPI, paginator, cart, $mdToast) {

    $scope.table_ready = false;
    $scope.adding_product = false;
    $scope.product = {
        name: "",
        description: "",
        price: 0
    }
    $scope.method = "POST";
    $scope.product_id = 0;
    $scope.products = [];
    
    $scope.getProducts = function() {
        sshopAPI.getProducts().then(
            function success(response) {
                $scope.products = response.data.sort((a, b) => a.id - b.id).map(product => {product.quantity = 1; return product});
                $scope.paginator = paginator.create($scope.products, 8);
                $scope.paginator.init();
                $scope.table_ready = true;
            },
            function error(response) {
                $scope.showToast("Não foi possível buscar os produtos");
                $scope.table_ready = true;
            }
        )
    }

    $scope.addProduct = function(product) {
        if ($scope.product.name === "") {
            return $scope.showToast("Insira o nome do produto");
        }
        if ($scope.product.description === "") {
            return $scope.showToast("Insira a descrição do produto");
        }
        if ($scope.product.price <= 0 || $scope.product.price === "") {
            return $scope.showToast("Insira o preço do produto");
        }
        $scope.adding_product = true;
        sshopAPI.postProduct($scope.product).then(
            function success(response) {
                $scope.showToast("Produto adicionado com sucesso");
                $scope.adding_product = false;
                $scope.getProducts();
            },
            function error(response) {
                $scope.showToast("Não foi possível adicionar produto");
                $scope.adding_product = false;
            }
        )
    }

    $scope.editProduct = function(product_id) {
        var product = $scope.products.filter(p => p.id === product_id);
        if (product) {
            product = product[0];
            $scope.method = "PUT";
            $scope.product.name = product.name;
            $scope.product.description = product.description;
            $scope.product.price = product.price;
            $scope.product_id = product_id;
        }
    }

    $scope.putProduct = function() {
        if ($scope.product.name === "") {
            return $scope.showToast("Insira o nome do produto");
        }
        if ($scope.product.description === "") {
            return $scope.showToast("Insira a descrição do produto");
        }
        if ($scope.product.price <= 0 || $scope.product.price === "") {
            return $scope.showToast("Insira o preço do produto");
        }
        sshopAPI.putProduct($scope.product_id, $scope.product).then(
            function success(response) {
                $scope.showToast("Produto atualizado com sucesso");
                $scope.cancelEdit();
                $scope.adding_product = false;
                $scope.getProducts();
            },
            function error(response) {
                $scope.showToast("Não foi possível atualizar o produto");
                $scope.adding_product = false;
            }
        )
    }

    $scope.cancelEdit = function() {
        $scope.method = "POST";
        $scope.product.name = "";
        $scope.product.description = "";
        $scope.product.price = 0;
        $scope.product_id = 0;
    }

    $scope.removeProduct = function(product_id) {
        sshopAPI.deleteProduct(product_id).then(
            function success(response) {
                $scope.showToast("Produto removido com sucesso");
                $scope.adding_product = false;
                $scope.getProducts();
            },
            function error(response) {
                $scope.showToast("Não foi possível remover o produto");
                $scope.adding_product = false;
            }
        )
    }

    $scope.showToast = function(message) {
        $mdToast.show(
            $mdToast.simple()
            .textContent(message)
            .position('bottom right')
            .hideDelay(3000)
        ).then(function() {}).catch(function() {});
    }

    $scope.getProducts();

});