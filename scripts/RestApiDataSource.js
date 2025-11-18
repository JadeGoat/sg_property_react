import axios from 'axios';
import { constructGeoJsonFromData } from './GeoJsonHelper.js'

const db_host = import.meta.env.VITE_DB_HOST;
const db_port = import.meta.env.VITE_DB_PORT;
const baseUrl = `http://${db_host}:${db_port}/api`;

export const getRentalDataByYear = async (year, setData) => {
    axios.get(`${baseUrl}/getRentalDataByYear?year=${year}`)
         .then(response => setData(response.data))
         .catch(error => console.error('Error retrieving data:', error))
}

export const getResaleDataByYear = async (year, setData) => {
    axios.get(`${baseUrl}/getResaleDataByYear?year=${year}`)
         .then(response => setData(response.data))
         .catch(error => console.error('Error retrieving data:', error))
}

export const getYearInRental = async (setData) => {
    axios.get(`${baseUrl}/getYearInRental`)
         .then(response => {
            const data = response.data;
            setData(data.map(item => item.approval_year));
         })
         .catch(error => console.error('Error retrieving year data:', error))
}

export const getYearInResale = async (setData) => {
    axios.get(`${baseUrl}/getYearInResale`)
         .then(response => {
            const data = response.data;
            setData(data.map(item => item.transact_year));
         })
         .catch(error => console.error('Error retrieving year data:', error))
}

export const getRentalDataByTown = async (town, setData) => {
    axios.get(`${baseUrl}/getRentalDataByTown?town=${town}`)
         .then(response => setData(response.data))
         .catch(error => console.error('Error retrieving data:', error))
}

export const getResaleDataByTown = async (town, setData) => {
    axios.get(`${baseUrl}/getResaleDataByTown?town=${town}`)
         .then(response => setData(response.data))
         .catch(error => console.error('Error retrieving data:', error))
}

export const getCarparkData = async (setData) => {
    axios.get(`${baseUrl}/getCarparkData`)
         .then(response => setData(response.data))
         .catch(error => console.error('Error retrieving data:', error))
}

export const getCarparkDataByTown = async (town, setData) => {
    axios.get(`${baseUrl}/getCarparkDataByTown?town=${town}`)
         .then(response => setData(response.data))
         .catch(error => console.error('Error retrieving data:', error))
}

export const getBusStopData = async (setData) => {
    axios.get(`${baseUrl}/getBusStopData`)
         .then(response => setData(response.data))
         .catch(error => console.error('Error retrieving data:', error))
}

export const getBusStopDataByTown = async (town, setData) => {
    axios.get(`${baseUrl}/getBusStopDataByTown?town=${town}`)
         .then(response => setData(response.data))
         .catch(error => console.error('Error retrieving data:', error))
}

export const getMrtStationData = async (setData) => {
    axios.get(`${baseUrl}/getMrtStationData`)
         .then(response => setData(response.data))
         .catch(error => console.error('Error retrieving data:', error))
}

export const getTownInRental = async (setData) => {
    axios.get(`${baseUrl}/getTownInRental`)
         .then(response => {
            const data = response.data;
            setData(data.map(item => item.town));
         })
         .catch(error => console.error('Error retrieving year data:', error))
}

export const getTownInResale = async (setData) => {
    axios.get(`${baseUrl}/getTownInResale`)
         .then(response => {
            const data = response.data;
            setData(data.map(item => item.town));
         })
         .catch(error => console.error('Error retrieving year data:', error))
}

export const getTownInCarpark = async (setData) => {
    axios.get(`${baseUrl}/getTownInCarpark`)
         .then(response => {
            const data = response.data;
            setData(data.map(item => item.town));
         })
         .catch(error => console.error('Error retrieving year data:', error))
}

export const getChildCareData = async (setData) => {
    axios.get(`${baseUrl}/getChildCareData`)
         .then(response => {
            const data = response.data;
            setData(constructGeoJsonFromData(data));
         })
         .catch(error => console.error('Error retrieving year data:', error))
}

export const getElderlyCareData = async (setData) => {
    axios.get(`${baseUrl}/getElderlyCareData`)
         .then(response => {
            const data = response.data;
             setData(constructGeoJsonFromData(data));
         })
         .catch(error => console.error('Error retrieving year data:', error))
}

export const getDisabilityServicesData = async (setData) => {
    axios.get(`${baseUrl}/getDisabilityServicesData`)
         .then(response => {
            const data = response.data;
             setData(constructGeoJsonFromData(data));
         })
         .catch(error => console.error('Error retrieving year data:', error))
}

export const getChasClinicData = async (setData) => {
    axios.get(`${baseUrl}/getChasClinicData`)
         .then(response => setData(response.data))
         .catch(error => console.error('Error retrieving data:', error))
}

export const getHawkerCentreData = async (setData) => {
    axios.get(`${baseUrl}/getHawkerCentreData`)
         .then(response => {
            const data = response.data;
             setData(constructGeoJsonFromData(data));
         })
         .catch(error => console.error('Error retrieving year data:', error))
}

export const getHealthierEateriesData = async (setData) => {
    axios.get(`${baseUrl}/getHealthierEateriesData`)
         .then(response => {
            const data = response.data;
            setData(constructGeoJsonFromData(data));
         })
         .catch(error => console.error('Error retrieving year data:', error))
}

export const getSupermarketsData = async (setData) => {
    axios.get(`${baseUrl}/getSupermarketsData`)
         .then(response => setData(response.data))
         .catch(error => console.error('Error retrieving data:', error))
}

export const getTownPlanningArea = async (town, setData) => {
    axios.get(`${baseUrl}/getTownPlanningArea?town=${town}`)
         .then(response => setData(response.data))
         .catch(error => console.error('Error retrieving data:', error))
}