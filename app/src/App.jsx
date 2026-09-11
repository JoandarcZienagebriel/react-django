import {Route, Routes } from 'react-router-dom';
import Home from './components/home';
import AfricaList from './pages/africa_list.jsx';
import Europe from './pages/europe.jsx';
import About from './pages/about.jsx';
import MainLayout from './layouts/MainLayout.jsx'
import AfricaDetail from './pages/africa_detail.jsx';
import EuroDetail from './pages/euro_detail.jsx';
export default function App(){
 
return (
    <Routes>
<Route element={<MainLayout/>}>
<Route path="/" element={<Home />} />
<Route path='/africa' element={<AfricaList/>}/>
<Route path='/europe' element={<Europe/>}/>
<Route path='/afrodetail/:pk/' element={<AfricaDetail/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/eurodetail/:pk/' element={<EuroDetail/>}/>
</Route>
    </Routes>
  )
};
