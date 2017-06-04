var app = angular.module("myApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
    // .when("/", {
    //     templateUrl: "page1/page1.html",
    //     controller: "page1Controller"
    // })
        .when("/page1", {
            templateUrl: "page1/page1.html",
            controller: "page1Controller"
        })
        .when("/page2", {
            templateUrl: "page2/page2.html",
            controller: "page2Controller"
        });
});

app.controller('navController', function($scope, $location) {
    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
});