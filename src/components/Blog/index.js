import React, {useEffect,  useState} from 'react';
import './blogStyles.css';
import {Link, Redirect} from 'react-router-dom';

const Blog = () =>{
  const [blog, setBlog] = useState([])

  useEffect(()=>{
    fetch(`https://agile-tor-34853.herokuapp.com/blog`)
    .then(res => res.json())
    .then(res=> {setBlog(res)} )
  }, [])

    return(
        <div className="blog">
          <div className="" >
              <h2 className="">The Latest Industry Insights</h2>
              <p className="">Increase the amount of patients on your waiting queue with expert websites services built specifically for the 21st century healthcare consumer.</p>
         </div>
         <div className="blogposts">
          { blog.length ? blog.map((blog)=>{
                return(
                  <div className="post" key={blog.url} style={{backgroundImage:"url(" + blog.imgUrl + ")"}}>
                    <Link className="link" to={`/blog/${blog.url}`}>   
                        <h3 className="title">{blog.title}</h3>
                        <p className='postbody'>{blog.body}</p>
                    </Link >
                  </div>
                )
              })
              :
                <div className="loaddiv">
                  <p className="loadtext">Loading...</p>
                </div>
           }
           </div>
        </div>
    )
}




export default Blog
