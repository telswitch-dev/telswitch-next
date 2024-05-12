<script setup>
// import Navigation from '@/components/Navigation.vue'
</script>

<template>
	<footer
		class="flex min-h-[900px] w-full flex-col justify-between gap-8 bg-surface-5 bg-gradient-to-br from-surface-4 to-surface-5 p-8 text-surface-2"
	>
		<div class="flex items-stretch justify-start gap-8">
			<div class="flex-[2] rounded-2xl border border-surface-4 p-8">
				<h2>Partners</h2>
				<ul class="mt-2">
					<li>
						<a href="https://www.graidtech.com/" target="_blank"> GraidTech </a>
						&
						<a href="https://www.nvidia.com/" target="_blank">NVIDIA</a>
					</li>
					<li>
						<a href="https://iconectiv.com/" target="_blank">iConectiv</a>
					</li>
					<li>
						<a href="https://www.fremontbank.com/" target="_blank">Fremont Bank</a>
					</li>
				</ul>
			</div>

			<div class="flex-1 rounded-2xl border border-surface-4 p-8">
				<h2>Contact</h2>
				<div class="">
					<h4 class="mt-2 font-bold">TelSwitch, Inc.</h4>
					<address>
						Address <br />
						City, State, Zip<br />
					</address>
					<ul>
						<li>email@email.com</li>
						<li>111-222-3333</li>
					</ul>
				</div>
			</div>
		</div>
		<div>
			<p class="text-right text-xs text-surface-3/50">
				Site Design by
				<a href="https://reyman.name" target="_blank">Ross A. Reyman</a>
			</p>
		</div>
	</footer>
</template>

<script></script>

<style scoped>
a {
	@apply font-semibold hover:text-ts-orange-coral-400 hover:underline active:text-ts-orange-coral-500;
}
</style>
