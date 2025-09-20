import axios from 'axios';

export const getRentalDataByYear = async (year, setData) => {
    axios.get(`http://localhost:3001/api/getRentalDataByYear?year=${year}`)
         .then(response => setData(response.data))
         .catch(error => console.error('Error retrieving data:', error))
}

export const getResaleDataByYear = async (year, setData) => {
    axios.get(`http://localhost:3001/api/getResaleDataByYear?year=${year}`)
         .then(response => setData(response.data))
         .catch(error => console.error('Error retrieving data:', error))
}

export const getYearInRental = async (setData) => {
    axios.get(`http://localhost:3001/api/getYearInRental`)
         .then(response => {
            const data = response.data;
            setData(data.map(item => item.approval_year));
         })
         .catch(error => console.error('Error retrieving year data:', error))
}

export const getYearInResale = async (setData) => {
    axios.get(`http://localhost:3001/api/getYearInResale`)
         .then(response => {
            const data = response.data;
            setData(data.map(item => item.transact_year));
         })
         .catch(error => console.error('Error retrieving year data:', error))
}

export const getRentalDataByTown = async (town, setData) => {
    axios.get(`http://localhost:3001/api/getRentalDataByTown?town=${town}`)
         .then(response => setData(response.data))
         .catch(error => console.error('Error retrieving data:', error))
}

export const getResaleDataByTown = async (town, setData) => {
    axios.get(`http://localhost:3001/api/getResaleDataByTown?town=${town}`)
         .then(response => setData(response.data))
         .catch(error => console.error('Error retrieving data:', error))
}

export const getCarparkDataByTown = async (town, setData) => {
    axios.get(`http://localhost:3001/api/getCarparkDataByTown?town=${town}`)
         .then(response => setData(response.data))
         .catch(error => console.error('Error retrieving data:', error))
}

export const getTownInRental = async (setData) => {
    axios.get(`http://localhost:3001/api/getTownInRental`)
         .then(response => {
            const data = response.data;
            setData(data.map(item => item.town));
         })
         .catch(error => console.error('Error retrieving year data:', error))
}

export const getTownInResale = async (setData) => {
    axios.get(`http://localhost:3001/api/getTownInResale`)
         .then(response => {
            const data = response.data;
            setData(data.map(item => item.town));
         })
         .catch(error => console.error('Error retrieving year data:', error))
}

export const getTownInCarpark = async (setData) => {
    axios.get(`http://localhost:3001/api/getTownInCarpark`)
         .then(response => {
            const data = response.data;
            setData(data.map(item => item.town));
         })
         .catch(error => console.error('Error retrieving year data:', error))
}