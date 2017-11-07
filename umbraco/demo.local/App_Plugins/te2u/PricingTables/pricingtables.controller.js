angular.module("umbraco")
    .controller("te2u.pricingTablesController",
        //inject umbracos assetsService
        function ($scope, dialogService, contentResource) {
            if (!$scope.control.link) {
                $scope.control.link = {};
            }

            //Content Picker Dialog
            $scope.open = function () {
                dialogService.contentPicker({
                    multipicker: false,
                    callback: function (data) {
                        $scope.control.link.id = data.id;
                        $scope.control.link.name = data.name;
                        contentResource.getNiceUrl(data.id).then(function (url) {
                            $scope.control.link.url = url;
                        });
                    }
                })
            };

            //Dynamic Fields
            if (!$scope.control.features) {
                $scope.control.features = [];
            }

            $scope.add = function (value) {
                $scope.control.features.push(value);
                $scope.inputVal = "";
            };

            $scope.remove = function (index) {
                $scope.control.features.splice(index, 1);
            };


            $scope.moveUp = function (index) {
                changeIndex($scope.control.features, index, true);
            };

            $scope.moveDown = function (index) {
                changeIndex($scope.control.features, index, false);
            };

            var changeIndex = function (array, index, moveLeft) {
                var newIndex = index;
                var arrayLength = array.length - 1;
                var newArray = array;
                //if first element or last element, we cannot change its index
                if ((moveLeft && index === 0) || (!moveLeft && index >= arrayLength)) {
                    return;
                }
                //if move to left we decrease the index and if to right we increase it
                var newIndex = moveLeft ? newIndex - 1 : newIndex + 1;
                //move item to new index
                var item = newArray.splice(index, 1);
                return newArray.splice(newIndex, 0, item[0]);
            };

        });