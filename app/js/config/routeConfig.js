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