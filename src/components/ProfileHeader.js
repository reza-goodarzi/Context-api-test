import { faAt, faMapMarkerAlt, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { FontIcon } from "../styles/styles";

function ProfileHeader({ id, name, username, address, phone }) {
	return (
		<Header>
			<img src={`https://i.pravatar.cc/300?img=${id}`} alt={name} />

			<div className="information">
				<div className="group">
					<span className="name">
						<FontIcon icon={faUser} />
						<p>{name}</p>
					</span>
					<span className="username">
						<FontIcon icon={faAt} />
						<p>{username}</p>
					</span>
				</div>
				<div className="group">
					<span className="email">
						<FontIcon icon={faMapMarkerAlt} />
						<p>{address.city}, {address.street}, {address.suite}</p>
					</span>
					<span className="phone">
						<FontIcon icon={faPhone} />
						<p>9524582346</p>
					</span>
				</div>
			</div>
		</Header>
	);
}

export default ProfileHeader;

const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5rem;
	background: linear-gradient(to right, var(--color-primary), var(--color-secondary));

	@media screen and (max-width: 56.25em){
		padding: 5rem 2rem;
	}

	@media screen and (max-width: 37.5em){
		flex-direction: column;
	}

	img{
		border-radius: 50%;
		height: 20rem;
	}

	.information{
		display: flex;
		align-items: center;
		justify-content: space-around;
		flex-wrap: wrap;
		width: 60%;

		@media screen and (max-width: 45em){
			width: 65%;
			margin-left: 1rem;
		}

		@media screen and (max-width: 37.5em){
			width: 80%;
			margin-left: 0;
			flex-direction: column;
			margin-top: 2rem;
		}

		.group{
			@media screen and (max-width: 37.5em){
				display: flex;
				align-items: center;
				flex-direction: column;
			}
		}

		.group span{
			display: flex;
			align-items: center;
			color: #fff;
			font-size: 1.8rem;
		}
	
		.name{
			font-weight: 700;
		}
	}
`;
