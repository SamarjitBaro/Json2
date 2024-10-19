import  { useEffect, useState} from 'react'


const useFetch = (url)=>{
    const [data, setBlogs]  = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch(url)
        .then(res=>{
           
            if(!res.ok){
                throw new Error(`"Check the url -- ${res.url}"`);
                
            }
            return res.json()})
        .then( data => {setBlogs(data.products)
            console.log(data.products)
            setPending(false);
            setError(null);
        }
    ).catch(err=>{
        setError(err.message);
        setBlogs(null)
        setPending(false);
    })
       
       
     },[url])





    return{data, pending, error}
}

export default useFetch;