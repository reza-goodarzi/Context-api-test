import styled from "styled-components";

const User = () => {
	return (
		<UserStyle>
			<img src="https://i.pravatar.cc/150" alt="user" />
			<p className="name">james dean</p>
			<p className="username">@bret</p>
			<p className="latest_activity">Active 1 day ago, 23:40</p>
			<button>View Profile</button>
		</UserStyle>
	);
};

export default User;

const UserStyle = styled.div`
	width: 30rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 5rem 0;
	margin: 1rem;

	border-radius: 1rem;
	/* box-shadow: 0 0 2rem #00000010; */
	border: 1px solid #eee;
	transition: box-shadow .2s ease-in;

	&:hover{
		box-shadow: 0 0 2rem #00000010;
	}

	img{
		border-radius: 50%;
		width: 10rem;
	}

	p{
		margin: 5px 0;
	}

	.name{
		text-transform: capitalize;
		font-weight: 600;
		margin-top: 2rem;
	}

	.username,
	.latest_activity{
		color: var(--color-gray);
		font-weight: 300;
	}

	button{
		border: 1px solid var(--color-primary);
		border-radius: 2rem;
		margin-top: 3rem;
		padding: 1rem 4rem;
		color: var(--color-primary);
		font-weight: 300;

		&:hover{
			background-color: var(--color-primary);
			color: var(--color-white);
		}
	}
`;
