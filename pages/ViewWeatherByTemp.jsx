import MapWeather from '../components/MapWeather'

const ViewWeatherByTemp = () => {
    return (
        <div>
            <MapWeather centerCoordinate={[1.3558, 103.8254]} 
                        zoomValue={5}
                        layer="temp_new"
                        opacity={0.3} />
        </div>
    )
}

export default ViewWeatherByTemp