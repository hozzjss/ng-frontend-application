import { cinzel, lato } from '@/styles/fonts';
import { SingleQuest } from '@/types/api';
import Image from 'next/image';
import styled from 'styled-components';
import { DifficultyStat, LinkStatItem, StatCol, Stats, TextStatItem } from './shared';

export default function QuestOverview({ quest }: { quest: SingleQuest }) {
	return (
		<Container>
			<CoverContainer>
				<CoverImage alt={`${quest.title} cover image`} src={quest.cover} />
				<CloseIcon src={'/assets/close.svg'} width='14' height='14' alt='Close quest' />
			</CoverContainer>
			<TitleContainer>
				<TitleSurroundLeft src='/assets/title-surround-left.svg' />
				<Title className={cinzel.className}>{quest.title}</Title>
				<TitleSurroundRight src='/assets/title-surround-left.svg' />
			</TitleContainer>
			<OverviewStats className={lato.className}>
				<StatCol>
					<LinkStatItem desc={quest.skillTree} title='Skill tree' href={'/'} />
					<TextStatItem desc={quest.skill} title='Skill' />
				</StatCol>
				<StatCol>
					<DifficultyStat difficulty={quest.difficulty} />
					<TextStatItem desc={quest.type} title='Quest Type' />
				</StatCol>
			</OverviewStats>
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
		min-height: 635px;
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

const TitleContainer = styled.div`
	margin-top: 8px;

	@media screen and (min-width: 720px) {
		display: flex;
		justify-content: center;
	}
`;

const Title = styled.h3`
	font-weight: 700;
	font-size: 20px;
	line-height: 27px;
	color: #ffffff;
	margin: 0 10px;
`;

const TitleSurroundLeft = styled.img`
	display: none;
	@media screen and (min-width: 720px) {
		display: block;
	}
`;

const TitleSurroundRight = styled(TitleSurroundLeft)`
	transform: rotate(180deg);
`;

const OverviewStats = styled(Stats)`
	margin-top: 12px;
	padding: 0 15px;
`;
