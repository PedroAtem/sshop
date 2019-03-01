angular.module("sshop").service("sshopAPI", function($http, config) {
    
    this.getProducts = function() {
        return $http.get(config.baseUrl + "/product");
    }

    this.getProduct = function(product_id) {
        return $http.get(config.baseUrl + `/product/${product_id}`);
    }

    this.postUser = function(user) {
        return $http.post(config.baseUrl + '/user', user);
    }

    this.getUser = function(user_id) {
        return $http.get(config.baseUrl + `/user/${user_id}`);
    }

    this.postOrder = function(order) {
        return $http.post(config.baseUrl + "/order", order);
    }
    
    this.getOrders = function() {
        return $http.get(config.baseUrl + "/order");
    }
    
    this.getOrder = function(order_id) {
        return $http.get(config.baseUrl + `/order/${order_id}`);
    }
    
});
