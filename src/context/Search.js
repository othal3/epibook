import React, { createContext, useState } from "react";

export const SearchText = createContext();

function Search({ children }) {
   const [textSearch, setTextSearch] = useState("");

   return (
      <SearchText.Provider value={{ textSearch, setTextSearch }}>
         {children}
      </SearchText.Provider>
   );
}

export default Search;
