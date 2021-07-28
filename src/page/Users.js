import { useContext } from "react";
import styled from "styled-components";
import User from "../components/User";
import UsersDataContext from "../store/user-data-context";

const Users = () => {
	const ctx = useContext(UsersDataContext);
	return (
		<UsersStyle>
			<h1>Users</h1>
			<div className="container">
				{ctx.isLoading ?
					<p>Loading...</p> :

					ctx.users.map(user =>
						<User
							key={user.id}
							id={user.id}
							name={user.name}
							username={user.username}
						/>
					)
				}
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