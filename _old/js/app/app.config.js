'use strict';

remisaApp.
    config(
        function($stateProvider, $urlRouterProvider, ChartJsProvider){

            // Send to login if the URL was not found
            $urlRouterProvider.otherwise("/login");

            $stateProvider
                // LOGIN STATE
                .state('login', {
                    url: '/login',
                    templateUrl: 'templates/auth/login.html'
                })


                .state("dashboard", {
                    url: "/dashboard",
                    views: {
                        'main@': {
                            templateUrl: "templates/main.html",
                            controller: "mainController",
                        }
                    }
                })
                .state('dashboard.users', {
                    url: '/users',
                    views: {
                        'users@content': {
                            templateUrl: 'templates/dashboard/users.html',
                            controller: 'usersController'
                        }
                    }
                });

            ChartJsProvider.setOptions({
                /*
                    gray: 4D4D4D, blue: 5DA5DA, orange: FAA43A, green: 60BD68, pink: F17CB0, brown: B2912F, purple: B276B2, yellow: DECF3F     
                */ 
                chartColors: ['#4D4D4D', '#5DA5DA', '#FAA43A', '#60BD68', '#F17CB0', '#B2912F', '#B276B2', '#DECF3F'],
                responsive: true
            });

            
                
        });