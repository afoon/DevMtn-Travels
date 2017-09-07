angular.module('devmtnTravel').controller('packagesCtrl',function($scope,mainSrv,$stateParams){
    if ($stateParams.country){
        $scope.packageInfo = mainSrv.packageInfo.filter(function(value){
            if ($stateParams.country === value.country){
                return value;
            }
        });
    } else{
        $scope.packageInfo = mainSrv.packageInfo;
    }
    })