remisaApp.controller('usersController', function(ngDialog){
    var vm = this; 
    vm.location = "Trabajadores";

    vm.users = [
        {
            id: '000001',
            name: 'Reynaldo',
            l_name: 'Rivas',
            position: 'Owner',
            date: '2010-01-20',
            salary: '3,000',
            img: 'assets/male.png'
        },
        {
            id: '000002',
            name: 'Reyna',
            l_name: 'Saucedo',
            position: 'Supervisor',
            date: '2013-07-5',
            salary: '1,500',
            img: 'assets/female.png'
        },
        {
            id: '000003',
            name: 'Leticia',
            l_name: 'Saucedo',
            position: 'Finanza',
            date: '2013-07-5',
            salary: '1,200',
            img: 'assets/female.png'
        },
        {
            id: '000004',
            name: 'Lauro',
            l_name: 'Mendez',
            position: 'Transporte',
            date: '2013-07-5',
            salary: '1,000',
            img: 'assets/male.png'
        }
    ];

    vm.jobPositions = [
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

    vm.clickToOpen = function(param){
        // console.log(param);
        ngDialog.open(
            { 
                template: 'templates/users-info.modal.html', 
                className: 'ngdialog-theme-default',
                controller: ['$scope', function($scope){
                    if(param != null){
                        $scope.title = "Informacion de Usuario";
                        $scope.id = param.id;
                        $scope.name = param.name;
                        $scope.l_name = param.l_name;
                        $scope.jobs = vm.jobPositions;
                        $scope.salary = param.salary;
                    }
                    else {
                        console.log("Null");    
                    }

                }] 
            });
    }

});