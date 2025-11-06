import MapWeather from '../components/MapWeather'

const ViewWeatherByPressure = () => {
    return (
        <div>
            <MapWeather centerCoordinate={[1.3558, 103.8254]} 
                        zoomValue={5}
                        layer="pressure_new"
                        opacity={0.3} />
        </div>
    )
}

export default ViewWeatherByPressure