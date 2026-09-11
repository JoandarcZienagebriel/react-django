import Nav from '../components/nav';
import Footer from '../components/footer';
import { Outlet } from 'react-router-dom';
export default function MainLayout(){
    return(
        <div>
            <Nav/>
            <main>
<Outlet/>  
            </main>
        <Footer/>
        </div>
    )
}