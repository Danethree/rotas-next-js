

import {useRouter} from 'next/router'
import Button from '../../../Components/Button';
export default function params() {

    const route = useRouter();
    const nome = route.query.nome;
    const idade = route.query.idade;

    return (<>
      <h1 className = " text-3xl text-center text-bold text-pink-800 m-10">Página Params
     </h1>
    <p className = "text-lg font-light leading-relaxed mt-6 mb-4 text-pink-800 text-center">Seu nome é 
    <span className = "mx-1 font-bold">
        {nome}
    </span>
    e você tem
    <span className = "mx-1 font-bold">
        {idade}
    </span>
    anos. Prazer em conhecê-lo(a)!
    </p>
    <div  className = "flex justify-center align-center">
    <Button 
        name = {<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>}
        addressRef = "/Contacts"
    />  
    <Button 
        name = {<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>}
        addressRef = "/"
    />

    </div>
  
    </>)
    
}