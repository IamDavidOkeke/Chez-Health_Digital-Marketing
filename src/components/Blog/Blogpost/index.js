import React, {useEffect,  useState} from 'react';
import './blogPostStyles.css';
import david_okeke  from './Chez-Healthcare-Digital-Marketing-david-okeke.jpg';

const BlogPost = (props) =>{
  const [blogPost, setBlogPost] = useState(null)

  const url = props.match.params.url
  
  
  useEffect(()=>{
    fetch(`https://agile-tor-34853.herokuapp.com/blogPost/${url}`)
    .then(res => res.json())
    .then(res=> {setBlogPost(res)
    console.log(res)} )
  }, [])

    return(
        <div className="BlogPost">
          { blogPost ? 
             (
                  <div className="blogpost" >
                    <h1 className="">{blogPost[0].title}</h1>
                     <img className="" src={blogPost[0].imgUrl} />
                     <p className="body">{blogPost[0].body}</p>
                     <div className=''>
                        <img className="img" src={david_okeke} />
                        <p className="">David Okeke</p>
                        <p className="">Doctor, Chez Inc<div>Google certified digital marketer</div></p>
                     </div>
                  </div>
                  
                )
              :
                <div className="loaddiv">
                  <p className="loadtext">Loading...</p>
                </div>
              }
              
        </div>
    )
}




export default BlogPost
