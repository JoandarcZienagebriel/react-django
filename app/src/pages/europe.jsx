import { use, useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";
export default function Europe(){
const [list, setList] = useState([]);
var uniqueId = 1
useEffect(()=>{
    axios.
get(`${import.meta.env.VITE_API_URL}/api/europe`)
.then((response)=>{
setList(response.data)
})
.catch((error)=>{
    console.log(error);
})
}, []);


    return(
<section class="content">
<h2>EUROPE</h2>


<div class="list">

  
    {list.map((post)=>(
      <div class="post card" key={uniqueId++}> 
 <h2 id="title">{post.title}</h2>
  <p id="date">by {post.author} | {post.date}</p>
 
  <Link to={`/eurodetail/${uniqueId}`} class="btn">Read more</Link>
            </div>
    ))}
 

  </div>
  </section>

    )
}