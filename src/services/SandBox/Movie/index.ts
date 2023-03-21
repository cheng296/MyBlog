import axios from "axios";

export const getAllMovies = () => axios.get('/movie/get')