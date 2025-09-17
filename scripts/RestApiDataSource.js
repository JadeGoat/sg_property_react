import axios from 'axios';

export const getAvgDataByYear = async (year, setData) => {
    axios.get(`http://localhost:3001/api/getAvgDataByYear?year=${year}`)
         .then(response => setData(response.data))
         .catch(error => console.error('Error retrieving data:', error))
}

export const getYear = async (setData) => {
    axios.get(`http://localhost:3001/api/getYear`)
         .then(response => {
            const data = response.data;
            setData(data.map(item => item.transact_year));
         })
         .catch(error => console.error('Error retrieving year data:', error))
}

export const getAvgDataByTown = async (town, setData) => {
    axios.get(`http://localhost:3001/api/getAvgDataByTown?town=${town}`)
         .then(response => setData(response.data))
         .catch(error => console.error('Error retrieving data:', error))
}

export const getTown = async (setData) => {
    axios.get(`http://localhost:3001/api/getTown`)
         .then(response => {
            const data = response.data;
            setData(data.map(item => item.town));
         })
         .catch(error => console.error('Error retrieving year data:', error))
}