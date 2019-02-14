/* global localStorage */

import axios from 'axios'

const API_URL = process.env.API_URL || 'http://10.211.34.12:27017/api/v0/devices?name__contains'

export default axios.create({
  baseURL: API_URL
})
