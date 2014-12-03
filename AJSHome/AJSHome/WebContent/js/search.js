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

// Define a new module for our app. The array holds the names of dependencies if any.
var app = angular.module("instantSearch", []);

// Create the instant search filter

app.filter('searchFor', function() {

	// All filters must return a function. The first parameter
	// is the data that is to be filtered, and the second is an
	// argument that may be passed with a colon (searchFor:searchString)

	return function(arr, searchString) {

		if (!searchString) {
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function(item) {

			if (item.title.toLowerCase().indexOf(searchString) !== -1) {
				result.push(item);
			}

		});

		return result;
	};

});

// The controller

function InstantSearchController($scope) {

	// The data model. These items would normally be requested via AJAX,
	// but are hardcoded here for simplicity. See the next example for
	// tips on using AJAX.

	$scope.items = [
			{
				url : '',
				title : 'India',
				image : 'http://www.oorsprong.org/WebSamples.CountryInfo/Images/India.jpg'
			},
			{
				url : '',
				title : 'USA',
				image : 'http://www.oorsprong.org/WebSamples.CountryInfo/Images/USA.jpg'
			} ];

}

function CountryControler($scope) {
	$scope.items = [
			{
				url : '',
				title : 'IndiaOOO',
				image : 'http://www.oorsprong.org/WebSamples.CountryInfo/Images/India.jpg'
			},
			{
				url : '',
				title : 'USAOOOO',
				image : 'http://www.oorsprong.org/WebSamples.CountryInfo/Images/USA.jpg'
			} ];
}