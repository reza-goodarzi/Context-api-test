import styled from "styled-components";
import User from "../components/User";

const Users = () => {
	return (
		<UsersStyle>
			<h1>Users</h1>
			<div className="container">
				<User />
				<User />
				<User />
				<User />
				<User />
				<User />
				<User />
				<User />
			</div>
		</UsersStyle>
	);
};

export default Users;

const UsersStyle = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;

	padding: 2rem 0;

	h1{
		margin-bottom: 4rem;
	}

	.container{
		max-width: 72rem;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
`;