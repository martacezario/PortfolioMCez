import React from "react";
import Perfil from "./imagens/marta.jpeg";
import Linkedin from "./imagens/linkedinicon.png";
import Instagram from "./imagens/instagramicon.png";
import Github from "./imagens/githubicon.png";

import * as S from "./Style.jsx";

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
          <a href="https://github.com/martacezario" target="_blank">
           
            <S.ImgGit src={Github} alt="logo do Github" />
          </a>
          <a
            href="https://www.linkedin.com/in/martacezariocez/ "
            target="_blank"
          >
           
            <S.ImgLinkedin src={Linkedin} alt="logo do linkedin" />
          </a>
          <a href="https://www.instagram.com/itsmegeekglam/" target="_blank">
            
            <S.ImgInstagram src={Instagram} alt="logo do instagram" />
          </a>
        </S.BoxInicio2>
      </S.ContainerDivs>
    </S.SectionInicio>
  );
}

export default Inicio;
