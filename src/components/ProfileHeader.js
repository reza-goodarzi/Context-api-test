import { faAt, faBuilding, faEnvelope, faPhone, faUser, faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { FontIcon } from "../styles/styles";

function ProfileHeader() {
	return (
		<Header>
			<img src={`https://i.pravatar.cc/300?img=9`} alt="Profile" />

			<div className="information">
				<div className="group">
					<span className="name">
						<FontIcon icon={faUser} />
						<p>james dean</p>
					</span>
					<span className="username">
						<FontIcon icon={faAt} />
						<p>james</p>
					</span>
				</div>
				<div className="group">
					<span className="email">
						<FontIcon icon={faEnvelope} />
						<p>james@gmail.com</p>
					</span>
					<span className="phone">
						<FontIcon icon={faPhone} />
						<p>9524582346</p>
					</span>
				</div>
				<div className="group">
					<span className="website">
						<FontIcon icon={faWindowRestore} />
						<p>www.james.com</p>
					</span>
					<span className="company">
						<FontIcon icon={faBuilding} />
						<p>james company</p>
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

	img{
		border-radius: 50%;
		height: 20rem;
	}

	.information{
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 60%;
	
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
