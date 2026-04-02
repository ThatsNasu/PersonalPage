<script lang="ts">
	import { Button as ButtonPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';
	import { buttonVariants } from '.';

	const {
		class: className,
		variant = 'default',
		size = 'default',
		children,
		...restProps
	} = $props();
</script>

<ButtonPrimitive.Root
	class={cn(buttonVariants({ variant, size, className }))}
	type="button"
	{...restProps}
>
	{@render children?.()}
</ButtonPrimitive.Root>
