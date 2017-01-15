'use strict';

remisaApp.
    config(
        function($stateProvider, $urlRouterProvider, ChartJsProvider){

            // Send to login if the URL was not found
            $urlRouterProvider.otherwise("/signin");

            $stateProvider

                // SIGNIN STATE
                .state('signin', {
                    url: '/signin',
                    templateUrl: 'app/templates/auth/signin.html',
                    controller: 'signinController',
                    controllerAs: 'vm',
                })
                // SIGNOUT STATE
                .state('signout', {
                    url: '/signout',
                })
                // HOME STATE
                .state('home', {
                    abstract: true,
                    url: '/home',
                    templateUrl: 'app/templates/home/home.html',
                    controller: 'homeController',
                    controllerAs: 'vm', 
                })
                // HOME NESTED VIEWS 
                .state('home.dashboard', {
                    url: '/dashboard',
                    templateUrl: 'app/templates/home/dashboard/dashboard.html',
                    controller: 'dashboardController',
                    controllerAs: 'vm',
                })
                .state('home.users', {
                    url: '/users',
                    templateUrl: 'app/templates/home/dashboard/users.html',
                    controller: 'usersController',
                    controllerAs: 'vm',
                })
                .state('home.orders', {
                    url: '/orders',
                    templateUrl: 'app/templates/home/dashboard/orders.html',
                })
                .state('home.inventory', {
                    url: '/inventory',
                    templateUrl: 'app/templates/home/dashboard/inventory.html',
                });

            ChartJsProvider.setOptions({
                /*
                    gray: 4D4D4D, blue: 5DA5DA, orange: FAA43A, green: 60BD68, pink: F17CB0, brown: B2912F, purple: B276B2, yellow: DECF3F     
                */ 
                chartColors: ['#4D4D4D', '#5DA5DA', '#FAA43A', '#60BD68', '#F17CB0', '#B2912F', '#B276B2', '#DECF3F'],
                responsive: true
            });

            
                
        });