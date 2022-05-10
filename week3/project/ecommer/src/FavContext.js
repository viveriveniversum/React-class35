import React, { useState, createContext } from "react";
const FavContext = createContext({ favs: [] });

export function FavContextProvider({ children }) {
  const [favs, setFavorites] = useState([]);

  const isFavorite = (id) => {
    return favs.includes(id);
  };

  const toggleFavorite = (id) => {
    const newFavs = favs.filter((favorite) => favorite !== id);
    newFavs.length === favs.length
      ? setFavorites([...newFavs, id])
      : setFavorites(newFavs);
  };

  return (
    <FavContext.Provider
      value={{
        favs,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavContext.Provider>
  );
}

export default FavContext;
