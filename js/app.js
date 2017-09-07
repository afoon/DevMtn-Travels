angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html"
            })
            .state('locations',{
                url:'/locations',
                controller: 'locationsCtrl',
                templateUrl: "../views/locations.html"
            })
            .state('booked',{
                url:'/booked',
                templateUrl: "../views/booked.html",
                controller: 'bookedCtrl'
            })
            .state('adventurers',{
                url:'/adventurers',
                templateUrl: "../views/about-adventurers.html"
            })
            .state('contact',{
                url:'/contact',
                templateUrl: "../views/contact.html"
            })
            .state('packages',{
                url:'/packages/:country',
                templateUrl: "../views/packages.html",
                controller: "packagesCtrl"
            })
            

        $urlRouterProvider
            .otherwise('/');
    });
