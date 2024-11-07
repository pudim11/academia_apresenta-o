import React from "react";
import { useState } from "react";

let  AnosLista = [
    [1, '2024'],
    [2, '2025'],
    ]

let AnosListaArray = [
    {
        id: 1,
        title: 2024
    },
    {
        id: 2,
        title: 2025
    }
]
/* //Criando a lista de botões de acordo com a quantidade de Anos
let idInicial = 1;
let botoes = [
    {
    id: idInicial,
    title: AnosLista[idInicial-1][1]
    },
]

//Crescendo o array de botoes de acordo com a qtd de anos
while (botoes.length < AnosLista.length) 
{
    botoes.push(
    {
        id: (idInicial + 1),
        title: AnosLista[idInicial+1][1]
    },
    )
    idInicial = idInicial+1;
} */

export function returnBotao(){
    return(AnosListaArray)
}

export function returnAulasLista(){
    return(AnosLista)
}