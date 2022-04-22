

import {useRouter} from 'next/router';
export default function nome(){
    
    const router = useRouter();
    const meuId = router.query.id;


    return(
        <div>
            <h1 className="text-3xl text-center text-bold text-pink-800 m-10">
                Insira o seu nome na url dessa forma: 
                <span className="font-bold italic ml-1 text-pink-600">
                    Contacts/seuNome/nome
                </span>
            </h1>
            <p className = " text-xl m-10 text-black-800 font-size-600">Bem vindo(a), 
            <span className = "text-xl underline font-bold ml-2 text-black-800">
                {meuId}
            </span>!
            </p>
        </div>
    )
    }