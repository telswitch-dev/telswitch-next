import client from './contentful' // Default import

// Fetch entries from Contentful
client
	.getEntries()
	.then((response) => {
		console.log('Entries fetched successfully:', response.items)
		if (response.items.length === 0) {
			console.warn('No entries found. Make sure you have published entries in Contentful.')
		}
	})
	.catch((error) => {
		console.error('Error fetching entries:', error.message)
	})
