<script setup>
// JavaScript code for the component goes here
import { watchEffect, reactive } from 'vue'
import { useRoute } from 'vue-router'

import Header from '@/containers/Header.vue'
import Footer from '@/containers/Footer.vue'
import Maintenance from '@/containers/Maintenance.vue'

const route = useRoute()
const state = reactive({ maintenanceMode: false }) // Set to true or false based on your maintenance status

watchEffect(() => {
	const _ = route.path
	window.scrollTo(0, 0)
})
</script>

<template>
	<!-- HTML template for the component goes here -->
	<div v-if="!state.maintenanceMode">
		<Header />
		<main class="content h-full">
			<router-view v-slot="{ Component }">
				<component :is="Component" />
			</router-view>
		</main>
		<Footer />
		<div class="footer-strip">
			<div class="mt-2 flex items-center justify-start gap-4">
				<span class="text-xs text-surface-3/50">TelSwitch’s Advancement Partners:</span>
				<svg class="inline-block h-[20px] w-[190px]">
					<use href="@/assets/graid-logo.svg#logo" />
				</svg>
				<svg class="inline-block h-[16px] w-[180px]">
					<use href="@/assets/nvidia-logo.svg#logo" />
				</svg>
				<svg class="inline-block h-[14px] w-[165px]">
					<use href="@/assets/ic-logo.svg#logo" />
				</svg>
				<svg class="inline-block h-[18px] w-[120px]">
					<use href="@/assets/fbank-logo-fullcolor-rev.svg#logo" />
				</svg>
			</div>
		</div>
	</div>
	<Maintenance v-else />
</template>

<style scoped>
/* CSS styles for the component go here */
.footer-strip {
	@apply fixed bottom-0 left-0 flex h-12 w-full items-center justify-center bg-surface-6/75 text-center text-white backdrop-blur max_m_xl:hidden;
}
</style>
