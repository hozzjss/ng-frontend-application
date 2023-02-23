import { GetStaticPaths, GetStaticProps } from 'next';

import { SingleQuest } from '@/types/api';
import { loadQuestById } from '../api/quests/[id]';
import QuestOverview from '@/components/quest-overview';

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

export const getStaticPaths: GetStaticPaths = () => {
	return {
		paths: [],
		fallback: 'blocking'
	};
};
