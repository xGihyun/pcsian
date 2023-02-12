<script lang="ts">
	export let url: URL;
</script>

{#key url}
	<div class="fade-in">
		<slot />
	</div>
{/key}

<style>
	.fade-in {
		animation: fade-in 2s;
	}

	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		50%,
		100% {
			opacity: 1;
		}
	}
</style>
