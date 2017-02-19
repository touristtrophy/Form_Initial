'use strict'

app.controller("ClienteCtrl", function ($scope, $firebaseArray) {

	$scope.clientes = firebase.database().ref('clientes/');
	$scope.clientes.on('value', function(clientes) {
	$firebaseArray(postElement, clientes.val());
	})

	$scope.crearCliente = function (cliente) {
		firebase.database().ref('users/' + cliente.dni).set(cliente)
	}
});