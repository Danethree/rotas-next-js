

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
                name={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>}
                adressRef = "/Contacts"/>
               
               </div>
            <Footer/>
        </>
    )
    }