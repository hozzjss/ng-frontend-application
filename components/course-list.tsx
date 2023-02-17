import { cinzel, lato } from '@/styles/fonts';
import { Course } from '@/types/api';
import Image from 'next/image';
import NextLink from 'next/link';
import { useMemo } from 'react';
import styled from 'styled-components';

export default function CourseList({ courses }: { courses: Course[] }) {
	return (
		<CoursesContainer>
			{courses.map((course) => (
				<CourseCard key={course.id} course={course} />
			))}
		</CoursesContainer>
	);
}

const CourseCard = ({ course }: { course: Course }) => {
	return (
		<CardContainer href={`/${course.id}`}>
			<CourseCover src={course.cover} alt={`Cover image for course titled ${course.title}`} />
			<DetailsContainer>
				<CourseTitle className={cinzel.className}>{course.title}</CourseTitle>
				<Stats className={lato.className}>
					<StatCol>
						<LinkStatItem desc={course.skillTree} title='Skill tree' href={'/'} />
						<TextStatItem desc={course.skill} title='Skill' />
						<TextStatItem desc={course.type} title='Type' />
					</StatCol>
					<StatCol>
						<DifficultyStat difficulty={course.difficulty} />
						<TextStatItem desc={course.experience} title='Experience' />
						<TextStatItem desc={course.gold} title='Gold' />
					</StatCol>
				</Stats>
			</DetailsContainer>
		</CardContainer>
	);
};

const CoursesContainer = styled.section`
	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 24px;
	max-width: 1044px;
	@media screen and (min-width: 720px) {
		margin-top: 130px;
		margin-bottom: 130px;
		flex-flow: row wrap;
	}
`;

const CardContainer = styled(NextLink)`
	text-decoration: none;
	display: flex;
	flex-direction: column;
	background-color: #1d1c1a;
	padding: 6px 6px 12px;
	border-radius: 10px;
	width: 100%;
	min-height: 222px;
	@media screen and (min-width: 480px) {
		width: 332px;
	}
`;

const DetailsContainer = styled.div`
	padding: 0 6px;
`;

const CourseTitle = styled.div`
	font-size: 14px;
	height: 19px;
	font-weight: bold;
	line-height: 18.87px;
	margin-bottom: 8px;
	color: #fff;
	padding: 0;
`;
const CourseCover = styled.img`
	width: 100%;
	object-fit: cover;
	height: 106.11px;
	border-radius: 7px;
	margin-bottom: 4px;
`;

const Stats = styled.div`
	display: flex;
	flex-flow: row wrap;
	width: 100%;
	justify-content: space-between;
`;

const StatCol = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	max-width: 142px;
	gap: 10px;
`;

const SingleStat = styled.div`
	display: flex;
	justify-content: space-between;
	text-transform: capitalize;
`;

const StatTitle = styled.div`
	font-size: 12px;
	line-height: 14px;
	color: #bea77e;
	flex: 1;
`;

const StatDesc = styled.div`
	justify-self: flex-start;
	font-size: 12px;
	line-height: 14px;
	color: #fff;
	flex: 1;
`;

const Link = styled(NextLink)`
	color: #98a7f5;
	text-decoration: none;
`;

const TextStatItem = ({ title, desc }: { title: string; desc: string | number }) => {
	return (
		<SingleStat>
			<StatTitle>{title}</StatTitle>
			<StatDesc>{desc}</StatDesc>
		</SingleStat>
	);
};

const LinkStatItem = ({ title, desc, href }: { title: string; desc: string | number; href: string }) => {
	return (
		<SingleStat>
			<StatTitle>{title}</StatTitle>
			<StatDesc>
				<Link href={href}>{desc}</Link>
			</StatDesc>
		</SingleStat>
	);
};

const DifficultyStat = ({ difficulty }: { difficulty: number }) => {
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
