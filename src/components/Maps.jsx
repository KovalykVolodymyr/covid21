import React from 'react'
import { ZoomableGroup, ComposableMap, Geographies, Geography } from 'react-simple-maps'

const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json'

const Maps = ({ setTooltipContent, contry }) => {
  return (
    <>
      <ComposableMap
        data-tip=""
        projectionConfig={{
          scale: 180,
          rotation: [-11, 0, 0]
        }}
        width={700}
        height={500}
      >
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      const { ISO_A2 } = geo.properties
                      const result = contry.filter(({ countryInfo }) => countryInfo?.iso2 === ISO_A2)

                      setTooltipContent(result)
                    }}
                    onMouseLeave={() => {
                      setTooltipContent([])
                    }}
                    style={{
                      default: {
                        fill: '#D6D6DA',
                        outline: 'none'
                      },
                      hover: {
                        fill: '#F53',
                        outline: 'none'
                      },
                      pressed: {
                        fill: '#E42',
                        outline: 'none'
                      }
                    }}
                  />
                )
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  )
}

export default Maps
