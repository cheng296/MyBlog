import React, { useEffect, useState } from "react";
import { Button, Card, Modal, Form, Input, message } from 'antd';
import { getAllMovies, CreateMovie } from "../../../services/SandBox/Movie";

const { Meta } = Card;

const Movie: React.FC = () => {
	const [movieList, setMovieList] = useState<Movie.movieListType[]>();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const onFinish = (values: Movie.movieListType) => {
		setIsModalOpen(false);
		CreateMovie(values).then(res => {
			if (res.data.ok === 0 && res.data.message) {
				message.error(res.data.message)
			} else {
				setMovieList([...movieList as Movie.movieListType[], values]);
			}
		})
	};

	const movieShow = () => {
		return movieList?.map(item => {
			return <Card
				key={item.coverPicture}
				hoverable
				style={{ width: '13vw', float: "left", marginRight: '2vw' }}
				cover={<img alt="图片url失效" src={item.coverPicture} style={{ height: "35vh" }} />}
			>
				<div style={{ height: '8vh' }}> <Meta title={`${item.title}`} description={`${item.movieType}`} /></div>
			</Card>
		})
	}
	useEffect(() => {
		getAllMovies().then(res => {
			setMovieList(res.data)
		})
	}, [])
	return <div>
		<div style={{ marginBottom: '2vh' }}>
			<Button type="primary" onClick={() => {
				setIsModalOpen(true);
			}}>
				我要推荐
			</Button>
			<Modal title="待推荐的电影" destroyOnClose={true} footer={null} open={isModalOpen} onCancel={() => {
				setIsModalOpen(false);
			}}>
				<Form
					name="basic"
					labelCol={{ span: 5 }}
					wrapperCol={{ span: 16 }}
					style={{ maxWidth: 600 }}
					onFinish={onFinish}
				>
					<Form.Item
						label="推荐人"
						name="movieReferrer"
						rules={[{ required: true, message: 'Please input your username!' }]}
						initialValue = {localStorage.getItem('username')||''}
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="电影名称"
						name="title"
						rules={[{ required: true, message: 'Please input your username!' }]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="年份类型"
						name="movieType"
						rules={[{ required: true, message: 'Please input your password!' }]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="封面图片	"
						name="coverPicture"
						rules={[{ required: true, message: 'Please input your password!' }]}
					>
						<Input />
					</Form.Item>
					<Form.Item wrapperCol={{ offset: 10, span: 16 }}>
						<Button type="primary" htmlType="submit" >
							提交
						</Button>
					</Form.Item>
				</Form>
			</Modal>
		</div>
		{movieShow()}
	</div>
}

export default Movie