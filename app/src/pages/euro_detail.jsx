import { use, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function AfricaDetail(){
  const [detail, setDetail] = useState(null);
    const {pk} = useParams();
    useEffect(() => {
        axios
            .get(`https://react-django-nine.vercel.app/api/europe/${pk}/`)
            .then((response) => {
                setDetail(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [pk]);

    return (
        <section className="content">
            <div className="detail-layout">

                {detail && ( 
                    <div className="section-detail">
                        <h2>{detail.title}</h2>

                        <p>
                            by {detail.author} | {detail.date}
                        </p>
x
                        <img
                            src={detail.image}
                            width="200"
                            alt={detail.title}
                        />

                        <p className="body">
                            {detail.body}
                        </p>
                         <Link to={'/europe'} class="btn">Back to List</Link>
                    </div>
                    
                )}
               

  

  <div className="sidebar">
    <ul>
      <li className="list"><a href="">ⓕ Facebook</a></li>
      <li className="list"><a href="">[in] LinkedIn</a></li>
      <li className="list"><a href="">🅾 Instagram</a></li>
    </ul>
  </div>
</div>
 

    </section>
    )
}