import Button from "../../Components/Button";
import Footer from "../../Components/Footer";



export default function About()
{

   
    return(
        <><div className="flex-col justify-center align-center">
      
          <h1 className="text-3xl font-bold underline text-center">
          Esta é a página About
          </h1>
  
          <p class="text-lg font-light leading-relaxed mt-6 mb-4 text-pink-800 text-center">
         Clique em um dos botões abaixo:
        </p>
        <div>
        <Button 
              name="Home"
              adressRef = "/"
        />
          <Button 
              name="Contatos"
              adressRef = "/Contacts"
        /> 
       
       
 

        </div>
       
      </div>
       <footer>
       <Footer/>
     </footer></>
    )
}