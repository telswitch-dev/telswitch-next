<template>
	<!-- item -->
	<div class="stat-bar-item fade-in" :title="`Last updated: ${formatDate(modifiedDate)}`">
		<span class="stat-bar-item-value"> {{ formatNumberWithCommas(value) }} </span>
		<div class="stat-bar-item-label">
			<span>{{ label }}</span> <br />
			<strong>{{ year }}</strong
			><br />
		</div>
	</div>
</template>

<script setup>
import { defineProps, computed } from 'vue'

// Props passed to the component
defineProps({
	value: Number,
	label: String,
	year: String,
	modifiedDate: String,
})

// Format the value with commas
const formatNumberWithCommas = (number) => {
	if (typeof number !== 'number' || isNaN(number)) {
		return '' // Return an empty string if the value is invalid
	}
	return number.toLocaleString('en-US')
}

// Computed property for formatted value
const formattedValue = computed(() => formatNumberWithCommas(value))

// Format the modified date for display
const formatDate = (dateString) => {
	if (!dateString) return '' // Handle empty or undefined dates
	const options = { year: 'numeric', month: 'short', day: 'numeric' }
	return new Date(dateString).toLocaleDateString(undefined, options)
}
</script>

<style scoped>
.stat-bar-item {
	@apply flex flex-col items-center justify-center;
	.stat-bar-item-value {
		@apply mb-1 text-5xl font-bold text-ts-green-mineral-100 drop-shadow-outline max_xl:text-4xl;
	}
	.stat-bar-item-label {
		@apply mt-1 text-center leading-6 text-ts-green-mineral-300 drop-shadow-sm;
	}
}
</style>
