<?php

// Database functions for MySQL 

/*
* Connect to the Database   
*/  

function db_connect() {
    // Define connection as a static variable, to avoid connecting more than once
    static $connection;

    // Try and connect to the database, if a connection has not been established yet
    if(!isset($connection)){
        // Load configuration as an array. Use the actual location of your configuration file
        // Put the configuration file outside of the document root
        $config = parse_ini_file('./config.ini');
        $connection = mysqli_connect('localhost', $config['username'], $config['password'], $config['dbname']);
    }

    // If connection was not succesfull, handle the error
    if($connection === false){
        // Handle error - notify administrator, log to a file, show an error screen, etc.
        return mysqli_connect_error();
    }

    return $connection;
}    

/*
* Query the database
* @param $query The query string 
* @return mixed The result of the mysqli::query() function
*/ 
function db_query($query){
    // Connect to database
    $connection = db_connect();

    // Query the database
    $result = mysqli_query($connection, $query);
    
    return $result;
}

/*
* Fech rows from the database (Select query)
* @param $query is The query string
* @return bool False on failure / array Database rows on success 
*/
function db_select($query){
    $rows = [];
    $result = db_query($query);

    // If query failed, return 'false'
    if($result === false){
        return false;
    }

    // If query was successful, retrieve all the rows into an array
    while($row = mysqli_fetch_assoc($result)){
        $rows[] = $row;
    }
    return $rows;
}

/*
* Fectch the last error from the database
* @return string Database error message
*/ 
function db_error(){
    $connection = db_connect();
    return mysqli_error($connection);
}



?>