<?php
 
include 'db_connection.php';

$conn=OpenCon();
 
$json = file_get_contents('php://input');
 
$obj = json_decode($json,true);
 

 
//VERIFICAR SI YA EXISTE EL EMAIL A REGISTRAR
$CheckSQL = "SELECT * FROM propietario WHERE User='" .$_POST["email"]. "'";
 
$check = mysqli_fetch_array(mysqli_query($conn,$CheckSQL));
 
 
if(isset($check)){
 
 $EmailExistMSG = 'Este email ya esta registrado !!!';
 
 // convierte el mensaje a un json
$EmailExistJson = json_encode($EmailExistMSG);
 
// Echo the message.
 echo $EmailExistJson ; 
 
 }
 else{
 
 // SENTENCIA SQL PARA INSERTAR
$Sql_Query = "insert into propietario (Nombre,Telefono,User,Password) values ('" .$_POST["name"]. "','" .$_POST["phone"]. "','" .$_POST["email"]. "', '" .$_POST["password"]. "')";
 
 
 if(mysqli_query($conn,$Sql_Query)){
 
 // mensaje de exito
$MSG = 'Usuario registrado con exito, Bienvenido' ;
 
$json = json_encode($MSG);
 
 echo $json ;
 
 }
 else{
 
 echo 'Intente de nuevo';
 
 }
 }
 CloseCon($conn);
?>