<script lang="ts">
	import { Button as ButtonPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';
	import { buttonVariants, type Variant, type Size } from '.';

	const {
		class: className = undefined,
		variant = 'default' as Variant,
		size = 'default' as Size,
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
