export type Reference = {
	title: string;
	url: string;
};
export type Post = {
	id: number;
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: string[];
	published: boolean;
	references: Record<string, string>;
};
