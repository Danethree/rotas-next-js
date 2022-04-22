



export default function Form(props){
    return(
        <div className="flex m-10 justify-center align-center">
        <div class="flex-col items-center  border-pink-500 py-2">

            <form className="d-flex  max-w-sm">

              <div className="mb-4">
                <label className="block text-pink-700 text-m font-bold mb-2" for="nome">
                    {props.tituloform}
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text" 
                    placeholder= {props.descricao}
                    value = {props.entrada}
                    onChange = {props.funcaoAoTrocar}
                />
              </div>

              <div className="mb-6">
                <label className="block text-pink-700 text-m font-bold mb-2" for="nome">
                    {props.tituloform2}
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="number" 
                    placeholder= {props.descricao2}
                    value = {props.entrada2}
                    onChange = {props.funcaoAoTrocar2}
                />
              </div>

            
        
                <button 
                    class="bg-pink-800 hover:bg-pink-700 border-pink-900 hover:border-pink-700 text-sm border-4 text-white py-1 px-2 rounded" 
                    type="button"
                    onClick={props.funcaoClicarEmAlgo}> {props.nomeDoBotao}</button>

            </form>
        </div>
            
    </div>
    )
}