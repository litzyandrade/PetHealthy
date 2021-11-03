<?php
 
include 'db_connection.php';

$conn=OpenCon();
 
$json = file_get_contents('php://input');
 
$obj = json_decode($json,true);
 
$img_path='./photos/' . $_FILES['image']['name'];

$check = "SELECT IdPropietario FROM propietario WHERE User = '" .$_POST["email"]. "'";

if ($result = $conn->query($check)){
  $data = mysqli_fetch_array($result);
  $idUser = $id_U[] = $data["IdPropietario"];

}


if(move_uploaded_file($_FILES['image']['tmp_name'],$img_path )){
  $img_pathComplete='https://192.168.100.7/PetHealthy/photos/'.$_FILES['image']['name'];
 // SENTENCIA SQL PARA INSERTAR
 $sql="INSERT INTO mascota(img,Nombre,Sexo,Raza,Color,Edad,idPropietario) VALUES ('$img_pathComplete','" .$_POST["nombre"]. "','" .$_POST["sexo"]. "','" .$_POST["raza"]. "','" .$_POST["color"]. "','" .$_POST["edad"]. "','$idUser')";

if($result = $conn->query($sql)){
  $response = "Mascota agregada con exito";

   $resultMSG = json_encode($response);
   echo $resultMSG;
}else {
  $response = "Algo salio mal. Intente de nuevo ";

  $resultMSG = json_encode($response);
  echo $resultMSG;
}
  

 };
 CloseCon($conn);
?>