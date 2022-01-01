import axios from 'axios'
import { API_URL, GET_PLACES, GET_BOILERPLATE, PRIVATE_KEY } from './apiConstants'

const getGlobalData1 = async () => {
  try {
    const data = await axios.get(`${API_URL}${GET_PLACES}`, {
      headers: {
        Authorization: `Bearer ${PRIVATE_KEY}`,
        'Content-Type': 'application/json'
      }
    })
    return data
  } catch (error) {
    return false
  }
}

const getGlobalData = async () => {
  try {
    const invocation = new XMLHttpRequest()
    const url = `${API_URL}${GET_PLACES}`
    if (invocation) {
      invocation.open('GET', url, true)
      invocation.withCredentials = true
      invocation.setRequestHeader('Authorization', `Bearer ${PRIVATE_KEY}`)
      // invocation.onreadystatechange = {
      //   Authorization: `Bearer ${PRIVATE_KEY}`,
      //   'Content-Type': 'application/json'
      // }
      invocation.send()
    }

    // const response = await fetch(`${API_URL}${GET_PLACES}`, {
    //   ...GET_BOILERPLATE,
    //   headers: { Authorization: `Bearer ${PRIVATE_KEY}` }
    // })
    // const data = await response.json()

    // return data
  } catch (error) {
    console.log(error)
    return false
  }
}

export { getGlobalData, getGlobalData1 }
