import styled from "styled-components";

const Post = () => {
	return (
		<PostStyle>
			<div className="user">
				<img src="https://i.pravatar.cc/100" alt="user" />
				<div className="details">
					<p className="name">James Dean</p>
					<p className="release_date">2 weeks ago</p>
				</div>
			</div>
			<div className="post">
				<p className="title">sunt aut facere repellat provident occaecati excepturi optio reprehenderit</p>
				<p className="text">
					quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto
				</p>
			</div>
		</PostStyle>
	);
};

export default Post;

const PostStyle = styled.div`

	.user{
		display: flex;
		align-items: center;

		margin-top: 2rem;
		
		img{
			border: 2px solid #eee;
			border-radius: 50%;
			width: 6.5rem;
			
			transform: translateX(-50%);
		}

		.details{
			transform: translateX(-25%);

			.name{
				text-transform: capitalize;
				font-weight: 700;
			}

			.release_date{
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
