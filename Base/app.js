/**
 * Created by TheDirektor on 07/04/16.
 */

var myApp = angular.module('myApp',['ui.bootstrap']);

myApp.controller('myCTRL', ['$scope', function($scope) {

    var eventi;

    $.ajaxSetup({async: false});

    $.post("http://incaneva.it/wp-admin/admin-ajax.php",
        {
            action: 'incaneva_events',
            blog: '1,6,7,8', limit: 10, old: false
        },
        function(result){
            eventi = result;
            eventi = eventi.data;
        },
        'json');

    $scope.eventi = eventi;

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

}]);
