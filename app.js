var app = angular.module("myApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when("/", {
            templateUrl: "page2/page2.html",
            controller: "page2Controller"
        })
        .when("/page1", {
            templateUrl: "page1/page1.html",
            controller: "page1Controller"
        })
        .when("/page2", {
            templateUrl: "page2/page2.html",
            controller: "page2Controller"
        });
});

app.service('bmidatajson', function($http, $q) {
    this.getData = function() {
        var deferred = $q.defer();
        $http.get('data/bmidata.json')
            .then(function(response) {
                deferred.resolve(response.data);
            })
            .catch(function(response) {
                deferred.reject(response);
            });
        return deferred.promise;
    }
});

app.controller('navController', function($scope, $location) {
    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
});