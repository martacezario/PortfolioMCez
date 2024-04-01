import styled from "styled-components"

//----Estilização da Navegação

export const Nav = styled.nav`
background-color: #EFF1F0;
`

export const Ul = styled.ul`
height: 20vh;
display: flex;
justify-content: space-evenly;
align-items: center;
list-style: none;

a{
font-size: 1.5rem;
text-decoration: none;
color: #7E5DCA;
}
`

//----Estilização do Início

export const SectionInicio = styled.section`
 height:80vh ; 
display: flex;
justify-content: space-evenly;
align-items: center;
/* padding: 3rem; */
background-color: #EFF1F0;


img{
    border-radius: 50% ;
    border-width: 15px;
    border-style: solid;
    color: #7E5DCA;
    margin-bottom: 8em;
    
}

h2{
    font-size:50px;
    color: #7E5DCA;
}

h4{
    font-size:30px;
    color: #1C1C1C;
}
`

export const perfil_foto = styled.img`
    width: 15vw;

`

export const ContainerDivs = styled.section`
display: flex;
flex-direction: column;
justify-content: space-evenly;
height:40vh ; 

`


export const BoxInicio = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`


export const BoxInicio2 = styled.div`
display: flex;
justify-content: space-evenly;
`

// estilização do Sobre
