import Link from 'next/link'

export default function Links(props)
{
    return(
        <>
         <Link href={props.addressRef}>
      <li className = "text-lg underline text-pink-600 cursor-pointer hover:text-pink-800">
          {props.description}
          </li>

      </Link>
    
        </>

    )
}