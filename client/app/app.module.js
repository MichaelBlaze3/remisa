'use strict';

var remisaApp = angular.module('remisa', [
    'ui.router',
    'ngResource',
    'chart.js',
    'ngDialog',
]);


remisaApp.service('server', function(){
    this.ip = 'localhost'; 
    this.port = '3000';
});