// Import the createApp function from the Vue.js library
import { createApp } from 'vue'

// Import the Vue Router instance
import router from './router.js'

// Import the main CSS file for the application
import './styles/main.css'

// Import the main Vue component for the application
import App from './App.vue'

// Create a new Vue application with the App component
const app = createApp(App)

// Use the Vue Router instance with the app
app.use(router)

// Mount the Vue application to the HTML element with the id 'app'
app.mount('#app')

document.body.classList.add('dark')