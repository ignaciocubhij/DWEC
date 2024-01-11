<?php
    header('Content-Type: text/txt; charset=utf-8');
    $server="localhost";
    $BD="ajax8";
    $user="root";
    $password="";

    //Creamos la conexión
    $conexion = mysqli_connect($server,$user,$password,$BD) or die("error en la conexión");
    mysqli_set_charset($conexion, "utf8");

    $sql = "select nombre from usuarios where nombre = ?";
    $stmt = mysqli_prepare($conexion, $sql);
    mysqli_stmt_bind_param($stmt, "s", $_POST['login']);
    mysqli_stmt_execute($stmt);
    $consulta = mysqli_stmt_get_result($stmt);

    if (mysqli_num_rows($consulta) > 1) {
        $usuarios[] = array('disponible'=>'si');
    } else {
        $usuarios[] = array('disponible'=>'no');
    }

    $usuarios = array();

    while($row = mysqli_fetch_array($consulta)){
        $usuario=$row['nombre'];

        $usuarios[] = array('usuario'=>$usuario);
    }

    $close = mysqli_close($conexion) 
    or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
    
    $json_string = json_encode($usuarios);
    echo $json_string;
?>