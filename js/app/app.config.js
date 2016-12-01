'use strict';

remisaApp.
    config(
        function($stateProvider, $urlRouterProvider, ChartJsProvider){

            $urlRouterProvider.otherwise('/dashboard');

            $stateProvider
                .state('dashboard', {
                    url: '/dashboard',
                    templateUrl: 'templates/dashboard.html',
                    controller: 'dashboardController'
                })
                .state('orders', {
                    url: '/orders',
                    templateUrl: 'templates/orders.html'
                })
                .state('inventory', {
                    url: '/inventory',
                    templateUrl: 'templates/inventory.html'
                })
                .state('users', {
                    url: '/users',
                    templateUrl: 'templates/users.html',
                    controller: 'usersController'
                });

            ChartJsProvider.setOptions({
                /*
                    gray: 4D4D4D, blue: 5DA5DA, orange: FAA43A, green: 60BD68, pink: F17CB0, brown: B2912F, purple: B276B2, yellow: DECF3F     
                */ 
                chartColors: ['#4D4D4D', '#5DA5DA', '#FAA43A', '#60BD68', '#F17CB0', '#B2912F', '#B276B2', '#DECF3F'],
                responsive: true
            });

            
                
        });