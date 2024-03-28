import React from "react";
import Perfil from "./imagens/marta.jpeg"
import Git from "./imagens/github.png"
import Linkedin from "./imagens/linkedin.png"
import * as S from "./Style.jsx"


//importar as outras imagens




function Inicio() {
    return (

        <S.SectionInicio>
            <S.perfil_foto src={Perfil} alt="Foto do perfil" />

            <S.ContainerDivs> 
                <S.BoxInicio>
                    <h2> Olá! Me chamo Marta Cezario,</h2>
                    <h2>Venham cantarolar pelo meu portfólio.</h2>
                </S.BoxInicio>

                <S.BoxInicio2>
                    <img src={Git} alt="logo do Github" />
                    <img src={Linkedin} alt="logo do linkedin" />
                </S.BoxInicio2>
            </S.ContainerDivs>

        </S.SectionInicio>
    )
}

export default Inicio