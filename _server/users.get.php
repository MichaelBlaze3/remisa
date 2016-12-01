<?php
    include 'cnx.php';
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    

    $account = $connection->query("SELECT _id_account, email, password, status, _fk_id_user FROM tbl_accounts");

    $outp = "";
    while($rs = $account->fetch_array(MYSQLI_ASSOC)) {
        if ($outp != "") {$outp .= ",";}
        $outp .= '{"Name":"'  . $rs["CompanyName"] . '",';
        $outp .= '"City":"'   . $rs["City"]        . '",';
        $outp .= '"Country":"'. $rs["Country"]     . '"}'; 
    }
    $outp ='{"records":['.$outp.']}';
    $conn->close();

    echo($outp);
?>
