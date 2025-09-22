import MapChildAndElderlyCare from '../components/MapChildAndElderlyCare.jsx';

const PlotChildAndElderlyCareMapByTown = ({ childCareData, elderlyCareData }) => {

    return (
        <div>
            {childCareData && elderlyCareData ?
                <MapChildAndElderlyCare centerCoordinate={[1.3778, 103.8554]} 
                                        zoomValue={11} 
                                        childCareData={childCareData}
                                        elderlyCareData={elderlyCareData} />:
                <p>Loading map with pins...</p>
            }
        </div>
    )
}

export default PlotChildAndElderlyCareMapByTown