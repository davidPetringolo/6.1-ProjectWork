storeLocator.controller('loginController', function($scope, $state, $cookies, $cookieStore, loginManager, sessionController){

    sessionController.check($cookies.getObject('session') ,function(err, result){
        if(!err){
            $state.go('list');
        } else {
            console.log("sessione scaduta");
        }
    });

    $scope.loginComplete = function(){

        loginManager.login($scope.email, $scope.password, function(err, result){
            if(err){
                alert('Il nome utente o la password potrebbero essere errati. Prova a reinserirli o contatta la nostra assistenza')
            } else {
                var currentSession = result.session;
                if (currentSession) {
                    $cookies.putObject('session', currentSession);
                    $state.go('list');
                } else {
                    alert('Celato ha sputtanatao il back-end')
                }
            }
        })

    };

});