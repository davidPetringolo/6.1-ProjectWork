storeLocator.controller('loginController', function($scope, loginManager, sessionManager){
        loginManager.login("tsac-2015@tecnicosuperiorekennedy.it", "tsac", function(err, result){
        	if(err){
        		console.log("no session generated");
        	} else {
        		var currentSession = result.session;
        		console.log(currentSession);
        		sessionManager.setSession("currentSession");
        	}
        })
    });
