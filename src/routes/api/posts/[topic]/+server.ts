import { json, type RequestEvent } from '@sveltejs/kit';
import type { Post } from '$lib/types';

async function getPosts({ params }: RequestEvent) {
	let posts: Post[] = [];

	const paths = import.meta.glob('/src/posts/*/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const topic = path.split('/').at(-2);
		if(topic !== params.topic) continue;
		const slug = topic+"/"+path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } satisfies Post;
			post.published && posts.push(post);
		}
	}

	posts = posts.sort((first, second) =>
    	new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts;
}

export async function GET(request) {
	const posts = await getPosts(request);
	return json(posts);
}