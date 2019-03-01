angular.module("sshop").controller("adminOrdersCtrl", function($scope, $q, sshopAPI, products, orders, paginator, $mdToast) {

    $scope.orders = orders.data.sort((a, b) => a.id - b.id)
    $scope.processOrders = function() {
        $scope.getUsers();
    }

    $scope.getUsers = function() {
        users_promises = []
        $scope.orders.forEach(order => {
            users_promises.push(sshopAPI.getUser(order.user_id));
        });
        $q.all(users_promises).then(
            function success(responses) {
                $scope.orders.forEach((order, index) => {
                    order.name = responses[index].data.name;
                })
                $scope.getItems();
            },
            function error(responses) {
                $mdToast.show($mdToast.simple().textContent("Erro ao buscar usuários das compras").position('bottom right').hideDelay(2000))
            }
        );
    }

    $scope.getItems = function() {
        items_promises = []
        $scope.orders.forEach(order => {
            items_promises.push(sshopAPI.getOrder(order.id));
        });
        $q.all(items_promises).then(
            function success(responses) {
                $scope.orders.forEach((order, index) => {
                    order.quantities = responses[index].data.items.map(item => item.amount);
                    order.products = responses[index].data.items.map(item => sshopAPI.getProduct(item.product_id));
                })
                $scope.getPrice();
            },
            function error(responses) {
                $mdToast.show($mdToast.simple().textContent("Erro ao buscar itens das compras").position('bottom right').hideDelay(2000))
            }
        );
    }

    $scope.getPrice = function() {
        var count = 0;
        $scope.orders.forEach(order => {
            if (order.products.length) {
                $q.all(order.products).then(
                    function success(responses) {
                        count++;
                        order.prices = [];
                        order.quantities.forEach((quantity, index) => {
                            order.prices.push(quantity * responses[index].data.price);
                        });
                        order.total_quantity = order.quantities.reduce((a, c) => a + c );
                        order.total_price = order.prices.reduce((a, c) => a + c );
                        if (count === $scope.orders.length) {
                            $scope.initPaginator();
                        }
                    },
                    function error(responses) {
                        count++;
                        if (count === $scope.orders.length) {
                            $scope.initPaginator();
                        }
                        $mdToast.show($mdToast.simple().textContent(`Erro ao buscar valores e quantidades das compras, motivo: ${responses.data.message}`)
                                .position('bottom right').hideDelay(2000))
                    }
                );
            } else {
                count++;
            }
        });
    }

    $scope.initPaginator = function() {
        $scope.paginator = paginator.create($scope.orders, 20);
        $scope.paginator.init();
    }

    $scope.processOrders();

});