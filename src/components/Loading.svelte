<script lang="ts">
	import '../styles/loading.css';

	export let style: string;
</script>

<div
	class={`absolute left-0 top-0 z-[999] flex h-screen w-full items-center justify-center bg-black ${style}`}
>
	<div class="loading-spinner">
		<div class="loading">
			<div />
		</div>
	</div>
</div>
