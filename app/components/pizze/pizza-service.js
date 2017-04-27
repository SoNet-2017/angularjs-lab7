'use strict';

angular.module('myApp.pizza.pizzaService', [])

    .factory('Pizza', function($http) {
        var pizzaService = {
            getData: function () {
                return $http.get('../data/pizza.json').then(function (response) {
                    return response.data;
                });
            }
        };
        return pizzaService;
    });
