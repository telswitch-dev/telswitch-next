<script setup>
// JavaScript code for the component goes here
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'

import Header from '@/containers/Header.vue'

const route = useRoute()

watchEffect(() => {
	const _ = route.path
	window.scrollTo(0, 0)
})
</script>

<template>
	<!-- HTML template for the component goes here -->
	<Header />
	<main class="content h-full">
		<router-view v-slot="{ Component }">
			<component :is="Component" />
		</router-view>
	</main>
	<footer class="pb-[1000px]">footer</footer>
</template>

<style scoped>
/* CSS styles for the component go here */
</style>
