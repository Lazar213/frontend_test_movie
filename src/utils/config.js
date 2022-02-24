export default {
  serverURL: process.env.REACT_APP_SERVER_URL,
  listURL: process.env.REACT_APP_MOVIE_LIST_API,
  themeKey: 'theme',
  isProduction: process.env.NODE_ENV === 'production',
  apiKey: process.env.REACT_APP_API_KEY,
  imdbLink: process.env.REACT_APP_IMDB_LINK,
  imdbImageDomain: process.env.REACT_APP_IMDB_IMAGE,
  token: '',
  language: 'en-US',
  externalSource: 'imdb_id',
};
