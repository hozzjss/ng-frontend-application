import { cinzel, lato } from '@/styles/fonts';
import { SingleQuest } from '@/types/api';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { DifficultyStat, LinkStatItem, StatCol, Stats, TextStatItem } from './shared';

export default function QuestOverview({ quest }: { quest: SingleQuest }) {
	return (
		<Container>
			<CoverContainer>
				<CoverImage alt={`${quest.title} cover image`} src={quest.cover} />
				<Link href='/'>
					<CloseIcon src={'/assets/close.svg'} width='14' height='14' alt='Close quest' />
				</Link>
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
			<QuestDescription className={lato.className}>{quest.description}</QuestDescription>
			<RewardsContainer>
				<RewardsColumn>
					<h4 className={cinzel.className}>Quest Rewards</h4>
					<Experience exp={quest.rewards.experience} />
				</RewardsColumn>
				<RewardsColumn>
					<Link href='/' style={{ alignSelf: 'flex-end' }}>
						<GoBack className={cinzel.className}>Go Back</GoBack>
					</Link>
				</RewardsColumn>
			</RewardsContainer>
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

const QuestDescription = styled.div`
	margin-top: 14px;
	padding: 0 15px;

	font-size: 14px;
	line-height: 17px;
	color: #8e8e8e;
	flex: 1;
`;

const RewardsContainer = styled.div`
	margin-top: 14px;
	padding: 0 15px 25px;
	display: flex;
	flex-direction: column;
	width: 100%;
	h4 {
		margin: 0;
		margin-bottom: 7px;
		font-weight: 700;
		font-size: 14px;
		line-height: 19px;
		text-transform: capitalize;
		color: #ffffff;
	}

	@media screen and (min-width: 720px) {
		flex-direction: row;
		align-items: flex-end;
		justify-content: space-between;
	}
`;

const RewardsColumn = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`;

const ExpBox = styled.div`
	width: 58.1px;
	height: 58.1px;

	background: linear-gradient(180deg, rgba(7, 15, 29, 0) 0%, rgba(54, 77, 137, 0.4) 100%);
	border: 1px solid #bea77e;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	img {
		margin-bottom: 6px;
	}
	div {
		font-weight: 700;
		font-size: 8px;
		line-height: 11px;

		color: #ffffff;
	}
`;

const Experience = ({ exp }: { exp: number }) => {
	// 27.97px
	// Height
	// 17.48px
	return (
		<ExpBox className={cinzel.className}>
			<Image src='/assets/exp.svg' alt='' width={'28'} height={17.5} />
			<div>+ {exp}</div>
		</ExpBox>
	);
};

const GoBack = styled.button`
	width: 93px;
	height: 35px;

	background: #1d1c1a;
	border-radius: 2.5px;
	border: 0.6px solid #bea77e;
	color: #fff;
	font-weight: 700;
	font-size: 12px;
	line-height: 16px;
	text-transform: capitalize;
	cursor: pointer;
`;
