import * as contentful from 'contentful'

const client = contentful.createClient({
	space: process.env.CONTENTFUL_SPACE_ID, // Use process.env for security
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export default client
