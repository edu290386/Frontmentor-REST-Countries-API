import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AboutCountry from '../pages/AboutCountry';

const AppRoute = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/country/:nameCountry" element={<AboutCountry />}/> 
        </Routes>
      </BrowserRouter>  
    </>
    
  )
}

export default AppRoute;