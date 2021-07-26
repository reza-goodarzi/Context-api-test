import { faComments, faUsers } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { FontIcon } from "../styles/styles";

const Header = () => {
	return (
		<HeaderStyle>
			<a href="/">
				<FontIcon icon={faComments} />
				Posts
			</a>
			<a href="/">
				<FontIcon icon={faUsers} />
				Users
			</a>
		</HeaderStyle>
	);
};

export default Header;

const HeaderStyle = styled.div`
	background-color: var(--color-primary);
	padding: 1.5rem 1rem;

	/* position: fixed;
	width: 100%;
	z-index: 100; */

	display: flex;
`;
