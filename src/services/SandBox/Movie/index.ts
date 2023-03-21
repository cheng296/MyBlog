import axios from "axios";

/** 获取所有的电影信息 */
export const getAllMovies = () => axios.get('/movie/get')

/** 添加电影 */
export const CreateMovie=(params:Movie.movieListType)=>axios.post('/movie/create',params)