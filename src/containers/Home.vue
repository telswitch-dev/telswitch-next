<script setup>
import Hero from '@/sections/Hero.vue'
import About from '@/sections/About.vue'
import DataAnalysis from '@/sections/DataAnalysis.vue'
import History from '@/sections/History.vue'
import Expertise from '@/sections/Expertise.vue'
import Future from '@/sections/Future.vue'
import Contact from '@/sections/Contact.vue'
</script>

<template>
	<section id="hero" class="h-full">
		<Hero />
	</section>
	<section id="about" class="h-full">
		<About />
	</section>
	<section id="data-analysis" class="h-full">
		<DataAnalysis />
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
	<section id="contact" class="h-full">
		<Contact />
	</section>
</template>
