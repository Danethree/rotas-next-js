

import {useRouter} from 'next/router'
export default function params() {

    const route = useRouter();
    const cod = route.query.id;
    const seuNome = route.query.seuNome;

    return (<>
    <h1>Rota params: {cod} {seuNome}</h1>
    
    
    </>)
}