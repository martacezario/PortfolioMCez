import React from "react";
import {createGlobalStyle} from "styled-components"
import Navegation from "./components/navigation.jsx"

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: "Poppins", sans-serif;
    background-color: #121B1C;
    overflow: hidden;
    


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