angular.module('applicationTiles', [])
    .controller('applicationTilesController', ['$scope', function ($scope) {
        $scope.today = new Date();
    }])
    .directive('numericTile', ['SplitPaneState', function (NumericTilePaneState) {
        return {
            restrict: 'E',
            replace: true,
            transclude: false,
            scope: {
                perspective: '@',
                title: '@',
                numericData: '@'
            },
            controller: ['$scope', '$element', function ($scope, $element) {
                $scope.today = new Date();
            }],
            templateUrl: "/services/web/codbex-hermes-tiles/templates/numericTile.html"
        };
    }]);