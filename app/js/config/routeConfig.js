angular.module("sshop").config(function ($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl: "app/partials/home.html",
        controller: "homeCtrl",
        resolve: {
            products: function (sshopAPI) {
                return sshopAPI.getProducts();
            }
        }
    })
    .when("/cart", {
        templateUrl: "app/partials/cart.html",
        controller: "cartCtrl",
        resolve: {
            products: function (sshopAPI) {
                return sshopAPI.getProducts();
            }
        }
    })
    .when("/admin/products", {
        templateUrl: "app/partials/admin/adminProducts.html",
        controller: "adminProductsCtrl",
        resolve: {
            products: function (sshopAPI) {
                return sshopAPI.getProducts();
            }
        }
    })
    .when("/admin/orders", {
        templateUrl: "app/partials/admin/adminOrders.html",
        controller: "adminOrdersCtrl",
        resolve: {
            products: function (sshopAPI) {
                return sshopAPI.getProducts();
            },
            orders: function (sshopAPI) {
                return sshopAPI.getOrders();
            }
        }
    })
    .otherwise({
        templateUrl: "app/partials/home.html",
        controller: "homeCtrl",
        resolve: {
            products: function (sshopAPI) {
                return sshopAPI.getProducts();
            }
        }
    })
});