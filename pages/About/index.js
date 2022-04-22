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
          name = {<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>}
          addressRef = "/"
        />
          <Button 
              name="Contatos"
              addressRef = "/Contacts"
        /> 
       
       
 

        </div>
       
      </div>
       <footer>
       <Footer/>
     </footer></>
    )
}