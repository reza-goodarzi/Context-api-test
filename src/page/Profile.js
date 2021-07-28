import { useContext } from "react";
import { useParams } from "react-router-dom";

import Container from "../components/Container";
import Loading from "../components/Loading";
import Post from "../components/Post";
import ProfileHeader from "../components/ProfileHeader";
import UsersDataContext from "../store/user-data-context";

const Profile = () => {
	const params = useParams();
	const ctx = useContext(UsersDataContext);
	const user = ctx.users.find(user => user.id === Number(params.id));


	return (
		<section>
			{ctx.isLoading ?
				<Loading /> :
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
