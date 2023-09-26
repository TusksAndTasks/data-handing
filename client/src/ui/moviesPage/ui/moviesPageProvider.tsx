import { useContext, createContext, ReactNode } from "react";

import { MoviesStore } from "../../../stores/MoviesStore";

const MoviesStoreContext = createContext<MoviesStore>(null!);
export const useMoviesStore = (): MoviesStore => useContext(MoviesStoreContext);

export const MoviesPageProvider = ({ children }: { children: ReactNode }) => {
  const store = new MoviesStore();

  return <MoviesStoreContext.Provider value={store}>{children}</MoviesStoreContext.Provider>;
};
