angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Morning Dua' },
    { id: 1, name: 'Afternoon Dua' },
    { id: 2, name: 'Evening Dua' },
    { id: 3, name: 'Before Going to Bed' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});
