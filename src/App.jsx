import React from "react";
import {createGlobalStyle} from "styled-components"
import Navegation from"./assets/components/navegation.jsx"

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    


  }
`

function App(){
  return(

    <>

    <Navegation/>
    <GlobalStyle/>
    <h1>ola</h1>
    </>
  )
}


export default App