import styled from "styled-components";

const Header = () => {
	return (
		<HeaderStyle>
			<a href="/">Posts</a>
			<a href="/">Users</a>
		</HeaderStyle>
	);
};

export default Header;

const HeaderStyle = styled.div`
	background-color: var(--color-primary);
	padding: 2rem 1rem;

	display: flex;

	a{
		color: var(--color-white);
	}
`;
