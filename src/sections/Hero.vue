<!--	Hero.vue
============================================================================= -->
<script setup>
// JavaScript code for the component goes here
</script>

<template>
	<!-- HTML template for the component goes here -->
	<div
		class="flex h-[650px] flex-col items-start justify-center gap-6 bg-gradient-to-l dark:from-surface-6 dark:to-surface-5 dark:text-surface-2"
	>
		<div class="flex h-full w-full items-stretch justify-between gap-4 px-10">
			<div class="flex-1 self-center">
				<h2 class="text-4xl font-bold leading-normal">
					Bringing Insights Into Life’s Digital Fingerprints
				</h2>
				<p class="mt-2 text-xl leading-normal">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati provident dolorem iste
					laboriosam possimus laborum minus, quam voluptatibus quis modi animi, voluptate dolorum a
					aliquam dolore autem pariatur optio inventore! s
				</p>
				<button class="btn btn-primary btn-xl mt-6">Read More…</button>
			</div>
			<div class="flex-1">
				<svg class="h-full w-full">
					<use href="@/assets/telswitch-dude-white.svg#logo" />
				</svg>
			</div>
		</div>
	</div>
</template>

<style scoped>
/* CSS styles for the component go here */
.btn {
	@apply rounded-full border-2 border-surface-6 bg-surface-1/5 px-6 py-2 font-semibold text-surface-2;
}

.btn-xl {
	@apply px-8 py-4 text-2xl;
}

.btn-primary {
	@apply bg-surface-6 text-surface-1/90;
}
</style>
