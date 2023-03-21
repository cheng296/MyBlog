import React, { useEffect, useState } from "react";
import { Card } from 'antd';
import { getAllMovies } from "../../../services/SandBox/Movie";

const { Meta } = Card;

const Movie: React.FC = () => {
	const [movieList, setMovieList] = useState<Movie.movieListType[]>();

	const movieShow = () => {
	 return	movieList?.map(item => {
		 return <Card
				key={item.coverPicture}
			hoverable
				style={{ width: '15vw' ,float:"left",marginRight:'2vw' }}
			cover={<img alt="图片url失效" src={item.coverPicture} style={{height:"40vh"}} />}
		>
			<div style={{height:'8vh'}}> <Meta title={`${item.title}`} description={`${item.movieType}`}/></div>
		</Card>})
	}
	useEffect(() => {
		getAllMovies().then(res => {
			setMovieList(res.data)
		})
	}, [])
	return <>
		{movieShow()}
	</>
}

export default Movie