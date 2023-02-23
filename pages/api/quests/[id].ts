import { SingleQuest } from '@/types/api';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	try {
		const result = await loadQuestById(String(req.query.id));
		res.status(200).json(result);
	} catch (error) {
		// If the request fails, an error will be thrown
		console.error(error);

		// Send an error response back to the client
		res.status(500).json('An error occurred while fetching the data');
	}
}

export const loadQuestById = async (id: string) => {
	// Fetch a product by id
	const questRes = await fetch(`https://dummyjson.com/products/${id}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	}).then((response) => response.json());

	if (questRes.code) {
		throw new Error('An error occurred while fetching the data');
	}

	const formattedToQuests: SingleQuest = {
		id: questRes.id,
		skillTree: questRes.category.replace('-', ' '), // 'home-decoration' => 'home decoration'
		skill: questRes.brand,
		title: questRes.title,
		difficulty: Math.floor(questRes.rating),
		experience: questRes.stock * 100,
		gold: questRes.price,
		type: '-',
		cover: questRes.thumbnail,
		description: questRes.description,
		rewards: {
			experience: questRes.stock * 100,
			gold: questRes.price
		}
	};

	// Send a response back to the client
	return formattedToQuests;
};
