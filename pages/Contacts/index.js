
import Button from "../../Components/Button";
import Footer from "../../Components/Footer";


export default function Contacts(){
    return(
        <>
            <div className="flex-col justify-center align-center">
      
            <h1 className="text-3xl font-bold underline text-center">
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
   </div>
    
    <p class="text-lg font-light leading-relaxed mt-6 mb-4 text-pink-800 text-center">
        Aperte um dos botões:
     </p>
     
    <div>
  
    <div className = " flex justify-center align-center m-10">
    <Button
       
          name="Back"
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