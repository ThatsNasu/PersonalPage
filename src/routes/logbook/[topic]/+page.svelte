<script>
	import { formatDate } from '$lib/dateutils';
	import { Button } from '$lib/components/ui/button';

	export let data;
</script>

<section class="flex h-[5vh] min-h-[100px] w-full items-center justify-center">
	<h1>LogBook</h1>
</section>
<section class="p-4">
	<div class="mx-auto flex w-full max-w-[1200px] flex-col gap-2">
		{#each data.posts as post (post.slug)}
			<div class="bg-muted rounded-xl p-8 shadow-xl">
				<h1 class="flex justify-between">
					<a href="/logbook/{post.slug}" class="title">{post.title}</a>
					<p class="text-muted-foreground text-sm">{formatDate(post.date)}</p>
				</h1>
				<p class="description mt-6">{post.description}</p>
				<div class="flex justify-end">
					<Button variant="ghost" href="/logbook/{post.slug}" class="text-accent-foreground"
						>Full post</Button
					>
				</div>
			</div>
		{/each}
	</div>
</section>
