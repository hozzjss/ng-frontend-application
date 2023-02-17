import Link from 'next/link';
import styled from 'styled-components';

export const Logo = () => {
	return (
		<StyledLink href='/'>
			<Img src='/logo.svg' />
		</StyledLink>
	);
};

const StyledLink = styled(Link)`
	display: block;
	@media screen and (min-width: 480px) {
		margin-top: 10px;
		margin-left: 28px;
	}
`;

const Img = styled.img`
	max-width: 100%;
`;
