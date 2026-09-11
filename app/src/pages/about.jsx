import traveler from '../assets/img/traveler.png'

export default function About(){
return(

<section class="content">
        <h2 id="title">ABOUT US</h2>
        <div class="about-section">
<div class="card" id="about-card">
    
    <img src={traveler} />
    
        <p>ADVENTUREUS, we are just ordinary people passionate about travelling and adventure.
            Eager to share our experiences with you, so you can embark on your journey hopefully with new helpful info.</p>
       </div>

       <div class="columns">
       <div class="card">
        <h3>Email</h3>
        <a> ✉ adventureus@gmail.com</a>
       </div>
       <div class="card">
        <h3>Instagram</h3>
        <a>🅾 @adventureus.com</a>
       </div>
       </div>
       
    </div>
        </section>
    )}