<script setup>
// import Navigation from '@/components/Navigation.vue'
</script>

<template>
	<header class="">
		<div class="flex items-center justify-between gap-4 p-6">
			<div class="logo">
				<span class="font-display text-2xl">TelSwitch</span>
			</div>

			<div>
				<!-- This div becomes visible when the viewport is mobile size and the mobile navigation is active -->
				<div
					:class="{ open: mobileNav }"
					class="max_md:block hidden"
					v-if="isMobile"
					@click="mobileNav = !mobileNav"
				>
					<svg class="hamburger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
						<line class="line line1" x1="4" y1="8" x2="28" y2="8" />
						<line class="line line2" x1="4" y1="16" x2="28" y2="16" />
						<line class="line line3" x1="4" y1="24" x2="28" y2="24" />
					</svg>
				</div>
				<!-- This unordered list becomes visible when the viewport is not mobile size or the mobile navigation is active -->
				<ul
					:class="{ 'nav-desktop': !mobileNav, 'nav-mobile': mobileNav }"
					v-show="!isMobile || mobileNav"
				>
					<!-- Each list item represents a section in the navigation menu. When clicked, it triggers the `navigateToSection` method with the corresponding section name as an argument. This method updates the `activeSection` state and navigates to the corresponding section of the page. -->
					<!-- <li
						:class="{ 'active-home': activeSection === 'home' }"
						@click="navigateToSection('home')"
					>
						<a>Home</a>
					</li> -->
					<li
						:class="{ 'active-about': activeSection === 'about' }"
						@click="navigateToSection('about')"
					>
						<a>About</a>
					</li>
					<li
						:class="{ 'active-data-analysis': activeSection === 'data-analysis' }"
						@click="navigateToSection('data-analysis')"
					>
						<a>Data Analysis</a>
					</li>
					<li
						:class="{ 'active-history': activeSection === 'history' }"
						@click="navigateToSection('history')"
					>
						<a>History</a>
					</li>
					<li
						:class="{ 'active-expertise': activeSection === 'expertise' }"
						@click="navigateToSection('expertise')"
					>
						<a>Expertise</a>
					</li>
					<li
						:class="{ 'active-future': activeSection === 'future' }"
						@click="navigateToSection('future')"
					>
						<a>Future</a>
					</li>
					<li
						:class="{ 'active-contact': activeSection === 'contact' }"
						@click="navigateToSection('contact')"
					>
						<a>Contact</a>
					</li>
				</ul>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	data() {
		return {
			isMobile: false, // Tracks if the device is mobile size
			mobileNav: false, // Tracks if the mobile navigation is active
			activeSection: 'home', // Tracks the currently active section
			pendingSection: null, // Tracks the section that is about to become active
		}
	},
	mounted() {
		// Add an event listener for the 'resize' event when the component is mounted
		// This will call the `handleResize` method whenever the window is resized
		window.addEventListener('resize', this.handleResize)

		// Call the `handleResize` method immediately to set the initial state
		this.handleResize()
	},
	beforeDestroy() {
		// Remove the event listener when the component is destroyed to prevent memory leaks
		window.removeEventListener('resize', this.handleResize)
	},
	watch: {
		// Watch the `$route` object for changes
		// This will call the provided function whenever the route changes
		$route() {
			// Wait for the next DOM update cycle to complete before calling `scrollToSection`
			this.$nextTick(() => {
				if (this.activeSection) {
					// Use `requestAnimationFrame` to ensure smooth scrolling
					requestAnimationFrame(() => {
						this.scrollToSection(this.activeSection)
					})
				}
			})
			// If the new route is the Guestbook route, set activeSection to null
			if (this.$route.path === '/guestbook') {
				this.activeSection = null
			}
		},
	},
	methods: {
		handleResize() {
			// Set `isMobile` to true if the window width is less than or equal to 768 pixels
			this.isMobile = window.innerWidth <= 768
			// If the viewport is not mobile, ensure the navigation menu is hidden
			if (!this.isMobile) {
				this.mobileNav = false
			}
		},
		navigateToSection(section) {
			// Set the active section and close the mobile navigation
			this.activeSection = section
			this.mobileNav = false

			// Navigate to the new section if it is not already the current route
			if (this.$route.path !== '/' || this.$route.hash !== '#' + section) {
				this.$router.push({ path: '/', hash: '#' + section })
			}
		},
		scrollToSection(section) {
			// Get the element for the section
			const element = document.querySelector('#' + section)
			if (element) {
				// Use `setTimeout` with a delay of 0 to ensure that scrolling happens after any pending DOM updates
				setTimeout(() => {
					// Calculate the top position of the element
					const rect = element.getBoundingClientRect()
					const scrollTop = window.pageYOffset || document.documentElement.scrollTop
					let offsetTop = rect.top + scrollTop - 88 // Adjust this value as needed

					// Adjust the scroll position if coming from the Guestbook route
					// if (this.$route.path === '/guestbook') {
					// 	offsetTop = 120 // Adjust this value as needed
					// }

					// Scroll to the calculated position
					window.scrollTo({
						top: offsetTop,
						behavior: 'smooth',
					})
				}, 0)
			}
		},
	},
}
</script>

<style scoped>
/* basics */
header {
	@apply dark:bg-surface-6 dark:text-surface-1 sticky top-0 z-50 h-[88px] w-full bg-white/85 backdrop-blur-md dark:bg-opacity-90;
}

header ul {
	@apply dark:text-surface-1 flex items-baseline justify-start font-light text-gray-500/70;
}

/* hamburger */
.hamburger {
	cursor: pointer;
	width: 28px;
	height: 28px;
}

.hamburger .line {
	@apply stroke-gray-600;
	stroke-width: 3;
	transition: all 0.2s ease;
}

div.open .hamburger .line1 {
	transform: translateY(8px) rotate(45deg);
	transform-origin: 50% 8px;
}

div.open .hamburger .line2 {
	opacity: 0;
}

div.open .hamburger .line3 {
	transform: translateY(-8px) rotate(-45deg);
	transform-origin: 50% 24px;
}

/* header navigation */
.nav-desktop li,
.nav-mobile li {
	@apply cursor-pointer;
}

.nav-desktop {
	@apply max_md:hidden flex-row gap-6;
}
/* nav in mobile */
.nav-mobile {
	@apply absolute left-0 top-[88px] h-screen w-screen flex-col gap-4 bg-gray-200/90 p-6 backdrop-blur-sm;
}

.active {
	@apply text-red-500;
}

/* .active-home {
	@apply text-orange-900;
} */
.active-about {
	@apply text-gray-200;
}
.active-rsvp {
	@apply text-blue-200;
}
.active-share {
	@apply text-indigo-200;
}
.active-gallery {
	@apply text-purple-200;
}
.active-music {
	@apply text-green-200;
}
.active-quiz {
	@apply text-orange-200;
}
</style>