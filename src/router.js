// Import the necessary modules from Vue Router
import { createRouter, createWebHistory } from 'vue-router'

// Import the Vue components that will be used as pages
import Home from '@/containers/Home.vue'

// Define the routes for the application. Each route is an object with a `path` and a `component`.
// The `path` is the URL path for the route, and the `component` is the Vue component that will be displayed when the user navigates to the path.
const routes = [
	{ path: '/', component: Home }, // Home page route
]

// Create the router instance. The router is configured with a history mode and the routes.
// The history mode is set to `createWebHistory()` which uses the HTML5 history API to change the URL without reloading the page.
const router = createRouter({
	history: createWebHistory(),

	routes,
	// The scrollBehavior function determines the scroll position that will be activated after the navigation.
	// The to, from, and savedPosition arguments are route locations.
	scrollBehavior(to, from, savedPosition) {
		// If the route has a hash, then scroll to the element with the ID that matches the hash

		if (to.hash) {
			return {
				selector: to.hash,
				behavior: 'smooth', // Smooth scroll effect
			}
		} else {
			// Always scroll to the top of the page
			return { x: 0, y: 0 }
		}
	},
})

// Export the router instance so it can be imported and used in other files
export default router
