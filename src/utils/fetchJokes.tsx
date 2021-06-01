import axios from 'axios'

export const fetchJokes = async (apiKey: string) => {
	try {
		const resp = await axios.get(apiKey)
		return resp.data
	} catch (err) {
		console.error(err)
	}
}
