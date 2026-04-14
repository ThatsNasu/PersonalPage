import type { Post } from '$lib/types';
import type { Component } from 'svelte';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const paths = await import.meta.glob(`/src/posts/*/*.md`, { eager: true });

		for (const path in paths) {
			const file = paths[path];
			const topic = path.split('/').at(-2);
			const post = path.split('/').at(-1)?.replace('.md', '');
			if (topic !== params.topic || post !== params.post) continue;
			const slug = topic + '/' + post;

			if (file && typeof file === 'object' && 'metadata' in file && 'default' in file && slug) {
				const metadata = file.metadata as Omit<Post, 'slug'>;
				return {
					meta: metadata,
					content: file.default as Component
				};
			}
		}
	} catch {
		throw error(404, `Could not find post ${params.post}`);
	}
	throw error(404, `Could not find post ${params.post}`);
}
