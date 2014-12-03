(function() {
	var dummyCustomers = [ {
		"firstName" : "F1",
		"lastname" : "L1",
		"id" : "Q560",
		"DOJ" : "15 / 10 / 2013",
		"salary" : 35000,
		"location" : "India",
		"currency" : "inr"
	} ];
	var app = angular.module('myStore', []);

	app.controller('CustomerController', function() {
		this.customers = dummyCustomers;
	});
})();