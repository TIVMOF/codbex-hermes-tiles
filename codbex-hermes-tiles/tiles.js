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
    })
    .directive('barChartTile', function () {
        return {
            restrict: 'E',
            transclude: false,
            replace: true,
            scope: {
                title: '@',
                data: '<',
                indexAxis: '@'
            },
            link: function (scope) {
                var ctx = document.getElementById('barChartCanvas').getContext('2d');

                var labels = scope.data.map(item => item.label);
                var data = scope.data.map(item => item.value);

                var gradient = ctx.createLinearGradient(0, 0, 0, 400);
                gradient.addColorStop(0, '#5DA5DA');
                gradient.addColorStop(1, '#FAA43A');

                var chart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [{
                            data: data,
                            backgroundColor: gradient,
                            borderColor: 'rgba(0,0,0,0)',
                            borderWidth: 0
                        }]
                    },
                    options: {
                        indexAxis: scope.indexAxis,
                        scales: {
                            y: {
                                ticks: {
                                    autoSkip: false,
                                    maxRotation: 30,
                                    minRotation: 30
                                }
                            }
                        },
                        plugins: {
                            legend: {
                                display: false
                            }
                        },
                        responsive: true,
                        maintainAspectRatio: false
                    }
                });
            },
            templateUrl: "/services/web/codbex-hermes-tiles/templates/barChartTile.html"
        };
    });
