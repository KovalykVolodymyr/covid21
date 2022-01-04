import { useState } from 'react'
import ReactTooltip from 'react-tooltip'
import Maps from './Maps'

const MapChart = ({ contry }) => {
  const [content, setContent] = useState([])

  return (
    <div>
      <Maps contry={contry} setTooltipContent={setContent} />
      <ReactTooltip>
        {content.length > 0
          ? content.map(({ cases, deaths, country, recovered, countryInfo: { flag } }) => (
              <>
                <img src={flag} alt={country} style={{ width: '100%', height: '100px' }} />
                <h4 style={{ paddingTop: '10px', textAlign: 'center' }}>{country}</h4>
                <p>Infected: {cases}</p>
                <p>Recovered: {recovered}</p>
                <p>Deaths: {deaths}</p>
              </>
            ))
          : null}
      </ReactTooltip>
    </div>
  )
}
// content.map(({ cases, deaths, country, recovered, countryInfo: { flag } }) => <p>{cases}</p>)
export default MapChart
