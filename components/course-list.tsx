import { cinzel, lato } from '@/styles/fonts';
import { Course } from '@/types/api';
import NextLink from 'next/link';

import styled from 'styled-components';
import { DifficultyStat, LinkStatItem, StatCol, Stats, TextStatItem } from './shared';

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
		<CardContainer href={`/quests/${course.id}`}>
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
