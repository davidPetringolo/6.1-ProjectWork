storeLocator.controller('loginController', function($scope, loginManager, storeManager, storeDetailsManager){
        loginManager.login("tsac-2015@tecnicosuperiorekennedy.it", "tsac", function(err, result){
        	if(err){
        		console.log("no session generated");
        	} else {
        		var currentSession = result.session;
        		console.log(currentSession);
        		storeManager.getAll(currentSession, function(storeErr, storeRes){
        			if(storeErr){
        				console.log("no store loaded");
        			} else {
        				var currentStores = storeRes;
        				console.log(currentStores);
        				storeDetailsManager.getByID(currentSession, currentStores[0].guid, function(detailErr, detailRes){
        					if(detailErr){
        						console.log("detail loading failure");
        					} else {
        						console.log(detailRes);
        					}
        				})
        			}
        		})
        	}
        })
    });
