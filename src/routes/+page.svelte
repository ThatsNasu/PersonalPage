<script>
    import { formatDate } from '$lib/dateutils';
    import { Button } from "$lib/components/ui/button";

    export let data;
</script>

<section class="w-full h-[5vh] min-h-[100px] flex justify-center items-center">
    <h1>Devlog</h1>
</section>
<section class="p-4">
	<div class="flex flex-col gap-2 w-full max-w-[1200px] mx-auto">
		{#each data.posts as post}
			<div class="bg-muted p-8 rounded-xl shadow-xl">
				<h1 class="flex justify-between">
                    <a href="/devlog/{post.slug}" class="title">{post.title}</a>
				    <p class="text-sm text-muted-foreground">{formatDate(post.date)}</p>
                </h1>
				<p class="description mt-6">{post.description}</p>
                <div class="flex justify-end">
                    <Button variant="ghost" href="/devlog/{post.slug}" class="text-accent-foreground">Full post</Button>
                </div>
            </div>
		{/each}
    </div>
</section>