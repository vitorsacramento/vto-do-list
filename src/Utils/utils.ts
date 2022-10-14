import React from "react";

export const formatDate = (date: Date) => {
    date = new Date();
    let dia = date.getDate().toString();
    let mes = date.getMonth().toString();
    const ano = date.getFullYear();
    const hora = date.getHours();
    const minutos = date.getMinutes();

    if(parseInt(dia) < 10) {
        dia = '0' + dia;
    }

    if (parseInt(mes) < 10) {
        mes = '0' + mes;
    }
    return `${dia}/${mes}/${ano} - ${hora}h${minutos}`;
}