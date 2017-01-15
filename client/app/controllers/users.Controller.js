remisaApp.controller('usersController', function(ngDialog, userService){
    var vm = this; 
    vm.location = "Trabajadores";
    vm.users = [];

    init();

    function init() {
        vm.users = userService.getUsers().then(function(result){
            console.log(result);
            vm.users = result;
        });
    }

    vm.clickToOpen = function(param){
        ngDialog.open(
            { 
                template: 'app/templates/modals/users-info.modal.html', 
                className: 'ngdialog-theme-default',
                controller: 'UsersInfoController',
                controllerAs: 'vm'
            });
    }




});