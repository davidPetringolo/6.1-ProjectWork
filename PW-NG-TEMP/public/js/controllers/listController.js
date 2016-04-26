storeLocator.controller('listController', function($scope, $state, $cookies, $cookieStore, $http, $stateParams, loginManager, storeDetailsManager, storeManager){

    var session = $cookies.getObject('session');

    storeManager.getAll(session, function(err, result){
        if(err){
            console.log('errore caricamento stores')
        } else {
            $scope.list = result;
        }
    });

    $scope.details =  function (guid) {
        $state.go('details', {guid:guid});
    }
});