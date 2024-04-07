import React from "react";
import projeto1 from "./imagens/pet.png";
import projeto2 from "./imagens/manger.png";
import projeto3 from "./imagens/lapizza.png";
import projeto4 from "./imagens/contador.png"
import Carousel from "nuka-carousel";
import * as S from "./Style.jsx";

function Projetos() {
  return (
    <S.SectionProjetos>
      <S.DivProjetos>
        <S.Ul>
           
          <li>
          <h3>Projeto 1</h3>
          <p>jsjsnjsns</p>
            <S.ImgProjeto1 src={projeto1} alt="" />
          </li>
          <li>
          <h3>Projeto 2</h3>
          <p>jsjsnjsns</p>
            <S.ImgProjeto2 src={projeto2} alt="" />
          </li>
          <li>
          <h3>Projeto 3</h3>
          <p>jsjsnjsns</p>
            <S.ImgProjeto3 src={projeto3} alt="" />
          </li>
        </S.Ul>
      </S.DivProjetos>

      <S.DivProjetos2>
        <S.Ul>
          <li>
          <h3>Projeto 1</h3>
          <p>jsjsnjsns</p>
            <S.ImgProjeto4 src={projeto4} alt="" />
          </li>
          <li>
          <h3>Projeto 1</h3>
          <p>jsjsnjsns</p>
            <S.ImgProjeto2 src={projeto2} alt="" />
          </li>
          <li>
          <h3>Projeto 1</h3>
          <p>jsjsnjsns</p>
            <S.ImgProjeto3 src={projeto3} alt="" />
          </li>
        </S.Ul>
      </S.DivProjetos2>
    </S.SectionProjetos>
  );
}

export default Projetos;
