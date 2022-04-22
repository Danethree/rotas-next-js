


export default function Button(props)
{
    return(

    <a href = {props.adressRef}> 
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-2 py-4 ">
            {props.name}
        </button>
    </a>
    )
}