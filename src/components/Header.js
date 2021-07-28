import { faComments, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontIcon } from "../styles/styles";

const Header = () => {
	return (
		<HeaderStyle>
			<Link to="/">
				<FontIcon icon={faComments} />
				Posts
			</Link>
			<Link to="/users">
				<FontIcon icon={faUsers} />
				Users
			</Link>
		</HeaderStyle>
	);
};

export default Header;

const HeaderStyle = styled.div`
	background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
	padding: 1.5rem 1rem;

	/* position: fixed;
	width: 100%;
	z-index: 100; */

	display: flex;
`;
