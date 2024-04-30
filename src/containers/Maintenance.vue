<!-- Maintenance.vue -->
<template>
	<div class="maintenance">
		<h1 class="hidden">TelSwitch</h1>
		<div class="flex h-full w-full items-center justify-center">
			<!-- <img src="https://placehold.co/600x400" alt="" /> -->
			<div>
				<p class="text-center font-display text-8xl tracking-tight">
					TelSwitch <small>Inc.</small>
				</p>
				<p class="text-center text-xl font-extralight uppercase tracking-[0.25rem]">
					Bringing Insight Into Life’s Digital Fingerprints
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Maintenance',
}
</script>

<style scoped>
/* Add your CSS styles here */
.maintenance {
	@apply h-screen w-screen bg-gradient-to-tl from-surface-1 to-surface-3 text-surface-5;
}
</style>
