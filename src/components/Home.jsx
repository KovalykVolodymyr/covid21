import { Card, Container, Row, Col } from 'react-bootstrap'
import CountUp from 'react-countup'
import Chart from './Chart'

const Home = ({ global, chart }) => {
  return (
    <div>
      <Container style={{ paddingTop: '20px' }}>
        <Row>
          <Col md={4} xs={12}>
            <Card bg="primary" text={'primary' === 'light' ? 'dark' : 'white'} className="mb-2">
              <Card.Body>
                <Card.Title> Infected </Card.Title>
                <Card.Text>
                  <CountUp start={0} end={global?.cases} duration={2.5} separator="," />{' '}
                </Card.Text>
                <Card.Text>{new Date(global?.updated).toDateString()}</Card.Text>
                <Card.Text>Number of active cases of COVID-19</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} xs={12}>
            <Card bg="success" text={'success' === 'light' ? 'dark' : 'white'} className="mb-2">
              <Card.Body>
                <Card.Title> Recovered</Card.Title>
                <Card.Text>
                  <CountUp start={0} end={global?.recovered} duration={2.5} separator="," />
                </Card.Text>
                <Card.Text>{new Date(global?.updated).toDateString()}</Card.Text>
                <Card.Text>Number of recovereis from COVID-19</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} xs={12}>
            <Card bg="danger" text={'danger' === 'light' ? 'dark' : 'white'} className="mb-2">
              <Card.Body>
                <Card.Title> Deaths </Card.Title>
                <Card.Text>
                  <CountUp start={0} end={global?.deaths} duration={2.5} separator="," />
                </Card.Text>
                <Card.Text>{new Date(global?.updated).toDateString()}</Card.Text>
                <Card.Text>Number of deaths caused by COVID-19</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Col>
          <Chart data={chart} />
        </Col>
      </Container>
    </div>
  )
}

export default Home
