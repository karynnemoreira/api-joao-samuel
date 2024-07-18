import { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from "./style.jsx"
import {GlobalStyle} from "./Global.jsx"
import Vnw from "./assets/vnw.png"


export default function App() {

  const [data, setData] = useState([]);

  const getData = async () => {
    const resp = await axios.get('https://school-project-hxyp.onrender.com/colaboradores');
    setData(resp.data)
    console.log(resp)
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
     <GlobalStyle />
    
<S.Navegacao>
  <img src={Vnw} alt="" />
  <ul> 
  <li>Colaboradores</li>
  <li>Alunos</li>
  <li>Cadastrar</li>
  </ul>
</S.Navegacao>

    <S.Container>
         
      {data.map((item) => (
          <S.Cadastro>
            
          {/* <h3>{item.id}</h3> */}
          <img src={item.foto} alt="" />
          <h2>{item.nome} </h2>
          <h3>{item.email}</h3>
          <h3>{item.cpf}</h3>
          <h3>{item.cargo}</h3>
        </S.Cadastro>
      ))}
    </S.Container>
    </>
  )
}