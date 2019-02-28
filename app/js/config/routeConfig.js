angular.module("sshop").config(function ($routeProvider) {
    $routeProvider
    .when("/product-list", {
        templateUrl: "app/partials/productList.html",
        controller: "productListCtrl",
        resolve: {
            products: function (sshopAPI) {
                return sshopAPI.getProducts();
            }
        }
    })
    .otherwise({
        templateUrl: "app/partials/productList.html",
        controller: "productListCtrl",
        resolve: {
            products: function (sshopAPI) {
                return sshopAPI.getProducts();
            }
        }
    })
});