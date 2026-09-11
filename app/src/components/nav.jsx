import { Link } from "react-router-dom"
 export default function Nav(){
const nav=[
    {label:'Home', path:'/'},
    {label:'Africa', path:'/africa'},
    {label:'Europe', path:'/europe'},
    {label:'About', path:'/about'},
]
    return(

        <nav className="container">
<div className="header">
                 <h1 id="adventure"><Link to={'/'}> ADVENTUREUS</Link></h1>

<button id="menu-btn">
                    
                    ☰
</button>
</div>
                 
        <ul className="nav-items">
               {nav.map((item)=>(

<Link to={item.path}  key={item.path}><li>{item.label}</li></Link>
               ))} 
                
                <li id="search-icon">
                    <a href="">
                    
                    🔎︎
                    </a>
                 
                </li>
                
               
            
                  
                   <li> 
                        <button type="submit" id="logout">Logout</button>
              </li>
              
     <li><a href="http://127.0.0.1:8000/accounts/signup">Sign up</a> </li>
     <li><a href="http://127.0.0.1:8000/accounts/login/">Log in</a></li>
               
             
                </ul>
     </nav>
        
    )
}