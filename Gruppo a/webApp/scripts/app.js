var routerApp = angular.module('routerApp', ['ui.router']);


routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'pages/homeView.html',
            controller: 'homeController'
        })
        .state('details', {
            url: '/details/:id',
            templateUrl: 'pages/detailsView.html',
            controller: 'detailsController'
        })
    ;
});