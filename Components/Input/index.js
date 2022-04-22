
import React, { useState } from 'react';
import {useRouter} from 'next/router';


export default function Input()
{
    const [seuNome,setSeunome] = useState('');
     const router = useRouter();
    const handleClick = ()=>
    {
        router.push(`/Contacts/${seuNome}/nome`)
    }
    const handleChange = (e)=>
    {
        setSeunome(e.target.value);
    }
    return(
        <form className="d-flex  max-w-sm">
             <div class="flex items-center border-b border-pink-500 py-2">
                <input 
                type="text" 
                placeholder= "Digite um nome"
                value = {seuNome}
                onChange = {handleChange}
                ></input>
             <button class="flex-shrink-0 bg-pink-800 hover:bg-pink-700 border-pink-900 hover:border-pink-700 text-sm border-4 text-white py-1 px-2 rounded" 
             
             type="button"
             onClick={handleClick}>
                Abrir nome
            </button>

          
             </div>

         
        </form>
    )
}