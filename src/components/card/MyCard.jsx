import React from "react";
import {
   MDBCard,
   MDBCardBody,
   MDBCardTitle,
   MDBCardText,
   MDBCardImage,
   MDBBtn,
} from "mdb-react-ui-kit";

function MyCard({ book, isSelected, onClick }) {
   const cardClassName = isSelected ? "border-4 border-danger border" : "";
   const url = `/productpage?asin=${book.asin}`;

   return (
      <MDBCard onClick={() => onClick(book)}>
         <MDBCardImage
            style={{ cursor: "pointer" }}
            className={cardClassName}
            src={book.img}
            position="top"
            alt="..."
         />
         <MDBCardBody>
            <MDBCardTitle>{book.title}</MDBCardTitle>
            <MDBCardText className=" mb-0 ">{book.category}</MDBCardText>
            <MDBCardText>{book.price}</MDBCardText>
            <MDBBtn href={url}>Commenti</MDBBtn>
         </MDBCardBody>
      </MDBCard>
   );
}

export default MyCard;
