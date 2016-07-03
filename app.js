//This script is written in ECMAScript 2015 (ES6), please use a modern browser to execute it

let app = angular.module('ContactsApp', []);

app.controller('MainCtrl', ($scope) => {

  $scope.contacts = []; //array of strings containing our contact names
  $scope.new_contact_input; //new contact input component value

  //add button clicked
  $scope.add_contact = () => {

    //make sure that the input is not empty and the contact doesn't already exist in our contacts array
    if ($scope.new_contact_input != "" && $scope.contacts.indexOf($scope.new_contact_input) == -1) {
      $scope.contacts.push($scope.new_contact_input); // add new contact to our contacts array
    }

    $scope.new_contact_input = "" // clear the input after adding a new contact (two-way data binding)

  }

});
