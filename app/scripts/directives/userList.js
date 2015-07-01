

angular.module('userCountryApp')
    .directive('userList', function() {
        return {
            restrict: 'EA',
            scope: {},
            templateUrl: 'templates/user-list.html',
            bindToController: true,
            controller: 'userListCtrl',
            controllerAs: 'userList',
            link: function(scope, element, attrs, userList) {
                userList.init();
            }
        };
    });
