import React from 'react'
import axios from 'axios';

export const getAvgDataByYear = async (year, setData) => {
    axios.get(`http://localhost:3001/api/data?year=${year}`)
         .then(response => setData(response.data))
         .catch(error => console.error('Error loading chart data:', error))
}