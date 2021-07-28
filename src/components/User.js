import { Link } from "react-router-dom";
import styled from "styled-components";

const User = ({ id, name, username, address, phone }) => {
	return (
		<UserStyle>
			<Link to={`/users/${id}`}>
				<img src={`https://i.pravatar.cc/150?img=${id}`} alt={name} />
			</Link>
			<p className="name">{name}</p>
			<p className="username">@{username}</p>
			<p className="phone">{phone}</p>
			<p className="address">{address.city}, {address.street}, {address.suite}</p>
			<Link to={`/users/${id}`} className='button'>
				View Profile
			</Link>
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
	border: 1px solid #eee;
	transition: box-shadow .2s ease-in;

	@media screen and (max-width: 56.25em){
		width: 45%;
	}

	@media screen and (max-width: 37.5em){
		width: 100%;
	}

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
		margin: 1rem 0;
	}

	.username,
	.phone,
	.address{
		color: var(--color-gray);
		font-weight: 300;
		padding: 1px 2rem;
		text-align: center;
	}

	.button{
		border: 1px solid var(--color-primary);
		border-radius: 2rem;
		margin-top: 3rem;
		padding: 1rem 4rem;
		color: var(--color-primary);
		font-weight: 300;

		@media screen and (max-width: 56.25em){
			padding: 1.3rem 7rem;
		}

		@media screen and (max-width: 37.5em){
			padding: 1.3rem 10rem;
		}

		&:hover{
			background-color: var(--color-primary);
			color: var(--color-white);
		}
	}
`;
