<?php
 
include 'db_connection.php';

$conn=OpenCon();
 
$json = file_get_contents('php://input');
 
$obj = json_decode($json,true);
 


 
 // SENTENCIA SQL PARA INSERTAR
$Sql_Query = "insert into mascota (Nombre,Sexo,Raza,Color,Edad) values ('" .$_POST["nombre"]. "','" .$_POST["sexo"]. "','" .$_POST["raza"]. "', '" .$_POST["color"]. "', '" .$_POST["edad"]. "')";
 
 
 if(mysqli_query($conn,$Sql_Query)){
    
    $response = "Mascota agregada con exito";

    echo json_encode($response);

 }
 CloseCon($conn);
?>