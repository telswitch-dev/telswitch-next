import client from './contentful'

export const fetchDataPoints = async () => {
	// throw new Error('Simulated Contentful API failure') // Force an error for testing
	try {
		const response = await client.getEntries({
			content_type: 'dataPoint',
			order: 'fields.displayOrderIndex', // Sort by DisplayOrderIndex (ascending)
		})
		return response.items.map((item) => {
			// console.log('Raw displayDate:', item.fields.displayDate) // Log the raw date
			return {
				value: item.fields.displayValue,
				label: item.fields.displayLabel,
				year: item.fields.displayDate
					? new Date(item.fields.displayDate).getUTCFullYear().toString() // Extract year if date exists
					: '\u00A0', // Return non-breaking space if date is blank
				modifiedDate: item.sys.updatedAt,
			}
		})
	} catch (error) {
		console.error('Error fetching data points:', error)
		return []
	}
}
