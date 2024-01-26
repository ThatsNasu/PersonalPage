<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { formatDate } from '$lib/dateutils';

	export let data;

</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>
<div class="p-4">
    <article class="w-full mx-auto max-w-[1200px] bg-muted p-8 px-16 rounded-xl shadow-xl">
        <hgroup class="flex justify-between align-top">
            <h1 class="small-caps">{data.meta.title}</h1>
            <p class="text-sm text-muted-foreground">Published at {formatDate(data.meta.date)}</p>
        </hgroup>
        <div class="flex flex-wrap gap-2 mt-2">
            {#each data.meta.categories as category}
                <span class="surface-4 text-muted-foreground text-sm">&num;{category}</span>
            {/each}
        </div>
        <div class="prose mt-4">
            <svelte:component this={data.content} />
        </div>
        {#if data.meta.references}
            <h3 class="mt-8 text-muted-foreground">References:</h3>
            <div class="flex flex-col items-start mt-2">
                {#each Object.keys(data.meta.references) as reference}
                    <Button variant="link" size="link" class="italic text-muted-foreground" target="_blank" rel="noopener noreferrer" href={data.meta.references[reference]}>{reference}</Button>
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