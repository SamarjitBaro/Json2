import { useState } from "react";
import { Blog, Pend } from './blog'; // This imports the named exports correctly

import { useEffect } from "react";
import useFetch from "./Chook";




function App2(){
    const {data: blogs, pending, error} = useFetch("https://dummyjson.com/products");
 



    return (
        <>
        {error && <div className="m-48">{error}</div>}
        {pending && <Pend></Pend>}
        {blogs &&< Blog blogss={blogs} title="BLOGS"/>} 
        
       
        
        </>
       

    )
}











export default App2