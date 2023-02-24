import styled from 'styled-components';
import NextLink from 'next/link';
import { useMemo } from 'react';
import Image from 'next/image';

export const Stats = styled.div`
	display: flex;
	flex-flow: row wrap;
	width: 100%;
	justify-content: space-between;
	gap: 10px;
`;

export const StatCol = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	min-width: 142px;
	gap: 10px;
`;

export const SingleStat = styled.div`
	display: flex;
	text-transform: capitalize;
`;

export const StatTitle = styled.div`
	font-size: 12px;
	line-height: 14px;
	color: #bea77e;
	width: 83px;
`;

export const StatDesc = styled.div`
	justify-self: flex-start;
	font-size: 12px;
	line-height: 14px;
	color: #fff;
`;

export const Link = styled(NextLink)`
	color: #98a7f5;
	text-decoration: none;
`;

export const TextStatItem = ({ title, desc }: { title: string; desc: string | number }) => {
	return (
		<SingleStat>
			<StatTitle>{title}</StatTitle>
			<StatDesc>{desc}</StatDesc>
		</SingleStat>
	);
};

export const LinkStatItem = ({ title, desc, href }: { title: string; desc: string | number; href: string }) => {
	return (
		<SingleStat>
			<StatTitle>{title}</StatTitle>
			<StatDesc>
				<Link href={href}>{desc}</Link>
			</StatDesc>
		</SingleStat>
	);
};

export const DifficultyStat = ({ difficulty }: { difficulty: number }) => {
	const activeIcons = useMemo(() => {
		return Array(difficulty)
			.fill(0)
			.map((_, index) => <Image width={10} height={10} src='/assets/sword-active.svg' key={index} alt='' />);
	}, [difficulty]);
	const inactiveIcons = useMemo(() => {
		const rest = 5 - difficulty;
		return Array(rest)
			.fill(0)
			.map((_, index) => <Image width={10} height={10} src='/assets/sword-inactive.svg' key={index + rest} alt='' />);
	}, [difficulty]);
	return (
		<SingleStat>
			<StatTitle>Difficulty</StatTitle>
			<StatDesc>
				{activeIcons}
				{inactiveIcons}
			</StatDesc>
		</SingleStat>
	);
};
