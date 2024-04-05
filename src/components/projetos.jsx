import React from "react";
import projeto1 from "./imagens/projeto1.png"
import projeto2 from "./imagens/projeto2.png"
import Carousel from "nuka-carousel"





function Projetos (){

    const desafios = [
        {imagem: projeto1 , titulo: "Projeto UM", link: "" , descricao: "blblbablabla"},
        {imagem: projeto2, titulo: "", link: "" , descricao: ""},
       
    ]

   

    return(
        
        <section>
            


            

           {desafios.map ((item)=>(

            <div>

                <a href={item.link} target="_blank">   <img src={item.imagem} alt={item.titulo} /> </a>

                <img src={item.imagem} alt="" />
                <h2>{item.titulo}</h2>


            </div>
            

           ))} 
        </section>
    )
}

export default Projetos