import { Line } from 'react-chartjs-2'
import styles from './Chart.module.scss'

const Chart = ({ data }) => {
  return (
    <div className={styles.Container}>
      {data.length > 0 ? (
        <Line
          data={{
            labels: data.map(({ date }) => date),
            datasets: [
              {
                data: data.map(({ confirmed }) => confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true
              },
              {
                data: data.map(({ recovered }) => recovered),
                label: 'Recovered',
                borderColor: 'green',
                fill: true
              },
              {
                data: data.map(({ deaths }) => deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255,0,0,0.5)',
                fill: true
              }
            ]
          }}
        />
      ) : null}
    </div>
  )
}

export default Chart
