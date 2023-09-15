class AppRoutes {
  public getMainUrl = () => "/";

  public getDetailedMoviePageUrl = () => `/movie/:id`;

  public getDetailedMoviePageUrlWithId = (id: number) => `/movie/${id}`;

  public getCreateMoviePageUrl = () => "/createMovie";
}

export const appRoutes = new AppRoutes();
