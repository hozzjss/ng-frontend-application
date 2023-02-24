import { GetStaticPaths, GetStaticProps } from 'next';

import { Course, SingleQuest } from '@/types/api';
import { loadQuestById } from '../api/quests/[id]';
import QuestOverview from '@/components/quest-overview';
import { loadQuests } from '../api/quests';

export default function Quest({ data }: { data: SingleQuest }) {
	return <QuestOverview quest={data} />;
}

export const getStaticProps: GetStaticProps<{ data: SingleQuest | null }, { id: string }> = async ({ params }) => {
	if (params?.id) {
		const { id } = params;

		const data = await loadQuestById(id);
		return {
			props: {
				data
			}
		};
	}

	return {
		notFound: true,
		props: null
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const quests: Course[] = await loadQuests();
	return {
		paths: quests.map((q) => ({
			params: { id: String(q.id) }
		})),
		fallback: 'blocking'
	};
};
