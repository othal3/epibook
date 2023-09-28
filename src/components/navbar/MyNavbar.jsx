import React, { useContext, useState } from "react";
import {
   MDBContainer,
   MDBNavbar,
   MDBNavbarBrand,
   MDBNavbarToggler,
   MDBNavbarNav,
   MDBNavbarItem,
   MDBNavbarLink,
   MDBCollapse,
   MDBIcon,
   MDBInputGroup,
} from "mdb-react-ui-kit";
import { SearchText } from "../../context/Search";

export default function MyNavbar() {
   const [showNav, setShowNav] = useState(false);
   const { textSearch, setTextSearch } = useContext(SearchText);

   return (
      <MDBNavbar expand="lg" light bgColor="light" className=" sticky-top">
         <MDBContainer fluid>
            <MDBNavbarBrand href="/">EpiBooks</MDBNavbarBrand>
            <MDBNavbarToggler
               type="button"
               aria-expanded="false"
               aria-label="Toggle navigation"
               onClick={() => setShowNav(!showNav)}
            >
               <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>
            <MDBCollapse navbar show={showNav}>
               <MDBNavbarNav>
                  <MDBNavbarItem>
                     <MDBNavbarLink active aria-current="page" href="/">
                        Home
                     </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                     <MDBNavbarLink href="/about">About</MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                     <MDBNavbarLink href="/browse">Browse</MDBNavbarLink>
                  </MDBNavbarItem>
               </MDBNavbarNav>
            </MDBCollapse>
            <MDBInputGroup tag="form" className="d-flex w-auto mb-3">
               <input
                  className="form-control"
                  placeholder="Type query"
                  type="text"
                  value={textSearch}
                  onChange={(e) => setTextSearch(e.target.value.toLowerCase())}
               />
            </MDBInputGroup>
         </MDBContainer>
      </MDBNavbar>
   );
}
