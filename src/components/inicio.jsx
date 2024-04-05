import React from "react";
import Perfil from "./imagens/marta.jpeg"
import Github from "./imagens/github.png"
import Linkedin from "./imagens/linkedin.png"
import facebook from "./imagens/iconfb.png"
import * as S from "./Style.jsx"



function Inicio() {
    return (

        <S.SectionInicio>
            <S.perfil_foto src={Perfil} alt="Foto do perfil" />

            <S.ContainerDivs> 
                <S.BoxInicio>
                    <h2> Olá! 👋🏾 </h2>
                       <h2> Me chamo Marta Cezario,</h2>
                    <S.Job>Desenvolvedora Front-end!</S.Job>
                </S.BoxInicio>

                <S.BoxInicio2>
                    <S.ImgGit src={facebook} alt="logo do Github" />
                    <S.ImgLinkedin src={Linkedin} alt="logo do linkedin" />
                </S.BoxInicio2>
            </S.ContainerDivs>

        </S.SectionInicio>
    )
}

export default Inicio