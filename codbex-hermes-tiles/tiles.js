angular.module('applicationTiles', [])
    .directive('numericTile', function () {
        return {
            restrict: 'E',
            transclude: false,
            replace: true,
            scope: {
                perspective: '@',
                title: '@',
                subtitle: '@?',
                numericData: '<',
                footerText: '@?',
                isFloatingNumber: '<?'
            },
            link: function (scope) {
                if (!scope.footerText) {
                    scope.today = new Date();
                }
            },
            templateUrl: "/services/web/codbex-hermes-tiles/templates/numericTile.html"
        };
    });
