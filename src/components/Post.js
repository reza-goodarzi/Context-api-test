import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UsersDataContext from "../store/user-data-context";

const Post = ({ userId, title, text }) => {
	const user = useContext(UsersDataContext).users.find(user => user.id === userId);

	return (
		<PostStyle>
			<Link to={`/users/${user.id}`} className="user">
				<img src={`https://i.pravatar.cc/150?img=${userId}`} alt={user.name} />
				<div className="details">
					<p className="name">{user.username}</p>
					<p className="username">{user.phone}</p>
				</div>
			</Link>
			<div className="post">
				<p className="title">{title}</p>
				<p className="text">{text}</p>
			</div>
		</PostStyle>
	);
};

export default Post;

const PostStyle = styled.div`

	.user{
		display: flex;
		align-items: center;
		transform: translateX(-19%);

		@media screen and (max-width: 56.25em){
			transform: translateX(-17%);
		}
		@media screen and (max-width: 37.5em){
			transform: translateX(-15%);
		}

		margin-top: 2rem;
		
		img{
			border: 2px solid #eee;
			border-radius: 50%;
			width: 6.5rem;
		}

		.details{
			margin-left: 1rem;

			.name{
				text-transform: capitalize;
				color: var(--color-black);
				font-weight: 700;
			}

			.username{
				color: #aaa;
				font-weight: 300;
			}
		}
	}

	.post{
		padding: 1rem 2rem;

		.title{
			font-weight: 500;
		}

		.text{
			line-height: 1.5;
		}
	}

`;
