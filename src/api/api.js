import axios from 'axios'
const __URL = 'https://covid19.mathdro.id/api'

const getGlobalData = async () => {
  try {
    const data = await axios.get(`https://corona.lmao.ninja/v2/all?yesterday`, {})
    return data
  } catch (error) {
    return false
  }
}

const featchDailyData = async () => {
  try {
    const { data } = await axios.get(`${__URL}/daily`)

    const modifiedData = data.map(dailyData => ({
      recovered: dailyData.confirmed.total - dailyData.deaths.total,
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate
    }))

    return modifiedData
  } catch (error) {
    console.log(error)
  }
}

const getAllCountries = async () => {
  try {
    const data = await axios.get(`https://corona.lmao.ninja/v2/countries?yesterday&sort`, {})
    return data
  } catch (error) {
    return false
  }
}

export { getGlobalData, featchDailyData, getAllCountries }
