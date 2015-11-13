angular.module('userCountryApp')
    .directive('userList', function userList() {
        return {
            restrict: 'EA',
            scope: {},
            templateUrl: 'templates/user-list.html',
            bindToController: true,
            controller: 'userListCtrl',
            controllerAs: 'userList',
            link: (scope, element, attrs, controller) => {
                controller.init();
            }
        };
    });
