import React from "react";
import MyNavbar from "../components/navbar/MyNavbar";
import MyFooter from "../components/footer/MyFooter";

function MainLayout({ children }) {
   return (
      <>
         <MyNavbar />
         {children}
         <MyFooter />
      </>
   );
}

export default MainLayout;
