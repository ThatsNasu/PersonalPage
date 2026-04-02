<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { formatDate } from '$lib/dateutils';

	const { data } = $props();
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>
<div class="p-4">
	<article class="bg-muted mx-auto w-full max-w-[1200px] rounded-xl p-8 px-16 shadow-xl">
		<hgroup class="flex justify-between align-top">
			<h1 class="small-caps">{data.meta.title}</h1>
			<p class="text-muted-foreground text-sm">Published at {formatDate(data.meta.date)}</p>
		</hgroup>
		<div class="mt-2 flex flex-wrap gap-2">
			{#each data.meta.categories as category (category)}
				<span class="surface-4 text-muted-foreground text-sm">&num;{category}</span>
			{/each}
		</div>
		<div class="prose mt-4">
			<data.content />
		</div>
		{#if data.meta.references}
			<h3 class="text-muted-foreground mt-8">References:</h3>
			<div class="mt-2 flex flex-col items-start">
				{#each Object.keys(data.meta.references) as reference (reference)}
					<Button
						variant="link"
						size="link"
						class="text-muted-foreground italic"
						target="_blank"
						rel="noopener noreferrer"
						href={data.meta.references[reference]}>{reference}</Button
					>
				{/each}
			</div>
		{/if}
	</article>
</div>

<style>
	.small-caps {
		font-variant: small-caps;
	}
</style>
