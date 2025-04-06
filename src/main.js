// Import the createApp function from the Vue.js library
import { createApp } from 'vue'

// Import the Vue Router instance
import router from './router.js'

// Import the Popper component
import Popper from 'vue3-popper'

// Import the main CSS file for the application
import './styles/main.css'

// Import Animate on Scroll
import AOS from 'aos'
import 'aos/dist/aos.css'

// Import the main Vue component for the application
import App from './App.vue'

// Create a new Vue application with the App component
const app = createApp(App)

// Use the Vue Router instance with the app
app.use(router)

// Use the Popper component with the app
app.component('Popper', Popper)

// Initialize Animate on Scroll
AOS.init()

// Mount the Vue application to the HTML element with the id 'app'
app.mount('#app')

document.body.classList.add('dark')

// Testing Contentful
// import './testContentful'

// import { fetchDataPoints } from './contentfulService'

// fetchDataPoints().then((dataPoints) => {
// 	console.log('Fetched data points:', dataPoints)
// })
