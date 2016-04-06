(function() {
    var app = angular.module('inCaneva', ['ui.router']);

    app.config(function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise("/home")

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "pages/homeView.html",
                controller: 'homeController'
            })

    })

})();