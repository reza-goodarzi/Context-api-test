import { useContext } from "react";
import styled from "styled-components";
import Post from "../components/Post";
import UsersDataContext from "../store/user-data-context";

const Posts = () => {
	const ctx = useContext(UsersDataContext);
	const allPosts = ctx.users.map(user => user.posts).flat();
	return (
		<PostsStyle>
			<h1>Posts</h1>
			<div className="container">
				{ctx.isLoading ?
					<p>Loading...</p> :
					allPosts.map(post => (
						<Post
							key={post.id}
							userId={post.userId}
							title={post.title}
							text={post.text}
						/>
					))
				}
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
