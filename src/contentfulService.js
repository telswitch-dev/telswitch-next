import client from './contentful'

export const fetchDataPoints = async () => {
	try {
		const response = await client.getEntries({
			content_type: 'dataPoint',
			order: 'fields.displayOrderIndex', // Sort by DisplayOrderIndex (ascending)
		})
		return response.items.map((item) => ({
			value: item.fields.displayValue,
			label: item.fields.displayLabel,
			// year: new Date(item.fields.displayDate).getFullYear().toString(),
			year: item.fields.displayDate
				? new Date(item.fields.displayDate).getFullYear().toString() // Extract year if date exists
				: '\u00A0', // Return non-breaking space if date is blank
			modifiedDate: item.sys.updatedAt,
		}))
	} catch (error) {
		console.error('Error fetching data points:', error)
		return []
	}
}
