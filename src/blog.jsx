// Blog.js

export const Blog = ({blogss, title}) => {
   
    return (
        <>
            {blogss.map((item) => (
               
                <div key={item.id} className=" m-0 mx-auto w-80 bg-green-500 rounded text-white flex items-center justify-center h-52 flex-col p-4 my-2">
                
                    <h1 className="underline">{title}</h1>
                   <div className=" flex flex-col items-center" >
                      <h2 className=""> {item.id}: {item.title}  </h2>
                      <h3>{item.category}</h3>
                      
                   
                    </div>
                </div>
                
                
              
              
               
                
                
            ))}
        </>
    );
};
export const Pend = () => {
    return (
        <div className=" bg-slate-500 w-20 flex justify-center text-white rounded mt-6 m-0 mx-auto">Loading...</div> // Customize this message if needed
    );
};




