<?php
 

include 'db_connection.php';
 

$conn=OpenCon();
 
 $json = file_get_contents('php://input');
 
 $obj = json_decode($json,true);
 
$Sql = "SELECT * FROM propietario where User = '" .$_POST["email"]. "' and Password = '" .$_POST["password"]. "'";

$result = mysqli_query($conn, $Sql);


if(mysqli_num_rows ($result) > 0){
    
    for ($set = array(); $row = $result->fetch_assoc(); $set[] = $row);
    echo json_encode($set);
 }
 
 else {
 
$InvalidMSG = 'Correo o contraseña incorrectos. Intente de nuevo' ;
 
$InvalidMSGJSon = json_encode($InvalidMSG);
 
 echo $InvalidMSGJSon ;
 
 }

 CloseCon($conn);
?>