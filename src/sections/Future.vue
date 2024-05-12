<!--	Future.vue
============================================================================= -->
<script setup>
// JavaScript code for the component goes here
import { ref, onMounted, onUnmounted } from 'vue'
import videoSrc from '@/assets/video/st-nebula-cloud-01.webm'

// show/hide video depending on mobile or desktop
const isMobile = ref(window.innerWidth <= 768)
const handleResize = () => {
	isMobile.value = window.innerWidth <= 768
}
onMounted(() => {
	window.addEventListener('resize', handleResize)
})
onUnmounted(() => {
	window.removeEventListener('resize', handleResize)
})
</script>

<template>
	<!-- HTML template for the component goes here -->
	<div
		class="relative flex min-h-[500px] flex-col items-start justify-center gap-6 bg-gradient-to-b dark:from-surface-6 dark:to-surface-5 dark:text-surface-2"
	>
		<!-- video bg -->
		<div v-if="!isMobile" class="video-container">
			<video autoplay loop muted>
				<source :src="videoSrc" type="video/webm" />
				Your browser does not support the video tag.
			</video>
		</div>
		<div class="section-inner">
			<div class="flex-1 max_m_xl:hidden">&nbsp;</div>
			<div class="flex-[2]" data-aos="fade-left">
				<h2>Future</h2>
				<p>
					In 2024, TelSwitch, Inc. began incorporating NVIDIA’s GPU-driven data acceleration into
					our in-house SQL data warehouses using a product called GRAID to achieve a drastic
					increase in the efficiency of our back office data processing capabilities. We have
					achieved a measurable increase in the expediency of data processing and in increasing the
					timeliness in delivering results to customers.
				</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
/* CSS styles for the component go here */
.video-container {
	&::after {
		@apply bg-surface-6/90;
	}
}
</style>
