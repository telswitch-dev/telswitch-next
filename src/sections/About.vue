<!--	About.vue
============================================================================= -->
<script setup>
// JavaScript code for the component goes here
import { ref, onMounted, onUnmounted } from 'vue'
import videoSrc from '@/assets/video/st-tri-network-00.webm'

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
		class="relative flex min-h-[500px] flex-col items-start justify-center gap-6 bg-surface-6 text-surface-2"
	>
		<!-- video bg -->
		<div v-if="!isMobile" class="video-container">
			<video autoplay loop muted>
				<source :src="videoSrc" type="video/webm" />
				Your browser does not support the video tag.
			</video>
		</div>

		<!-- content -->
		<div class="section-inner">
			<div class="flex-1 max_md:hidden">&nbsp;</div>
			<div class="flex-[2]" data-aos="fade-left">
				<h2>About</h2>
				<p>
					Having worked on over a thousand litigation matters involving wage and hour disputes, the
					Telephone Computer Protection Act (“TCPA”) and various commercial disputes,
					<strong>TelSwitch, Inc.</strong> is highly respected for our objectivity and rich insights
					into litigants’ data.
				</p>
				<p>
					Our motto, “Bringing insight into life’s digital fingerprints”, is the result of weaving
					together millions of distinct data points into fact patterns law firms can rely upon at
					various stages of litigation. These datapoints are used to objectively describe digital
					based events without prejudice or confirmation bias.
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
