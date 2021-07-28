import { useContext } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import Post from "../components/Post";
import ProfileHeader from "../components/ProfileHeader";
import UsersDataContext from "../store/user-data-context";

const Profile = () => {
	const params = useParams();
	const ctx = useContext(UsersDataContext);
	const user = ctx.users.find(user => user.id === +params.id);
	console.log(user);

	return (
		<section>
			{ctx.isLoading ?
				<p>Loading...</p> :
				<>
					<ProfileHeader
						id={user.id}
						name={user.name}
						username={user.username}
						address={user.address}
						phone={user.phone}
					/>
					<Container>
						{user.posts.map(post => (
							<Post
								key={post.id}
								userId={post.userId}
								title={post.title}
								text={post.text}
							/>
						))}
					</Container>
				</>
			}
		</section>
	);
};

export default Profile;
