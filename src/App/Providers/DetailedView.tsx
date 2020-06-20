import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useRef,
} from "react";

import PokemonDetail from "../components/PokemonDetail";
import Pokemon from "../models/Pokemon";

interface DetailedViewContextData {
  toggleDetailedView(
    pokemonID: number,
    pokemonData: Pokemon | null,
    rect?: DOMRect
  ): void;
}

const DetaieldViewContex = createContext<DetailedViewContextData>(
  {} as DetailedViewContextData
);

const DetailedViewProvider: React.FC = ({ children }) => {
  const [pokemonID, setPokemonID] = useState(0);
  const rectRef = useRef(new DOMRect());
  const pokemonRef = useRef<Pokemon | null>(null);

  const toggleDetailedView = useCallback(
    (pokemonID: number, pokemonData: Pokemon | null, rect?: DOMRect) => {
      setPokemonID(pokemonID);
      if (rect) rectRef.current = rect;
      document.body.style.overflow = pokemonID > 0 ? "hidden" : "auto";
      pokemonRef.current = pokemonData;
    },
    []
  );

  return (
    <DetaieldViewContex.Provider value={{ toggleDetailedView }}>
      {children}
      {
        <PokemonDetail
          pokemonID={pokemonID}
          initialRect={rectRef.current}
          pokemonData={pokemonRef.current}
        />
      }
    </DetaieldViewContex.Provider>
  );
};

function useDetailedView() {
  const context = useContext(DetaieldViewContex);

  if (!context)
    throw new Error(
      "useDetailedView must be used within a DetailedViewProvider"
    );

  return context;
}

export { useDetailedView, DetailedViewProvider };
