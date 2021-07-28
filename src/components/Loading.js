import styled from "styled-components";

const Loading = () => {
	return (
		<LoadingStyle>
			<div className="spinner"></div>
			<p>Loading...</p>
		</LoadingStyle>
	);
};

export default Loading;

const LoadingStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin: 3rem 0;

	.spinner {
		border: .7rem solid #f3f3f3;
		border-top: .7rem solid var(--color-primary);
		border-radius: 50%;
		width: 3rem;
		height: 3rem;
		animation: spin 2s linear infinite;
	}

	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}

	p{
		font-weight: 600;
		color: var(--color-primary);
		margin: 2rem 0;
	}
`;
