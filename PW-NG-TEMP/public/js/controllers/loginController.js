storeLocator.controller('loginController', function($scope, $state, $cookies, $cookieStore, loginManager, sessionController, ngDialog){

    $scope.loginshow = false;

    sessionController.check($cookies.getObject('session') ,function(err, result){
        if(!err){
            $state.go('list');
        } else {
            console.log("sessione scaduta");
            $scope.loginshow = true;
        }
    });

    $scope.loginComplete = function(){
        
        var error = false;

        loginManager.login($scope.email, $scope.password, function(err, result){
            if(err){
                error = true;
            } else {
                var currentSession = result.session;
                if (currentSession) {
                    $cookies.putObject('session', currentSession);
                    $state.go('list');
                } else {
                    alert('Celato ha sputtanatao il back-end')
                }
            }
            if(error){
                ngDialog.open({ template: 'Il nome utente o la password potrebbero essere errati. <br> Prova a reinserirli o contatta la nostra assistenza', plain:true});
            }else{
                //register
            }
        })

    };

});