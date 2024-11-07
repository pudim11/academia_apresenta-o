import React from "react";
import { useState } from "react";

const AulasLista = [
    [1, '07h00', '08h00', '20'],
    [2, '08h00', '09h00', '10'],
    [3, '09h00', '10h00', '15'],
    [4, '19h00', '20h00', '30'],
    [5, '20h00', '21h00', '25'],
    [6, '21h00', '22h00', '12'],
    ]
//Criando a lista de botões de acordo com a quantidade de Aulas
let idInicial = 1;
let botoes = [
    {
    id: idInicial,
    title: 'Aula ' + idInicial
    },
]

//Crescendo o array de botoes de acordo com a qtd de aulas
while (botoes.length < AulasLista.length) 
{
    botoes.push(
    {
        id: (idInicial + 1),
        title: 'Aula ' + (idInicial+1)
    },
    )
    idInicial = idInicial+1;
}

export function returnBotao(){
    return(botoes)
}

export function returnAulasLista(){
    return(AulasLista)
}