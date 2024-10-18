// Blog.js

const Blog = ({blogss, title, handleDel}) => {
   
    return (
        <>
            {blogss.map((item) => (
               
                <div key={item.id} className="m-0 mx-auto w-full bg-slate-600 text-white flex items-center justify-center flex-col p-4 my-2">{title}
                   <div  className="bg-slate-600 ">
                      <h1>{item.title} {item.id} - {item.name}</h1>
                      <div className="w-full flex items-center justify-center">
                           <button className="bg-green-500 text-white w-20 rounded" onClick={()=> handleDel(item.id)}>delete</button>
                      </div>
                   
                    </div>
                </div>
                
                
              
              
               
                
                
            ))}
        </>
    );
};

export default Blog;
