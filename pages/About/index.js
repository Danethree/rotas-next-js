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
        <div className="flex justify-center align-center">
        <Button 
              name={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>}
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