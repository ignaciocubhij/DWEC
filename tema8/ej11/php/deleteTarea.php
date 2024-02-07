<?php
        require_once("db.php");
        $db = "notas";

        $conexion = conectar($db);
        $parametros = array(":id_nota" => $_POST["id_nota"]);
        $sql = "DELETE FROM notas WHERE id_nota = :id_nota";
        $pdo = $conexion->prepare($sql);
        $pdo->execute($parametros);

        $datos = $pdo->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($datos);
?>