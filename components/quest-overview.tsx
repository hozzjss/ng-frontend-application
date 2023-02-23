import { SingleQuest } from '@/types/api';
import Image from 'next/image';
import styled from 'styled-components';

export default function QuestOverview({ quest }: { quest: SingleQuest }) {
	return (
		<Container>
			<CoverContainer>
				<CoverImage alt={`${quest.title} cover image`} src={quest.cover} />
				<CloseIcon src={'/assets/close.svg'} width='14' height='14' alt='Close quest' />
			</CoverContainer>
		</Container>
	);
}
const Container = styled.div`
	width: 100%;
	max-width: 755px;
	display: flex;
	flex-direction: column;
	margin: auto;

	background-color: #1d1c1a;
	border-radius: 10px;

	@media screen and (min-width: 720px) {
		max-height: 635px;
		margin-top: 135px;
	}
`;

const CoverContainer = styled.div`
	padding: 4px 4px 0;
	width: 100%;

	position: relative;
`;

const CoverImage = styled.img`
	border-radius: 8px 8px 0 0;
	width: 100%;
	object-fit: cover;
	max-height: 270px;
`;

const CloseIcon = styled(Image)`
	position: absolute;
	top: 10px;
	right: 12px;
	cursor: pointer;
`;
