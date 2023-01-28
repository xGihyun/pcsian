<script lang="ts">
	import { fade, fly, slide } from 'svelte/transition';
	import { inview } from 'svelte-inview';

	let isInView: boolean;
	const options = { unobserveOnEnter: true, rootMargin: '-30%' };
</script>

	<div
		use:inview={options}
		on:change={({ detail }) => {
			isInView = detail.inView;
		}}
		class={isInView ? 'slide-up' : 'initial-slide-up'}
	>
		<slot name="first" />
	</div>
