import { MapContainer, TileLayer } from 'react-leaflet';
import '../css/MapWeather.css'
const token = import.meta.env.VITE_OPEN_WEATHER_API;

const MapWeather = ({ centerCoordinate, zoomValue, layer, opacity }) => {

  return (
    <MapContainer className='mapWeatherContainer' center={centerCoordinate} zoom={zoomValue}>
        <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            opacity={opacity}
        />
        
        <TileLayer
            url={`https://tile.openweathermap.org/map/${layer}/{z}/{x}/{y}.png?appid=${token}`}
            attribution="&copy; OpenWeatherMap"
        />
    </MapContainer>
  )
}

export default MapWeather

