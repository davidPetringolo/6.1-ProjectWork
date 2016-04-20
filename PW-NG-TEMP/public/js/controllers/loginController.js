storeLocator.controller('loginController', function($scope, loginManager, sessionManager){
        loginManager.login("tsac-2015@tecnicosuperiorekennedy.it", "tsac", function(err, result){
        	if(err){
        		console.log("no session generated");
        	} else {
        		var currentSession = result.session;
        		console.log(currentSession);
        		sessionManager.setSession(currentSession);
        		//da qui in poi TEST
        		sessionManager.getSession(function(err, res){
        			if(!err){
        				console.log(res);
        			}
        		})
        		sessionManager.clear();
        		sessionManager.getSession(function(err, res){
        			if(!err){
        				console.log(res);
        			} else {
        				console.log("ALLAHUAKBAR");
        			}
        		})
        		/*storeManager.getAll(currentSession, function(storeErr, storeRes){
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
        		})*/
        	}
        })
    });
