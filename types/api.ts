export type Course = {
	id: number;
	skillTree: string;
	skill: string;
	title: string;
	difficulty: number;
	experience: number;
	gold: number;
	type: string;
	cover: string;
};

export interface SingleQuest {
	id: number;
	skillTree: string;
	skill: string;
	title: string;
	difficulty: number;
	experience: number;
	gold: number;
	type: string;
	cover: string;
	description: string;
	rewards: Rewards;
}

interface Rewards {
	experience: number;
	gold: number;
}
