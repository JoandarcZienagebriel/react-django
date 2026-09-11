
import { Link } from "react-router-dom";
import one from '../assets/img/2.png';
import two from '../assets/img/3.png';
import three from '../assets/img/5.png';
import four from '../assets/img/venice.jpeg';
export default function Home(){
    
    return(

        <div>
            <section className="hero">
      
        
    <h1 id="blurb">IT'S ABOUT TIME THAT YOU START TRAVELLING. GET INFO ABOUT THE TRENDING TRAVELING DESTINATIONS FROM ADVENTUREUS.</h1>
 
    
          <ul className="tips">
            <li>Get the best time of your life using your budget</li>
            <li>Must taste foods.</li>
            <li>Must visit amusement destinations.</li>
            <li>What time of the year to travel.</li>
          </ul>
<div className="cta">
   <Link to='/about' className="btn" id="about-us">Learn more about us</Link>
<a  href="{%url 'signup'%}" className="btn" id="sign">Sign up</a>
</div>
</section>

    <section className="second">
 <h3>RECENT POSTS</h3>
        <div className="columns">
           
        <div className="card">
          <h3>Venice, Italy</h3>
          <img src={one} alt="picture of Venice" />
      
      <p>Venice is a unique city in Italy famous for its canals, historic architecture,
         and romantic atmosphere. Visitors enjoy exploring its waterways, beautiful squares, and world-renowned cultural landmarks.</p>
        </div>

       <div className="card">
          <h3>Diani Beach</h3>
          <img src={two} alt="Diani Beach"/>
      
      <p>Diani Beach is a stunning coastal destination in Kenya known for its soft white sand, clear turquoise waters,
         and palm-lined shoreline. It is a popular spot for swimming, snorkeling, diving, and relaxing in a tropical setting.</p>
        </div>


        <div className="card">
          <h3>Asmara, Eritrea</h3>
          <img src={three} alt="Venice"/>
      
      <p>Asmara is the capital of Eritrea and is celebrated for its well-preserved modernist architecture and pleasant highland climate. 
        The city offers a blend of African and Italian influences, reflected in its buildings, cafés, and cultural heritage.</p>
        </div>

        <div className="card">
          <h3>Asmara, Eritrea</h3>
          <img src={four} alt="Venice"/>
      
      <p>Asmara is the capital of Eritrea and is celebrated for its well-preserved modernist architecture and pleasant highland climate. 
        The city offers a blend of African and Italian influences, reflected in its buildings, cafés, and cultural heritage.</p>
        </div>
</div>
    </section>
        </div>
    )
}