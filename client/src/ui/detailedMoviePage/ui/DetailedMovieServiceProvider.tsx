import { useContext, createContext, ReactNode } from "react";

import { DetailedMovieService } from "../../../services/DetailedMovieService";

const DetailedMovieServiceContext = createContext<DetailedMovieService>(null!);
export const useDetailedMovieService = (): DetailedMovieService => useContext(DetailedMovieServiceContext);

export const DetailedMoviePageProvider = ({ children }: { children: ReactNode }) => {
  const service = new DetailedMovieService();

  return <DetailedMovieServiceContext.Provider value={service}>{children}</DetailedMovieServiceContext.Provider>;
};
