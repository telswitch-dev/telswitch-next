<!--	Hero.vue
============================================================================= -->
<script setup>
import { ref, onMounted } from 'vue'
import { fetchDataPoints } from '@/contentfulService'
import DataPoint from '@/components/DataPoint.vue'

// Reactive variable to store fetched data
const dataPoints = ref([])

// Function to fetch data asynchronously
const loadDataPoints = async () => {
	try {
		const fetchedData = await fetchDataPoints()
		dataPoints.value = fetchedData
	} catch (error) {
		console.error('Error fetching data points:', error)
	}
}

// Call the async function inside onMounted synchronously
onMounted(() => {
	loadDataPoints()
})
</script>

<template>
	<!-- HTML template for the component goes here -->
	<div
		class="flex min-h-[520px] flex-col items-start justify-center gap-6 bg-gradient-to-l from-surface-6 to-surface-5 text-surface-2"
	>
		<div class="section-inner">
			<div class="flex-[2] self-center">
				<h2
					class="relative inline-block bg-gradient-to-r from-ts-orange-coral-400 to-blue-500 bg-clip-text text-5xl font-extrabold uppercase leading-none text-surface-1 text-transparent drop-shadow-outline max_lg:mt-4 max_md:text-3xl"
				>
					Bringing Insights Into Life’s Digital Fingerprints
				</h2>
				<p class="text-2xl leading-normal max_md:text-lg">
					<strong>TelSwitch, Inc.</strong> specializes in efficiently and reliably structuring and
					analyzing large sets of data that are used in the litigation process, and providing expert
					testimony.
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

		<!--	stat-bar
		============================================================================= -->
		<div class="stat-bar fade-in fast">
			<!-- <DataPoint
				value="93"
				label="Projects Initiated"
				year="2023"
				modifiedDate="2025-04-01T10:00:00Z"
			/> -->

			<DataPoint
				v-for="(data, index) in dataPoints"
				:key="index"
				:value="data.value"
				:label="data.label"
				:year="data.year"
				:modifiedDate="data.modifiedDate"
			/>

			<!-- item -->
			<!-- <div class="stat-bar-item fade-in">
				<span class="stat-bar-item-value"> 93 </span>
				<div class="stat-bar-item-label">
					<span>Projects Initiated</span> <br />
					<strong>2023</strong>
				</div>
			</div> -->

			<!-- <div class="stat-bar-item fade-in">
				<span class="stat-bar-item-value"> 113 </span>
				<div class="stat-bar-item-label">
					<span>Projects Initiated</span> <br />
					<strong>2024</strong>
				</div>
			</div> -->

			<!-- <div class="stat-bar-item fade-in">
				<span class="stat-bar-item-value"> 121 </span>
				<div class="stat-bar-item-label">
					<span>National DNC</span> <br />
					<span>Audits</span>
				</div>
			</div> -->

			<!--<div class="stat-bar-item fade-in">
				<span class="stat-bar-item-value" title="Aproximation of DNC Records Aggregated in 2023">
					91,881,927,289
					<!~~ <sup
						class="inline-block -translate-y-5 text-xs text-ts-green-mineral-400 max_xl:-translate-y-2"
					>
						*
					</sup> ~~>
				</span>
				<div class="stat-bar-item-label">
					<span>DNC Records</span><br />
					<span class="">Consumed in 2024</span>
				</div>
			</div>-->
		</div>
	</div>
</template>

<style scoped>
/* CSS styles for the component go here */

/*	stat-bar
============================================================================= */
.stat-bar {
	@apply mx-auto mt-16 flex items-start justify-center gap-10 rounded-[3rem] bg-gradient-to-b from-ts-green-mineral-600 to-ts-green-mineral-800 p-8 px-24 text-lg text-ts-green-mineral-200 drop-shadow-outline max_xl:p-4 max_xl:px-24 max_xl:text-base max_lg:w-full max_lg:flex-col max_lg:items-center max_lg:rounded-none;
	.stat-bar-item {
		@apply flex flex-col items-center justify-center;
		.stat-bar-item-value {
			@apply mb-1 text-5xl font-bold text-ts-green-mineral-100 drop-shadow-outline max_xl:text-4xl;
		}
		.stat-bar-item-label {
			@apply mt-1 text-center leading-6 text-ts-green-mineral-300 drop-shadow-sm;
		}
	}
}

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
