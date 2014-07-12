angular.module('starter.controllers', [])

        .controller('DashCtrl', function($scope) {
        })

        .controller('FriendsCtrl', function($scope, Friends) {
            $scope.friends = Friends.all();
        })

        .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
            $scope.friend = Friends.get($stateParams.friendId);
        })

        .controller('AccountCtrl', function($scope) {
        })

        .controller('99NamesCtrl', function($scope, NamesOfAllah) {
            $scope.Names = NamesOfAllah.all();
        })

        .controller('TasbeehCtrl', function($scope) {
            $scope.count = 0;
            $scope.onTap = function() {
                $scope.count++;
            };
        })
        ;