<?php


// Definir as credenciais de acesso ao banco de dados
$servername = "sql688.main-hosting.eu";
$username = "u620166704_pj";
$password = "PJforever8";
$dbname = "u620166704_pj";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set o modo de erro do PDO para exceções
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Prepara a consulta SQL
    $stmt = $conn->prepare("SELECT * FROM lista");

    // Executa a consulta
    $stmt->execute();

    // Obtém os resultados como um array associativo
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);


    $itens = []; 
    // Imprime os resultados
    foreach($results as $row) {
        $itens = $row;
    }


    echo json_encode($results);

}
catch(PDOException $e) {
    echo "Falha na conexão: " . $e->getMessage();
}



?>