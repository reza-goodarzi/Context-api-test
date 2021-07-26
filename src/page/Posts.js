import styled from "styled-components";
import Post from "../components/Post";

const Posts = () => {
	return (
		<PostsStyle>
			<h1>Posts</h1>
			<div className="container">
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
		</PostsStyle>
	);
};

export default Posts;

const PostsStyle = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;

	padding: 2rem 0;

	h1{
		margin-bottom: 4rem;
	}

	.container{
		border: 1px solid #eee;
		border-radius: 5px;
		max-width: 72rem;
	}

`;
