import { useEffect, useState } from "react"
import axios from "axios";

import { Link } from "react-router-dom";

export default function AfricaList(){
   var uniqueId = 1 

const[list, setList] = useState([]);
useEffect(()=>{
axios.
get('http://127.0.0.1:8000/api/')
.then((response)=>{
  setList(response.data);

})
.catch((error)=>{
console.error(error);
})
}, [])

    return(
 
 <section className="content">
<h2>EAST-AFRICA</h2>


<div className="list">

  
    {list.map((post, pk)=>(
      <div className="post card" key={uniqueId++}> 
 <h2 id="title">{post.title}</h2>
  <p id="date">by {post.author} | {post.date}</p>
 
  <Link to={`/afrodetail/${uniqueId}/`} >
                        Read More
                    </Link>
            </div>
    ))}
 

  </div>
  </section>
    )}