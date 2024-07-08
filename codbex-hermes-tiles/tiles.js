angular.module('applicationTiles', [])
    .directive('NumericTile', ['SplitPaneState', function () {
        return {
            restrict: 'E',
            transclude: false,
            scope: {
                perspective: '@',
                title: '@',
                subtitle: '@?',
                numericData: '<',
                footerText: '@?',
                isFloatingNumber: '<?'
            },
            controller: ['$scope', function ($scope) {
                if (!$scope.footerText) {
                    $scope.today = new Date();
                }
            }],
            templateUrl: "/services/web/codbex-hermes-tiles/templates/numericTile.html"
        };
    }]);
