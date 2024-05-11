<script setup>
import Hero from '@/sections/Hero.vue'
import About from '@/sections/About.vue'
import DataAnalytics from '@/sections/DataAnalytics.vue'
import History from '@/sections/History.vue'
import Expertise from '@/sections/Expertise.vue'
import Future from '@/sections/Future.vue'
import Products from '@/sections/Products.vue'
</script>

<template>
	<section id="hero" class="h-full">
		<Hero />
	</section>
	<section id="about" class="h-full">
		<About />
	</section>
	<section id="data-analytics" class="h-full">
		<DataAnalytics />
	</section>
	<section id="history" class="h-full">
		<History />
	</section>
	<section id="expertise" class="h-full">
		<Expertise />
	</section>
	<section id="future" class="h-full">
		<Future />
	</section>
	<section id="products" class="h-full">
		<Products />
	</section>
</template>
