import { useState } from "react";
import Blog from "./blog";
import { useEffect } from "react";



function App2(){
    const [blogs, setBlogs]  = useState([
        {title: "number" , name: "Samar", id: 1},
        {title: "number" , name: "rahul", id: 2},
        {title: "number" , name: "adam", id: 3}
     ]);
     const [first, setfirst] = useState("Test1")


     useEffect(()=>{
        console.log(first)
     },[first])

const deletion =(id) =>{
    const blogD = blogs.filter(items => items.id !== id);
    setBlogs(blogD);
}
    return (
        <>
        <Blog blogss={blogs} title="BLOGS" handleDel={deletion}/>
        <button className="bg-slate-700 text-white" onClick={()=> setfirst("Test2")} >Click</button>
        <h1>{first}</h1>
        
        </>
       

    )
}











export default App2