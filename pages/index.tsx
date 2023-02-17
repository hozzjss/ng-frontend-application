import CourseList from '@/components/course-list';
import { Course } from '@/types/api';
import { useQuery } from '@tanstack/react-query';
import Head from 'next/head';

export default function Home() {
	const { data = [] } = useQuery<Course[]>(['quests'], async () => {
		const res = await fetch('/api/quests');
		return (await res.json()) as Course[];
	});
	return (
		<>
			<Head>
				<title>Node Guardians</title>
				<meta name='description' content='Node Guardians frontend' />
			</Head>

			<main>
				<CourseList courses={data} />
			</main>
		</>
	);
}
