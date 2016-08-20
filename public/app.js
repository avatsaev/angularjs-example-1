//This script is written in ECMAScript 2015 (ES6), please use a modern browser to execute it

var app = angular.module('ContactsApp', []);

app.controller('MainCtrl', function($scope) {

  $scope.contacts = []; //array of strings containing our contact names
  $scope.new_contact_input; //new contact input component value

  //add button clicked
  $scope.add_contact = function() {

    //make sure that the input is not empty
    if ($scope.new_contact_input && $scope.new_contact_input.length){

      // and the contact doesn't already exist in our contacts array
      if ($scope.contacts.indexOf($scope.new_contact_input) == -1) {

        // add new contact to our contacts array
        $scope.contacts.push($scope.new_contact_input);
        $scope.new_contact_input = ""; // clear the input after adding a new contact (two-way data binding)

      }else{
        //show error message if contact already exists
        alert("Error: Contact already exists. Pick a diffferent name");
      }
    }

  }

});
