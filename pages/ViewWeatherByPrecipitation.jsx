import MapWeather from '../components/MapWeather'

const ViewWeatherByPrecipitation = () => {
    return (
        <div>
            <MapWeather centerCoordinate={[1.3558, 103.8254]} 
                        zoomValue={5}
                        layer="precipitation_new"
                        opacity={0.5} />
        </div>
    )
}

export default ViewWeatherByPrecipitation