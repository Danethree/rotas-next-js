

import Link from 'next/link';
import {useRouter} from 'next/router';
import Button from '../../../Components/Button';
import Footer from '../../../Components/Footer';
export default function nome(){
    
    const router = useRouter();
    const meuId = router.query.id;


    return(
        <>
               <h1 className = " text-3xl text-center text-bold text-pink-800 m-10">Bem vindo(a), 
            <span className = "text-3xl  font-bold ml-2 text-black-800">
                {meuId}
            </span>!
            </h1>
           
           <div className = "flex justify-center align-center text-center">
           <p className="text-xl m-10 text-black-800 font-size-600">
                Esta é a página de rotas dinâmicas!<br/> Insira o seu nome na url dessa forma: 
                <span className="font-bold italic ml-1 text-pink-600">
                    Contacts/seuNome/nome
                </span>
                <br/> 
                Você verá o mesmo resultado se<b> inserir o nome no campo de texto em</b> :  <span className=" underline font-bold italic ml-1 text-pink-600">
                    <Link href = "/Contacts">Contatos</Link>
                </span>
            </p>
           </div>
               <div className = "flex justify-center align-center">
               <Button
                    name={<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>}
                    addressRef = "/Contacts"
               />
                <Button
                    name={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>}
                    addressRef = "/"
               />

               
               

               
               </div>
            <Footer/>
        </>
    )
    }