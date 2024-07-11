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
    .directive('pipeChartTile', function () {
        return {
            restrict: 'E',
            transclude: false,
            replace: true,
            scope: {
                title: '@',
                chartData: '<'
            },
            link: function (scope, element) {
                var ctx = document.getElementById('pipeChartCanvas').getContext('2d');

                var chart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: [
                            'Initial',
                            'Open',
                            'Contacted',
                            'Replied',
                            'Opportunity',
                            'Quotation',
                            'Lost',
                            'Confirmed',
                            'Closed'
                        ],
                        datasets: [{
                            label: 'Number of Leads',
                            data: [
                                scope.leadData.Initial,
                                scope.leadData.Open,
                                scope.leadData.Contacted,
                                scope.leadData.Replied,
                                scope.leadData.Opportunity,
                                scope.leadData.Quotation,
                                scope.leadData.Lost,
                                scope.leadData.Confirmed,
                                scope.leadData.Closed
                            ],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                                'rgba(199, 199, 199, 0.2)',
                                'rgba(83, 102, 255, 0.2)',
                                'rgba(102, 153, 153, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                                'rgba(199, 199, 199, 1)',
                                'rgba(83, 102, 255, 1)',
                                'rgba(102, 153, 153, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            x: {
                                beginAtZero: true
                            },
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
            },
            templateUrl: "/services/web/codbex-hermes-tiles/templates/pipeChartTile.html"
        }
    })
