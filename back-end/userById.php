<?php
 

include 'db_connection.php';
 

$conn=OpenCon();

$json = file_get_contents('php://input');
 
$obj = json_decode($json,true);
 
$sql = "SELECT * FROM propietario WHERE IdPropietario= '" .$_POST["id"]. "'";
$result = mysqli_query($conn, $sql);

if(mysqli_num_rows ($result) > 0){
    for ($set = array(); $row = $result->fetch_assoc(); $set[] = $row);
    echo json_encode($set);
}else {
    $error = 'Algo salio mal';
    $err = json_encode($error);
    echo $err;
}
 CloseCon($conn);
?>