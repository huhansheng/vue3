import axios from 'axios'
axios.defaults.baseURL = '/mock/'
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

interface Result {
  result: number,
  data: object,
  system?: object;
}

// response interceptors handler
axios.interceptors.response.use(
  function (response) {
    const res: Result = response.data
    let data: any

    if (res.result === 0) {
      data = res.data
      data.system = res.system
    }
    return data
  },
  function (error) {
    const data = {
      info: 'axios response error' + error,
      result: -1
    }
    return data
  }
)

export default axios
