import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductPage from "./pages/ProductPage";
import Search from "./context/Search";

function App() {
   return (
      <Search>
         <BrowserRouter>
            <Routes>
               <Route exact path="/" element={<Home />} />
               <Route path="/productpage" element={<ProductPage />} />

               <Route path="*" element={<NotFound />} />
            </Routes>
         </BrowserRouter>
      </Search>
   );
}

export default App;
