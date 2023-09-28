import React from "react";
import MainLayout from "../layouts/MainLayout";

function NotFound() {
   return (
      <MainLayout>
         <div className="p-5 text-center bg-light ">
            <h1 className="mb-3">404</h1>
            <h4 className="mb-3">Pagina Non Trovata</h4>
         </div>
      </MainLayout>
   );
}

export default NotFound;
