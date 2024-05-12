<script setup>
// import Navigation from '@/components/Navigation.vue'
</script>

<template>
	<footer
		class="flex min-h-[900px] w-full flex-col justify-between gap-8 bg-surface-5 bg-gradient-to-br from-surface-4 to-surface-5 p-8 text-surface-2"
	>
		<div class="flex items-stretch justify-start gap-8 max_m_xl:flex-col">
			<div class="flex-[2] rounded-2xl border border-surface-4 p-8">
				<h2>Partners</h2>
				<div class="mt-2">
					<div>
						<Popper arrow placement="right" hover>
							<div class="min-w-[160px]">
								<a href="https://www.graidtech.com/" target="_blank"> GraidTech </a>
								&
								<a href="https://www.nvidia.com/" target="_blank">NVIDIA</a>
							</div>

							<template #content>
								<div class="w-[500px]">
									<p class="mt-0">
										<strong>TelSwitch, Inc</strong> integrates <strong>NVIDIA</strong> GPU's (via
										<strong>GRAID</strong>) into the fabric of our data workflow in order to achieve
										dramatically improved data processing capability. By employing NVIDIA GPU's into
										our strategy, we have been able to maximize our daily handling of hundreds of
										millions of rows of data. We continue to migrate our operations toward 100%
										GRAID and NVIDIA framework.
									</p>
								</div>
							</template>
						</Popper>
					</div>

					<div>
						<Popper arrow placement="right" hover>
							<div class="min-w-[160px]">
								<a href="https://iconectiv.com/" target="_blank">iConectiv</a>
							</div>
							<template #content>
								<div class="w-[500px]">
									<p class="mt-0">
										<strong>TelSwitch, Inc.</strong> is a reseller of the
										<strong>iConectiv</strong> family of products that can be used to reliably
										identify whether a telephone number is ported, and if ported, whether the number
										was wireless or wireline for before or after the port, and for how long it
										maintained that designation.
									</p>
									<p>
										Non-dialing customers of TelSwitch, Inc. also enjoy the enhanced benefit of
										no-charge isDNC tagging for audit purposes, to identify whether numbers have
										been on the national Do-Not-Call list more than thirty (30) days.
									</p>
								</div>
							</template>
						</Popper>
					</div>

					<div>
						<Popper arrow placement="right" hover>
							<div class="min-w-[160px]">
								<a href="https://www.fremontbank.com/" target="_blank">Fremont Bank</a>
							</div>
							<template #content>
								<div class="w-[500px]">
									<p class="mt-0">
										<strong>TelSwitch, Inc.</strong> utilizes the financial management strategies of
										Fremont Bank to balance periods of short term growth with continued long term
										business stability.
									</p>
								</div>
							</template>
						</Popper>
					</div>
				</div>
			</div>

			<div class="flex-1 rounded-2xl border border-surface-4 p-8">
				<h2>Contact</h2>
				<div class="">
					<h4 class="mt-2 font-bold">TelSwitch, Inc.</h4>
					<address>
						1937 Oak Park Blvd <br />
						Suite D <br />
						Pleasant Hill, CA, 94523<br />
					</address>
					<ul>
						<li>info@telswitch.com</li>
						<li>(209) 235-5555</li>
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

<style>
/*	Popper styling
	============================================================================= */
:root {
	--popper-theme-background-color: theme('colors.surface.3');
	--popper-theme-background-color-hover: theme('colors.surface.3');
	--popper-theme-text-color: theme('colors.surface.5');
	--popper-theme-border-width: 0;
	--popper-theme-border-style: solid;
	--popper-theme-border-radius: 1rem;
	--popper-theme-padding: 2rem;
	--popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}
</style>
