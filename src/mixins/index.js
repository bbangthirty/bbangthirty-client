import axios from 'axios'

const serverUrl = 'https://bbangthirty.ml/'

axios.defaults.baseURL = serverUrl
axios.defaults.headers['Access-Control-Allow-Origin'] = '*'
axios.defaults.withCredentials = true

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
    },
    async $post(url, data) {
      return await axios.post(url, data).catch((e) => {
        console.log(e)
      })
    },
    async $put(url, data) {
      return await axios.put(url, data).catch((e) => {
        console.log(e)
      })
    },
    async $delete(url) {
      return await axios.delete(url).catch((e) => {
        console.log(e)
      })
    }
  }
}
