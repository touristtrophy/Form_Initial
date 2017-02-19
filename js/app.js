'use strict'

var app = angular.module("MotorTechSoft", [
	'ngAnimate',
	'ngResource',
	'ngRoute',
	'firebase'
])
.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'vistas/main.html'
		})
		.when('/crearCliente', {
			templateUrl: 'vistas/crearCliente.html',
			controller: 'ClienteCtrl'
		})
		.when('/buscarCliente', {
			templateUrl: 'vistas/buscarCliente.html'
			controller: 'ClienteCtrl'
		})
		.when('/editarCliente', {
			templateUrl: 'vistas/editarCliente.html'

		})
		.otherwise({
			rediretTo: '/'
		});
});
var configdb = {
        apiKey: "AIzaSyDd7-YbS_8-vDGigMsZRFLzyqv1AbH9DDg",
        authDomain: "motortechsoft.firebaseapp.com",
        databaseURL: "https://motortechsoft.firebaseio.com",
        storageBucket: "motortechsoft.appspot.com",
        messagingSenderId: "249228519589"
      };
firebase.initializeApp(configdb);
var database = firebase.database();