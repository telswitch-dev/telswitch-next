<script setup>
// JavaScript code for the component goes here
import { watchEffect, reactive } from 'vue'
import { useRoute } from 'vue-router'

import Header from '@/containers/Header.vue'
import Footer from '@/containers/Footer.vue'
import FooterStrip from '@/containers/FooterStrip.vue'
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
		<FooterStrip />
	</div>
	<Maintenance v-else />
</template>

<style scoped>
/* CSS styles for the component go here */
</style>
