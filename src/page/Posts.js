import { useContext } from "react";
import styled from "styled-components";
import Container from "../components/Container";
import Post from "../components/Post";
import UsersDataContext from "../store/user-data-context";

const Posts = () => {
	const ctx = useContext(UsersDataContext);
	const allPosts = ctx.users.map(user => user.posts).flat();
	return (
		<PostsStyle>
			<h1>Posts</h1>
			{ctx.isLoading ?
				<p>Loading...</p> :
				<Container>
					{allPosts.map(post => (
						<Post
							key={post.id}
							userId={post.userId}
							title={post.title}
							text={post.text}
						/>
					))}
				</Container>
			}
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
`;
