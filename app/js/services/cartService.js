angular.module("sshop").service("cart", function($http, config) {

    this.getCart = function() {
        var cart;
        if (localStorage.cart) {
            cart = JSON.parse(localStorage.cart);
        } else {
            cart = {
                items: []
            }
        }
        return cart;
    }
    
    this.addProductToCart = function(product) {
        var cart;
        if (localStorage.cart) {
            cart = JSON.parse(localStorage.cart);
        } else {
            cart = {}
        }
        if (cart[product.id]) {
            cart[product.id] += product.quantity;
        } else {
            cart[product.id] = product.quantity;
        }
        localStorage.cart = JSON.stringify(cart);
    }

    this.removeProductFromCart = function(product) {
        var cart;
        if (localStorage.cart) {
            cart = JSON.parse(localStorage.cart);
        } else {
            cart = {}
        }
        if (cart[product.id]) {
            delete cart[product.id];
        }
        localStorage.cart = JSON.stringify(cart);
    }

});