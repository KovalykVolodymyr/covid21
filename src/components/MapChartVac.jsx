import { useState } from 'react'
import ReactTooltip from 'react-tooltip'
import MapsVac from './MapsVac'
import { vaccinated } from 'api/static'

const MapChartVac = ({ contry }) => {
  const [content, setContent] = useState([])

  return (
    <div>
      <MapsVac contry={contry} setTooltipContent={setContent} />
      <ReactTooltip>
        {content.length > 0
          ? content.map(({ tests, country, countryInfo: { flag, iso2 } }) => {
              const result = vaccinated.filter(({ country }) => iso2 === country)
              return (
                <>
                  <img src={flag} alt={country} style={{ width: '100%', height: '100px' }} />
                  <h4 style={{ paddingTop: '10px', textAlign: 'center' }}>{country}</h4>
                  <p>Vaccinated: {result[0].vaccinated}</p>
                  <p>Positive Tests: {tests}</p>
                </>
              )
            })
          : null}
      </ReactTooltip>
    </div>
  )
}

export default MapChartVac
