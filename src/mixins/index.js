import axios from 'axios'

const serverUrl = 'http://52.78.52.247/'

axios.defaults.baseURL = serverUrl

axios.defaults.headers['Access-Control-Allow-Origin'] = '*'
/* eslint-disable */
export default {
  data() {
    return {
      serverUrl: serverUrl
    }
  },
  methods: {
    async $get(url) {
      return (
        await axios.get(url).catch((e) => {
          console.log(e)
        })
      ).data
    }
  }
}
