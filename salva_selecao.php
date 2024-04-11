<?php

// Definir as credenciais de acesso ao banco de dados
$servername = "sql688.main-hosting.eu";
$username = "u620166704_pj";
$password = "PJforever8";
$dbname = "u620166704_pj";


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$id = $_GET['id'];
$quem = $_GET['quem_selecionou'];
$email = $_GET['email'];

$sql = "UPDATE lista SET selecionado='s', quem_selecionou='{$quem}', email='{$email}' WHERE id='{$id}'";

//EnviaEmail($email);


if ($conn->query($sql) === TRUE) {
  echo "Record updated successfully";
} else {
  echo "Error updating record: " . $conn->error;
}
$conn->close();


function EnviaEmail($email){

  $para = $email;
  $assunto = 'O presente escolhido';
  $mensagem = 'Olá, Obrigado por escolher o presente';

  $headers = 'De: paulowesley@gmail.com' . "\r\n" .
            'Reply-To: paulowesley@gmail.com' . "\r\n" .
            'X-Mailer: PHP/' . phpversion();


  mail($para, $assunto, $mensagem, $headers);


}










?>