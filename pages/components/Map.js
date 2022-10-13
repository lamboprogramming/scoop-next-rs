import { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 
'pk.eyJ1IjoibGFtYXIyMzAwMCIsImEiOiJjbDk3azBsd2cwM3RuM3ZudHVpNTBrY3ZqIn0.aMNygpkIU5hAvL6KN9vNMw'



const Map = () => {

    useEffect(() => {
        const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-99.29011, 39.39172],
        zoom: 3,
        });
        });


  return (
    <Wrapper id='map'></Wrapper>
  )
}

export default Map

const Wrapper = tw.div`
flex-1
`