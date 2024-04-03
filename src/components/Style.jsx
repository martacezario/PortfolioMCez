import styled, { keyframes } from "styled-components";

//----Estilização da Navegação

export const Nav = styled.nav`
  background-color: #121b1c;
`;

export const Ul = styled.ul`
  height: 20vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;

  a {
    font-size: 1.5rem;
    text-decoration: none;
    color: #4b19a5;
  }

  a:hover {
    color: #cb53c2;
    transition: width 2s, height 4s;
  }

  text {
    background: rgb(238, 174, 202);
    background: radial-gradient(
      circle,
      rgba(238, 174, 202, 1) 0%,
      rgba(148, 187, 233, 1) 100%
    );
    font-weight: bold;
  }
`;

//----Estilização do Início

export const SectionInicio = styled.section`
  height: 80vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* padding: 3rem; */
  h2 {
    font-size: 50px;
    color: #4b19a5;
  }
`;

const typingAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 25ch;
  }
`;

export const Job = styled.p`
  overflow: hidden;
  white-space: nowrap;
  border-right: 4px solid;
  animation: ${typingAnimation} 3s steps(25, end);
  font-size: 25px;
  color: #00ff95;
`;
export const perfil_foto = styled.img`
  width: 15vw;
  border-radius: 50%;
  border-width: 10px;
  border-style: solid;
  color: #4b19a5;
  margin-bottom: 8em;
`;
export const ImgGit = styled.img`
  width: 40px;
`;

export const ImgLinkedin = styled.img`
  width: 40px;
`;
export const ContainerDivs = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 65vh;
`;

export const BoxInicio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const BoxInicio2 = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

// estilização do Sobre

export const SectionAbout = styled.section`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  margin-top: 5rem;

  
`

export const ImgDesenho = styled.img`
  width: 20vw;
  border-left: 5px dotted #4b19a5;
  border-top: 5px dotted #4b19a5;
  padding: 10px;
`

export const Button = styled.button`
  width: 5vw;
  height: 5vh;

  
`
export const TituloSobre = styled.h2`
  color: rgb(254, 254, 255);

  
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export const DivProfissional = styled.div`
  width: 50vw;
 
`;
export const Ptexto = styled.p`
  color: rgb(254, 254, 255);
  & span {
    color: #00ff95;
  }
`;


export const DivButtonCV = styled.div`
  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
  display: flex;
  width: 40vw;
  justify-content: center;

  & button {
    
    color: #00ff95;
   
    border-color: #00ff95;
    cursor: pointer;
    border-radius: 10px;
    width: 10vw;
    transition: background-color 0.3s, color 0.3s; /* Adiciona uma transição suave */

    &:hover {
      background-color: #00ff95;
      color: #121b1c;
    }
  }


`

