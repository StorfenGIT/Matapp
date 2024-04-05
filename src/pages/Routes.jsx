import Searched from "./Serachresults";
import Home from './Landingpage'
import Meals from './Food';
import Recipe from './Details';
import { Route, Routes } from "react-router-dom";

function Pages() {  
  return (
  
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/searched/:search" element={<Searched />} />
     <Route path="/recipe/:id" element={<Recipe />} />
     <Route path="/meals/:type" element={<Meals />} />
    </Routes>

  )
}

export default Pages;