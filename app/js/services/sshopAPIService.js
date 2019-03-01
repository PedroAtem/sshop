angular.module("sshop").service("sshopAPI", function($http, config) {
    
    this.postProduct = function(product) {
        return $http.post(config.baseUrl + "/product", product);
    }

    this.getProducts = function() {
        return $http.get(config.baseUrl + "/product");
    }

    this.putProduct = function(product_id, product) {
        return $http.put(config.baseUrl + `/product/${product_id}`, product);
    }

    this.getProduct = function(product_id) {
        return $http.get(config.baseUrl + `/product/${product_id}`);
    }

    this.deleteProduct = function(product_id) {
        return $http.delete(config.baseUrl + `/product/${product_id}`);
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
