import React, { useState, useEffect } from "react";
import Javascript from "./imagens/iconjs.svg";
import CSS from "./imagens/cssicon.svg"
import Html from "./imagens/htmlicon.svg"
import ReactJs from "./imagens/reacticon.svg"

import * as S from "./Style.jsx";
import animeImage from "./imagens/desenho.jpeg";

function Sobre() {

  const[anime,setAnime] = useState (animeImage)
  const [marca, setMarca] = useState ()

  useEffect(()=>{
    if(marca === animeImage ){
   
    }else if (marca === CSS){
     
    }else if(anime === Html){
      
    } else if(anime === ReactJs){

    }
    
      })


  return (
    <>
      <S.SectionAbout>
        <S.ImgDesenho src={anime} alt="" />
        

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

          <S.Divtech>

          <S.ImgJS onClick={()=>{setAnime(Javascript)}}src={Javascript} alt="" />
          <S.ImgCss onClick={()=>{setAnime(CSS)}}src={CSS} alt="" />
          <S.ImgHtml onClick={()=>{setAnime(Html)}}src={Html} alt="" />
          <S.ImgReactJs onClick={()=>{setAnime(ReactJs)}}src={ReactJs} alt="" />
           
         
          </S.Divtech>

        </S.DivProfissional>

     

        
      </S.SectionAbout>

      <S.DivButtonCV>
      <S.Button>DOWNLOAD CV</S.Button>

      </S.DivButtonCV>
      
      
    </>
  );
}

export default Sobre;
