import MapWeather from '../components/MapWeather'

const ViewWeatherByCloud = () => {
    return (
        <div>
            <MapWeather centerCoordinate={[1.3558, 103.8254]} 
                        zoomValue={5}
                        layer="clouds_new"
                        opacity={0.4} />
        </div>
    )
}

export default ViewWeatherByCloud