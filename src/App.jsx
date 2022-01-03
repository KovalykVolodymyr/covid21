import { useEffect, useState } from 'react'
import { Redirect, Link, Route, Switch } from 'react-router-dom'

import { Navbar, Container, Nav } from 'react-bootstrap'
import { getGlobalData, featchDailyData } from 'api/api'
import Home from 'components/Home'

import styles from './App.module.scss'

const App = () => {
  const [global, setGlobal] = useState({})
  const [dailyData, setdailyData] = useState([])
  useEffect(() => {
    ;(async () => {
      const data = await getGlobalData()
      if (data?.status === 200) setGlobal(data?.data)

      const daily = await featchDailyData()
      if (daily.length > 0) setdailyData(daily)
    })()
  }, [])

  return (
    <div className={styles.App}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Covid21</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/resource-demo" className="nav-link">
              Features
            </Link>
            <Link to="/user-action-demo" className="nav-link">
              Pricing
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
        {/* 
        <Route
          exact
          path="/user-action-demo"
          render={() => {
            return <Home title="UserActionDemo" />
          }}
        />

        <Route
          exact
          path="/resource-demo"
          render={() => {
            return <Home title="Resource Collection" />
          }}
        /> */}

        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default App
