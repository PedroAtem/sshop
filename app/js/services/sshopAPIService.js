angular.module("sshop").service("sshopAPI", function($http, config) {
    this.getProducts = function() {
        return $http.get(config.baseUrl + "/product");
    }
});