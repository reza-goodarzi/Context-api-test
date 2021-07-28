import styled from "styled-components";

const Container = ({ children }) => {
	return (
		<ContainerStyled>
			{children}
		</ContainerStyled>
	);
};

export default Container;

const ContainerStyled = styled.div`
	display: flex;
	flex-direction: column;
	margin: 3rem auto;

	border: 1px solid #eee;
	border-radius: 5px;
	max-width: 72rem;
`;
