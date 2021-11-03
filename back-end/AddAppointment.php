<?php
 
include 'db_connection.php';

$conn=OpenCon();
 
$json = file_get_contents('php://input');
 
$obj = json_decode($json,true);
 

$GetPet = "SELECT IdMascota FROM mascota WHERE Nombre='" .$_POST["mascota"]. "'";
$GetUser = "SELECT IdPropietario FROM propietario WHERE User='" .$_POST["propietario"]. "'";


if ($result = $conn->query($GetPet)){
    $data = mysqli_fetch_array($result);
   $idPet= $id_Pet[] = $data["IdMascota"];

    if ($result = $conn->query($GetUser)){
        $data = mysqli_fetch_array($result);
        $idUser= $id_User[] = $data["IdPropietario"];
    }
    $sql = "INSERT INTO citas(tipo,idMascota,idPropietario) VALUES ('" .$_POST["tipo"]. "', '$idPet', '$idUser')";
    if ($result = $conn->query($sql)){

        $response = 'Solicitud enviada. Le enviaremos a su correo la fecha y hora de la cita.' ;
 
$InvalidMSGJSon = json_encode($response);
 
 echo $InvalidMSGJSon ;
    }
    else{
        $response = 'Por ahora no podemos procesar su solicitud.' ;
 
        $InvalidMSGJSon = json_encode($response);
         
         echo $InvalidMSGJSon ;
    }


}else{
    $response = 'Por ahora no podemos procesar su solicitud.' ;
 
    $InvalidMSGJSon = json_encode($response);
     
     echo $InvalidMSGJSon ;
}


 CloseCon($conn);
?>