import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { MDBBtn, MDBContainer, MDBIcon, MDBInput } from "mdb-react-ui-kit";
import { useSearchParams } from "react-router-dom";
import useFetchComment from "../hook/useFetchComment";
import { BounceLoader } from "react-spinners";
const book = require("../data/fantasy.json");

function ProductPage() {
   const [queryParameters] = useSearchParams();
   const [rateError, setRateError] = useState("");
   const bookpage = book.filter(
      (book) => book.asin === queryParameters.get("asin")
   );
   const urlApi = `https://striveschool-api.herokuapp.com/api/comments/`;
   const { data, loading, error } = useFetchComment(
      urlApi + queryParameters.get("asin")
   );

   const deleteComment = async (url) => {
      try {
         await fetch(url, {
            method: "DELETE",
            headers: {
               Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUyZGMyMTFmMTc1YzAwMTRjNTU4YjMiLCJpYXQiOjE2OTU4MjUyMDMsImV4cCI6MTY5NzAzNDgwM30.cuY1DgZL19Xn-JUyOyHbIyAfICyxvZIkA1zZOk6IIVA",
               "Content-Type": "application/json",
            },
         });
         window.location.reload();
      } catch (e) {
         console.log(e);
      }
   };

   const addComment = async () => {
      const comment = document.getElementById("comment").value;
      const rate = document.getElementById("rating").value;
      if (rate >= 0 && rate <= 5) {
         try {
            await fetch(urlApi, {
               method: "POST",
               body: JSON.stringify({
                  comment: comment,
                  rate: rate,
                  elementId: bookpage[0].asin,
               }),
               headers: {
                  Authorization:
                     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUyZGMyMTFmMTc1YzAwMTRjNTU4YjMiLCJpYXQiOjE2OTU4MjUyMDMsImV4cCI6MTY5NzAzNDgwM30.cuY1DgZL19Xn-JUyOyHbIyAfICyxvZIkA1zZOk6IIVA",
                  "Content-Type": "application/json",
               },
            }).then((res) => res.json());
            window.location.reload();
         } catch (e) {
            console.log(e);
         }
      } else {
         setRateError("Inserici un numero maggiore di 0 ma minore di 5");
      }
   };
   return (
      <MainLayout>
         <MDBContainer className=" my-5">
            <div className=" d-flex align-items-center justify-content-center">
               <img src={bookpage[0].img} alt="" className=" w-25" />
               <div className=" ms-4">
                  <h3>{bookpage[0].title}</h3>
                  <h4>{bookpage[0].category}</h4>
                  <p>{bookpage[0].price}</p>
               </div>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
               <div className="w-25 mt-4">
                  <MDBInput label="Commento" id="comment" type="text" />
               </div>
               <div className="w-25 mt-3">
                  <MDBInput
                     label="Voto"
                     id="rating"
                     type="text"
                     min="0"
                     max="5"
                  />
               </div>
               <div className=" d-flex align-items-center justify-content-center">
                  <p className=" text-danger">{rateError}</p>
               </div>
               <MDBBtn onClick={() => addComment()} className="mt-3">
                  Aggiungi Commento
               </MDBBtn>
            </div>
            <div className="mt-5 d-flex justify-content-center flex-column align-items-center">
               {error && <h2>Errore nel caricemnto dei comenti</h2>}
               {loading && (
                  <div className=" d-flex justify-content-center">
                     <BounceLoader color="#9a00ff" />
                  </div>
               )}
               {data.map((data) => (
                  <div
                     key={data._id}
                     className=" w-50 d-flex flex-column align-items-center"
                  >
                     <h3>{data.author}</h3>
                     <div className=" d-flex align-items-center mb-3">
                        <p className="mb-0 me-2">commento: {data.comment}</p>
                        <MDBBtn
                           onClick={() => deleteComment(urlApi + data._id)}
                        >
                           <MDBIcon fas icon="trash-alt" />
                        </MDBBtn>
                     </div>
                     <p>voto: {data.rate}</p>
                  </div>
               ))}
            </div>
         </MDBContainer>
      </MainLayout>
   );
}

export default ProductPage;
