angular.module("sshop").service("sshopAPI", function($http, config) {
    
    this.getProducts = function() {
        return $http.get(config.baseUrl + "/product");
    }

    this.postUser = function(user) {
        return $http.post(config.baseUrl + '/user', user);
    }

    this.postOrder = function(order) {
        return $http.post(config.baseUrl + "/order", order);
    }
    
});
