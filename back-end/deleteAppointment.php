<?php
include 'db_connection.php';

$conn=OpenCon();
 
 
$json = file_get_contents('php://input');
$obj = json_decode($json,true);



$sql = "DELETE FROM citas WHERE id = '" .$_POST["id"]. "'";

if($result = $conn->query($sql)){

    $response = "Cita eliminada correctamente";

   echo json_encode($response);
}else{
    $response = "No se ha podido eliminar. Intente de nuevo";

   echo json_encode($response); 
}

CloseCon($conn);

?>