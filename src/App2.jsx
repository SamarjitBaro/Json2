import { useState } from "react";
import { Blog, Pend } from './blog'; // This imports the named exports correctly

import { useEffect } from "react";




function App2(){
    const [blogs, setBlogs]  = useState(null);
    const [pending, setPending] = useState(true);
 


     useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then(res=>{ return res.json()})
        .then( data => {setBlogs(data.products)
            console.log(data.products)
            setPending(false);
        }
    );
       
       
     },[blogs])

    return (
        <>
        {pending && <Pend></Pend>}
       { blogs &&< Blog blogss={blogs} title="BLOGS"/>} 
        
       
        
        </>
       

    )
}











export default App2