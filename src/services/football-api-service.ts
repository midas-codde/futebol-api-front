import axios from 'axios'

const FootballApiService = axios.create({
  baseURL:"https://v3.football.api-sports.io",
  headers: {
    "x-apisports-key": process.env.REACT_APP_API_KEY
  }
})
export default FootballApiService