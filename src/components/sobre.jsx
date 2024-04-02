import React from "react";
import Vnw from "./imagens/vnw.png";
import Javascript from "./imagens/javascript.png";
import * as S from "./Style.jsx";
import Desenho from "./imagens/desenho.jpeg";

function Sobre() {
  return (
    <>
      <S.SectionAbout>
        <S.ImgDesenho src={Desenho} alt="" />
        

        <S.DivProfissional>
          <S.TituloSobre>Desenvolvimento Front-End</S.TituloSobre>

          <S.Ptexto>
            Cursando Análise e Desenvolvimento de
            Sistemas. Atualmente vivendo em Setúbal, Portugal. Também sou Bacharel em
            Marketing em transição de carreira. 
            <p>
            Em tecnologia possuo
            conhecimento intermediário de <span>HTML, CSS, Javascript, React, Git,
            NodeJs, AWS Cloud.</span> 
            <p>Possuo perfil analítico, muito foco para
            resolução de problemas e organização. Busco uma aoportunidade para atuar como desenvolvedora.</p>
                </p>


          </S.Ptexto>
        </S.DivProfissional>

        
      </S.SectionAbout>

      <S.DivBotãoCV>
      <S.Button>CURRÍCULO</S.Button>

      </S.DivBotãoCV>
      
      
    </>
  );
}

export default Sobre;
