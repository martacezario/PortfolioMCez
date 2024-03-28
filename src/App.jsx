import React from "react";
import {createGlobalStyle} from "styled-components"
import Navegation from "./components/navegation.jsx"

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: "Calligraffitti", cursive;
    


  }
`

function App(){
  return(

    <>

    <Navegation/>
    <GlobalStyle/>
    
    </>
  )
}


export default App