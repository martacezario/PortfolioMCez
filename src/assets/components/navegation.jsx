import React from "react"
import Inicio from "./inicio"
import Sobre from "./sobre"
import Projetos from "./projetos"
import { BrowserRouter,Routes,Route, Link} from "react-router-dom"

//BrowserRouter será sempre o primeiro da fila, a função dele é ser a caixa que vai englobar todo o caminho
//Routes dentro dessa cxa é onde começaremoa a arquitetar os caminhos
//Route: <Route/> s+o tem fechamento. específico para cara rota
//Link Quando eu clicar em um lugar específico me leve para outro lugar "dentro da minha própria página". O Link vai dentro da li.





export default function Navegation(){
    return(
        <BrowserRouter>
        <nav>
            <ul>

                <li> <Link to="/"> Início</Link></li>
                <li> <Link to="/Sobre"> Sobre</Link></li>
                <li> <Link to="/Projetos"> Projetos</Link></li>
            </ul>

        </nav>

        <Routes>

        <Route path="/" element={Inicio}/>
        <Route path="/Sobre" element={Sobre}/>
        <Route path="/Projetos" element={Projetos}/>
        



        </Routes>
        </BrowserRouter>
    )
}