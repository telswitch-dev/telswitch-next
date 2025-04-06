import * as contentful from 'contentful'

const client = contentful.createClient({
	space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
	accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
})

// Export the client as a default export
export default client
