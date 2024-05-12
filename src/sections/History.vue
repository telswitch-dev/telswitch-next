<!--	History.vue
============================================================================= -->
<script setup>
// JavaScript code for the component goes here
import { ref, onMounted, onUnmounted } from 'vue'
import videoSrc from '@/assets/video/st-nebula-ring-cloud-00.webm'

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
		class="relative flex min-h-[600px] flex-col items-start justify-center gap-6 bg-surface-5 text-surface-2"
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
			<div class="flex-1 max_m_xl:hidden">&nbsp;</div>
			<div class="flex-[2]" data-aos="fade-left">
				<h2>History <small>Background of TelSwitch, Inc.</small></h2>
				<p>
					Our story began in 1991 when TelSwitch, Inc.’s founder presented a mock-business to his
					high school economics class based upon the premise of how designing a more efficient
					digital phone switch could lead to more cost effective transmission of phone calls. After
					graduating, that business became a reality, and in 1994, TelSwitch, Inc. was incorporated
					in California.
				</p>
				<p>
					Although TelSwitch, Inc. started off as a telephone service provider, we quickly became
					recognized as a leader in the development of hardware and software for use with
					transmitting phone calls and then then collecting and rating those telephone calls. After
					divesting our retail assets, TelSwitch, Inc. focused our commitments on bring solutions to
					other telephone companies, to whom we licensed our unique hardware and software.
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
