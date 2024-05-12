<!--	Hero.vue
============================================================================= -->
<script setup>
// JavaScript code for the component goes here
</script>

<template>
	<!-- HTML template for the component goes here -->
	<div
		class="flex min-h-[520px] flex-col items-start justify-center gap-6 bg-gradient-to-l from-surface-6 to-surface-5 text-surface-2"
	>
		<div class="section-inner">
			<div class="flex-[2] self-center">
				<h2
					class="relative inline-block bg-gradient-to-r from-ts-orange-coral-400 to-ts-green-mineral-600 bg-clip-text text-5xl font-extrabold uppercase leading-none text-surface-1 text-transparent drop-shadow-outline max_md:text-3xl"
				>
					Bringing Insights Into Life’s Digital Fingerprints
				</h2>
				<p class="text-2xl leading-normal max_md:text-lg">
					<strong>TelSwitch, Inc.</strong> specializes in validating data used in litigation, and
					providing expert testimony in court.
				</p>
				<!-- <button class="rt-btn mt-6 text-xl">
					<span>Read More…</span>
				</button> -->
			</div>
			<div class="fade-in flex-1 max_md:mt-4">
				<svg class="h-full w-full -translate-x-10 scale-125">
					<use href="@/assets/telswitch-dude-white.svg#logo" />
				</svg>
			</div>
		</div>
		<div
			class="fade-in fast mx-auto mt-16 flex items-start justify-center gap-8 rounded-full bg-gradient-to-b from-ts-green-mineral-600 to-ts-green-mineral-800 p-8 px-24 text-ts-green-mineral-200 drop-shadow-outline max_lg:p-4 max_lg:px-24 max_lg:text-base max_md:w-full max_md:flex-col max_md:items-center max_md:rounded-none"
		>
			<div class="fade-in flex flex-col items-center justify-center text-lg font-light">
				<span
					class="mb-1 text-5xl font-bold text-ts-green-mineral-100 drop-shadow-outline max_lg:text-3xl"
				>
					94
				</span>
				<span>Cases in 2022</span>
			</div>

			<div class="fade-in flex flex-col items-center justify-center">
				<span
					class="mb-1 text-5xl font-bold text-ts-green-mineral-100 drop-shadow-outline max_lg:text-3xl"
				>
					93
				</span>
				<span>Cases in 2023</span>
			</div>

			<div class="fade-in flex flex-col items-center justify-center">
				<span
					class="mb-1 text-5xl font-bold text-ts-green-mineral-100 drop-shadow-outline max_lg:text-3xl"
				>
					81
				</span>
				<span>National DNC Audits</span>
			</div>

			<div class="fade-in flex flex-col items-center justify-center self-center">
				<span
					class="mb-1 text-4xl font-bold text-ts-green-mineral-100 drop-shadow-outline max_lg:text-2xl max_md:text-3xl"
					title="Aproximation of DNC Records Aggregated in 2023"
				>
					90,576,778,862<sup
						class="inline-block -translate-y-3 text-xs text-ts-green-mineral-400 max_lg:-translate-y-1"
					>
						*
					</sup>
				</span>
				<span
					>DNC Records Aggregated
					<small class="max_md:block max_md:text-center">(Yearly)</small></span
				>
			</div>
		</div>
	</div>
</template>

<style scoped>
/* CSS styles for the component go here */
@keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

.fade-in {
	opacity: 0; /* Start at opacity 0 */
	animation: fadeIn 2s ease-in-out forwards;
	&.fast {
		animation-duration: 0.5s;
	}
}

/* Apply different animation delays */
.fade-in:nth-child(1) {
	animation-delay: 0.5s;
}
.fade-in:nth-child(2) {
	animation-delay: 1s;
}
.fade-in:nth-child(3) {
	animation-delay: 1.5s;
}
.fade-in:nth-child(4) {
	animation-delay: 2s;
}
</style>
