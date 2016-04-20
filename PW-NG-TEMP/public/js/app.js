var storeLocator = angular.module("storeLocator", ['ui.router']);

storeLocator.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'views/loginView.html',
            controller: 'loginController'
        })
        .state('list', {
            url: '/list',
            templateUrl: 'views/listView.html',
            controller: 'listController'
        })
        .state('details', {
            url: '/details',
            templateUrl: 'views/detailsView.html',
            controller: 'detailsController'
        })
    ;
});