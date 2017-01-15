remisaApp.controller('UsersInfoController', function(ngDialog, userService){
    var vm = this; 
    
    vm.jobs = [
        {
            title: "Dueno"
        }, 
        {
            title: "Supervisor"
        },
        {
            title: "Finanzas"
        },
        {
            title: "Transporte"
        }                
    ];


    vm.createNewUser = function() {
        vm.newUserObject = {
           name: $scope.name,
           l_name: $scope.l_name,
           phone: $scope.phone,
           job: $scope.job,
           start_date: new Date(),
        }



    };
});