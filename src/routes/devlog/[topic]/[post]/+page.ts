import type { Post } from '$lib/types';
import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		const paths = await import.meta.glob(`/src/posts/openirc/1.md`, { eager: true });

		for (const path in paths) {
			const file = paths[path];
			const topic = path.split('/').at(-2);
			if(topic !== params.topic) continue;
			const slug = topic+"/"+path.split('/').at(-1)?.replace('.md', '');
	
			if (file && typeof file === 'object' && 'metadata' in file && 'default' in file && slug) {
				const metadata = file.metadata as Omit<Post, 'slug'>;
				return {
					meta: metadata,
					content: file.default
				}
			}
		}
	} catch (e) {
		throw error(404, `Could not find post ${params.post}`)
	}
}