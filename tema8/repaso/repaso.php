<?php
    class Conexion {
        private $_conn = NULL;
        public function __construct() {
        
        }
    
        public function conectar() {
            try {
                $this ->_conn = new PDO("mysql:host=localhost;dbname=spain","root","");
            } catch (PDOException $e){
                echo "Error ".$e->getMessage();
            }
            return $this->_conn;
        }
    }

    $conexion = new Conexion();
    $conectar = $conexion->conectar();

    $provincia_id = $_POST['provincia'];

    $params = array(
        ":provincia" => $provincia_id
    );
    $sql = "SELECT * FROM municipios WHERE provincia_id = (SELECT id from provincias where provincia = :provincia) and municipio LIKE '%de Segovia'";
    $pdo = $conectar->prepare($sql);
    $pdo->execute($params);
    $json = array();
    while ($row = $pdo->fetch(PDO::FETCH_ASSOC)) {  
        $municipio = array(
            "id" => $row['id'],
            "slug" => $row['slug'],
            "municipio" => $row['municipio'],
            "latitud" => $row['latitud'],
            "longitud" => $row['longitud']
        );
        $json[] = $municipio;
    }
    echo json_encode($json);
?>