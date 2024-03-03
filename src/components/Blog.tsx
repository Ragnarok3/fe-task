
import arrow from '/arrow.svg';

export type BlogPost = {
    id: string;
    image: string;
    title: string;
    description: string;
  };
  
  export default function Blog({
    image,
    title,
    description,
  }: BlogPost) {
   
   
  
    return (
       <>
        <img src={image} alt={title} class="images" />
       
           
        
        <div className="blog-content">
        
            <h3 className="title">{title}</h3>
          
            <p className="desc">{description}</p>

            <img src={arrow} alt="arrow" className="arrow"/>
        
          
        </div>
       </>
    
    );
  }