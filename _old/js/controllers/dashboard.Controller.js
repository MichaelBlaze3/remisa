remisaApp.controller('dashboardController', function(){
    var vm = this; 
    vm.location = "Dashboard";

    vm.moths = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sept', 'Oct', 'Nov', 'Dic'];
    vm.earnings = [25000, 12000, 19400, 33020, 23000, 44230, 41250, 28900, 31000, 22000 ];

    vm.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    vm.data = [300, 500, 100,300, 500, 100,300, 500, 100,300, 500, 100];

    vm.orders = [
        {
            id: '102212',
            client: 'Futura',
            price: '22000',
            date: '11/23/2016'
        },
        {
            id: '102211',
            client: 'Futura',
            price: '31000',
            date: '10/14/2016'
        },
        {
            id: '102212',
            client: 'Futura',
            price: '22000',
            date: '11/23/2016'
        },
        {
            id: '102211',
            client: 'Futura',
            price: '31000',
            date: '10/14/2016'
        },
        {
            id: '102212',
            client: 'Futura',
            price: '22000',
            date: '11/23/2016'
        },
        {
            id: '102211',
            client: 'Futura',
            price: '31000',
            date: '10/14/2016'
        }
    ];

    vm.primaryResource = [
        {
            id : '101',
            resource: 'Gas LP',
            measurement: 'Lts', 
            qty: 13,
            min: 13,
            mid: 20 
        },
        {
            id : '102',
            resource: 'Costales Industriales',
            measurement: 'Pza', 
            qty: 22,
            min: 5,
            mid: 10 
        },
        {
            id : '103',
            resource: 'Camara Aire 1/2',
            measurement: 'Pza', 
            qty: 10,
            min: 3,
            mid: 6 
        },
        {
            id : '104',
            resource: 'Camara Aire 3/4',
            measurement: 'Pza', 
            qty: 4,
            min: 3,
            mid: 6  
        },
        {
            id : '105',
            resource: 'Glicerina',
            measurement: 'Lts', 
            qty: 33,
            min: 20,
            mid: 30  
        }        

    ];

    vm.todoList = [
        {
            do: 'Conseguir Glicerina',
            checked: false,
        },
        {
            do: 'Paso 2',
            checked: false,
        }
    ];

    vm.addTodo = function(){
       console.log(vm.todoNewInput);

        vm.todoList.push({do: vm.todoNewInput, checked: false});
        vm.todoNewInput = "";
    }

    
});