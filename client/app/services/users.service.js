remisaApp.service(
    "userService", 
    function($http, $q, server){

        //Return API
        return ({
            addUser: addUser,
            getUsers: getUsers,
        });

        //---------------
        // PUBLIC METHODS
        //---------------
        function addUser(param) {
            var request = $http({
                method: 'POST',
                url: 'http://' + server.ip + ':' + server.port + '/set_user',
                data: param
            });

            return ( request.then(handleSuccess, handleError ) );
        }

        function getUsers() {
            var request = $http({
                method: 'POST',
                url: 'http://' + server.ip + ':' + server.port + '/get_users',
                params: {}
            });

            return ( request.then(handleSuccess, handleError ) );
        }



        // ---------------
        // PRIVATE METHODS
        // ---------------

        // I transform the successful response, unwrapping the application data
        // from the API response payload.
        function handleSuccess(response){
            return( response.data );
        }

        function handleError(response){
            // The API reponse from the server should be returned in a
            // normalized way. However, if the request wasnt handle  by the
            // server, then we have to normalized it in our end the best 
            // way we can

            if(!angular.isObject(response.data) || !response.data.message){
                return ($q.reject("An unkown error has accurred"));
            }


            //  Otherwise, use expected error message
            return ($q.reject(response.data.message));
        }
    });