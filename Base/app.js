/**
 * Created by TheDirektor on 07/04/16.
 */

var myApp = angular.module('myApp',['ngSanitize']);

myApp.controller('myCTRL', ['$scope', function($scope) {

    var eventi;

    $.ajaxSetup({async: false});

    $.post("http://incaneva.it/wp-admin/admin-ajax.php",
        {
            action: 'incaneva_events',
            blog: '1,6,7,8', limit: 10, old: false
        },
        function(result){
            eventi = result.data;
        },
        'json');

    $scope.eventi = eventi;
    
    $scope.eventi.forEach(function (x){
        if(x.evcal_end_date == ""){
            x.formattedDate = x.evcal_start_date;
        }else{
            x.formattedDate = x.evcal_start_date + " - " + x.evcal_end_date;
        }
    });   

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

}]);
