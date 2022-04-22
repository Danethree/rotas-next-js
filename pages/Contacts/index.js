
import Button from "../../Components/Button";
import Footer from "../../Components/Footer";
import Input from "../../Components/Input";
import {useRouter} from 'next/router';

import React, { useState } from 'react';
import Form from "../../Components/Form";



export default function Contacts(){
  const router = useRouter();
  const [seuNome,setSeunome] = useState('');
  const [nomeForm2,setNomeForm2] = useState('');
  const [idade,setIdade] = useState('');
  const handleClick = ()=>
  {
      router.push(`/Contacts/${seuNome}/nome`)
  }
  const handleClickForm2 = ()=>
  {
      router.push(`/Contacts/nome/params?nome=${nomeForm2}&idade=${idade}`)
  }
  const handleChange = (e)=>
    {
        setSeunome(e.target.value);

    }
    const handleChangeForm2 = (e)=>
    {
        setNomeForm2(e.target.value);
    }
    const handleChangeFormIdade = (e)=>
    {
        setIdade(e.target.value);
    }
    return(
        <>
            <div className="flex-col justify-center align-center">
      
            <h1 className="text-3xl font-bold m-10 text-center">
            Esta é a página Contatos
            </h1>

      <p class="text-lg font-light leading-relaxed mt-6 mb-4 text-pink-800 text-center">
     Parece que há alguns telefones por aqui:</p>
   <div className="m-10 text-lg text-gray-800 text-center">
   <ul>
         <li>
            Mr Zero (00)0000-0000
         </li>
         <li>
             Mr Binary (10)1010-0010
         </li>
         <li>
            Mr Z (99)9999-9999
         </li>
     
    </ul>

    
    <>
      <h1 className="text-2xl font-bold m-10 text-center">
        Rota dinâmica:
      </h1>
      <p className="text-lg text-pink-800 text-center">
        Bem vindo à seção
        <span className="italic ml-1 font-bold">
          rota dinâmica!
        </span> <br/> 
        Para começar preencha o campo de texto:
      </p>
    
        <Input 
        funcaoClicarEmAlgo = {handleClick}
        nomeDoBotao = "Abrir nome"
        funcaoAoTrocar = {handleChange}
        entrada = {seuNome}
        descricao = "Insira seu nome"
      />

    </>
 
    <>
     <h1 className="text-2xl font-bold m-10 text-center">
        Uso de Params:
      </h1>
      <p className="text-lg text-pink-800 text-center">
        Bem vindo à seção 
        <span className="italic ml-1 font-bold">
          Uso de params
        </span>!<br/> 
        Para começar preencha o campo de texto:
      </p>
     
    <Form
      tituloform = "Seu nome:"
      descricao = "Insira o seu nome"
      entrada = {nomeForm2}
      funcaoAoTrocar = {handleChangeForm2}
      tituloform2 = "Sua idade:"
      descricao2 = "Insira a sua idade"
      entrada2 = {idade}
      funcaoAoTrocar2 = {handleChangeFormIdade}
      funcaoClicarEmAlgo = {handleClickForm2}
      nomeDoBotao = "Mostrar dados"
    />
    </>
    

    
   </div>
    
    <p class="text-lg font-light leading-relaxed mt-6 mb-4 text-pink-800 text-center">
        Se quiser ir à outra página, aperte um dos botões de redirecionamento de rotas:
     </p>
     
    <div>
  
    <div className = " flex justify-center align-center m-10">
    <Button 
        name = {<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>}
        addressRef = "/"
    />
      <Button 
          name="Sobre nós"
          addressRef = "/About"
    /> 
    </div>
   


    </div>
  </div>
  <footer>
        <Footer/>
      </footer>
        </>
    )
}