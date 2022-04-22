

export default function Input(props)
{
    
 
    
    return(
     <div className="flex m-10 justify-center align-center">
        <div class="flex items-center border-b border-pink-500 py-2">
            <form className="d-flex  max-w-sm">
    
                <input 
                type="text" 
                placeholder= "Digite um nome"
                value = {props.entrada}
                onChange = {props.funcaoAoTrocar} />
        
                <button 
                    class="flex-shrink-0 bg-pink-800 hover:bg-pink-700 border-pink-900 hover:border-pink-700 text-sm border-4 text-white py-1 px-2 rounded" 
                    type="button"
                    onClick={props.funcaoClicarEmAlgo}> {props.nomeDoBotao}</button>

            </form>
        </div>
            
    </div>

         
      
    )
}