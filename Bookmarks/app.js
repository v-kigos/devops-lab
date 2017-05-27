/**
 * Bookmarks app
 */

var app = angular.module('Bookmarks', []);

app.controller('BookmarksCtrl', function($scope) {
	$scope.bookmarks = [ {
		"bookmark" : [ {
			"name" : "Google",
			"url" : "www.google.com",
		}, ]
	}, {
		"bookmark" : [ {
			"name" : "TBD",
			"url" : "TBD"
		} ]
	}, {
		"bookmark" : [ {
			"name" : "GitHub",
			"url" : "www.github.com",
		}, ]
	}, {
		"search" : [ {
			"bookmark" : [ {
				"name" : "Rambler",
				"url" : "rambler.com",
			}, ]
		} ]
	}, ]
});
