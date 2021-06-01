import axios from 'axios'

export const fetchJokes = async (apikey: string) => {
	try {
		const resp = await axios.get(apikey)
		return resp.data
	} catch (err) {
		console.error(err)
	}
}
