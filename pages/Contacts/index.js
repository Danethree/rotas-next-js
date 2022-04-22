
import Button from "../../Components/Button";
import Footer from "../../Components/Footer";
import Input from "../../Components/Input";


export default function Contacts(){
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
      Bem vindo à rota dinâmica! <br/> Para começar preencha o campo de texto:
    </p>
    <div className="flex m-10 justify-center align-center">
     <Input/>
    </div>

    </>
 
    
    

    
   </div>
    
    <p class="text-lg font-light leading-relaxed mt-6 mb-4 text-pink-800 text-center">
        Se quiser ir à outra página, aperte um dos botões de redirecionamento de rotas:
     </p>
     
    <div>
  
    <div className = " flex justify-center align-center m-10">
    <Button
       
          name={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>}
          adressRef = "/"
    />
      <Button 
          name="Sobre nós"
          adressRef = "/About"
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