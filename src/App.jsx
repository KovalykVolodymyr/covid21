import { useEffect, useState } from 'react'
import { Redirect, Link, Route, Switch } from 'react-router-dom'

import { Navbar, Container, Nav } from 'react-bootstrap'
import { getGlobalData, featchDailyData, getAllCountries } from 'api/api'
import Home from 'components/Home'
import MapChart from 'components/MapChart'
import MapChartVac from 'components/MapChartVac'

import styles from './App.module.scss'

const App = () => {
  const [global, setGlobal] = useState({})
  const [dailyData, setdailyData] = useState([])
  const [countryData, setcCountryData] = useState([])

  useEffect(() => {
    ;(async () => {
      const data = await getGlobalData()
      if (data?.status === 200) setGlobal(data?.data)

      const daily = await featchDailyData()
      if (daily.length > 0) setdailyData(daily)

      const country = await getAllCountries()

      if (country?.status === 200) setcCountryData(country?.data)
    })()
  }, [])

  return (
    <div className={styles.App}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Covid19</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/map" className="nav-link">
              Map
            </Link>
            <Link to="/vaccinated" className="nav-link">
              Vaccinated
            </Link>
          </Nav>
        </Container>
      </Navbar>

      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Home global={global} chart={dailyData} />
          }}
        />

        <Route
          exact
          path="/map"
          render={() => {
            return <MapChart contry={countryData} />
          }}
        />

        <Route
          exact
          path="/vaccinated"
          render={() => {
            return <MapChartVac contry={countryData} />
          }}
        />

        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default App
