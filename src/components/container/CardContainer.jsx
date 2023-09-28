import React, { useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MyCard from "../card/MyCard";
import { SearchText } from "../../context/Search";
const book = require("../../data/fantasy.json");

function CardContainer() {
   const { textSearch } = useContext(SearchText);
   const [selectedCard, setSelectedCard] = useState(null);

   const handleCardClick = (book) => {
      setSelectedCard(book.asin);
   };

   return (
      <>
         <div className="p-5 text-center bg-light">
            <h1 className="mb-3">EpiBook</h1>
            <h4 className="mb-3">Perchè fa bene</h4>
         </div>
         <Container>
            <Row>
               {book
                  .filter((book) =>
                     book.title.toLowerCase().includes(textSearch)
                  )
                  .slice(0, 12)
                  .map((book) => (
                     <Col key={book.asin} sm={12} md={6} lg={3}>
                        <MyCard
                           book={book}
                           isSelected={book.asin === selectedCard}
                           onClick={handleCardClick}
                        />
                     </Col>
                  ))}
            </Row>
         </Container>
      </>
   );
}

export default CardContainer;
