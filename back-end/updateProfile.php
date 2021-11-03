<?php
 
 include 'db_connection.php';

 $conn=OpenCon();
  
 $json = file_get_contents('php://input');
 
 $obj = json_decode($json,true);
 
 $Sql_Query = "UPDATE propietario SET Nombre= '" .$_POST["name"]. "', Domicilio = '" .$_POST["address"]. "', Telefono = '" .$_POST["phone"]. "', Password= '" .$_POST["password"]. "', User= ''" .$_POST["email"]. "'' WHERE IdPropietario = '" .$_POST["id"]. "'";
 
 if(mysqli_query($conn,$Sql_Query)){
 
$MSG = 'Datos actualizados correctamente' ;
 
// Converting the message into JSON format.
$json = json_encode($MSG);
 
// Echo the message.
 echo $json ;
 
 }
 else{
 
 echo 'Intente de nuevo';
 
 }
 CloseCon($conn);
?>