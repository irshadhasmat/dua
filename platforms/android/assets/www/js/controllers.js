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

        .controller('DuroodCtrl', function($scope) {
        })

        .controller('99NamesCtrl', function($scope, NamesOfAllah) {
            $scope.Names = NamesOfAllah.all();
        })

        .controller('TasbeehCtrl', function($scope, $cordovaVibration, $cordovaDevice) {
            $scope.count = 0;
            $scope.tasbeeh = "سُبْحَانَ اللّهِ";
            $scope.inEnglish = "Subhaanallah";
            $scope.onTap = function() {
                $scope.count++;

                if ($scope.count == 33)
                {
                    $scope.tasbeeh = "الْحَمْدُللّهِ";
                    $scope.inEnglish = "Alhamdulillah";
                    $cordovaVibration.vibrate(50);
                }
                else if ($scope.count == 66)
                {
                    $scope.tasbeeh = "الله أكبر";
                    $scope.inEnglish = "Allahu Akbar";
                    $cordovaVibration.vibrate(50);
                }
                else if ($scope.count == 100)
                {
                    $cordovaVibration.vibrate(1000);
                    $scope.count = 0;
                    $scope.tasbeeh = "سُبْحَانَ اللّهِ";
                    $scope.inEnglish = "Subhaanallah";
                }
            };
        })
        ;