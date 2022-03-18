const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "34e3b30b3aefb6cc7742e51fb60e2371",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
