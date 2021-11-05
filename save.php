<?php

// Pega a requisição post e transforma em JSON.
$values = json_encode($_POST);

// Armazena no final do arquivo os valores recebidos.
file_put_contents('nome_e_path_do_arquivo.ext', $values, FILE_APPEND);