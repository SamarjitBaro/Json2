import { useState } from "react";
import { Blog, Pend } from './blog'; // This imports the named exports correctly

import { useEffect } from "react";




function App2(){
    const [blogs, setBlogs]  = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);
 


     useEffect(()=>{
        fetch("https://dummyjson.com/products")
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
       
       
     },[])

    return (
        <>
        {error && <div className="m-48">{error}</div>}
        {pending && <Pend></Pend>}
       { blogs &&< Blog blogss={blogs} title="BLOGS"/>} 
        
       
        
        </>
       

    )
}











export default App2