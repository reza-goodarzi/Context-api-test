import styled from "styled-components";

const NotFound = () => {
	return (
		<NotFoundStyle>
			<p>
				404 <span>| Not Found!</span>
			</p>
		</NotFoundStyle>
	);
};

export default NotFound;

const NotFoundStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80vh;

	p{
		font-weight: 900;
		font-size: 2rem;
		color: #222;
	}

	span{
		font-weight: 300;
	}
`;
