import React from "react"
import Inicio from "./inicio.jsx"
import Sobre from "./sobre.jsx"
import Projetos from "./projetos.jsx"
import { BrowserRouter,Routes,Route, Link} from "react-router-dom"
import * as S from "./Style.jsx"

//BrowserRouter será sempre o primeiro da fila, a função dele é ser a caixa que vai englobar todo o caminho
//Routes dentro dessa cxa é onde começaremoa a arquitetar os caminhos
//Route: <Route/> s+o tem fechamento. específico para cara rota
//Link Quando eu clicar em um lugar específico me leve para outro lugar "dentro da minha própria página". O Link vai dentro da li.



function Navigation() {
    return (
        <>
            <BrowserRouter>
                <S.Nav>
                  
                    <S.Ul>
                    <text>
                    {'<marta/>'}
                   </text>
                        {/* to = para, um link para o sobre, projetos e início. Me leve para tal lugar */}

                        <li> <Link to="/"> Home </Link>  </li>
                        <li> <Link to="/Sobre"> Sobre </Link>   </li>
                        <li> <Link to="/Projetos"> Projetos </Link>  </li>
                       
                    </S.Ul>
                </S.Nav>


                <Routes>
                    {/* path = caminho: Configuração dos dois, Link="/Sobre" com Route path="Sobre" */}
                    {/* element: configura para qual component quero ir element={ativa o componente <Sobre />} */}

                    <Route path="/" element={<Inicio />} />
                    <Route path="Sobre" element={<Sobre />} />
                    <Route path="Projetos" element={<Projetos />} />
                  

                </Routes>

            </BrowserRouter>

        </>

    )
}
export default Navigation