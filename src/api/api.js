const API_BASE = 'https://gateway.marvel.com/v1/public'
const MARVEL_API_PUBLIC = 'a2247180c2419763e9dd936e4d1f0aab'
const requestConfig = window.location.hostname === 'localhost'
  ? {
      "method": "GET",
      "referrer": "developer.marvel.com",  // required for API responses
      "referrerPolicy": "no-referrer-when-downgrade"
    }
  : { "method": "GET" }

export default {

  getComicsByDateDescriptor: (dateString) => {
    const fetchURI = `${API_BASE}/comics?dateDescriptor=${dateString}&apikey=${MARVEL_API_PUBLIC}&limit=100`
    return fetch(fetchURI, requestConfig)
  }

}
