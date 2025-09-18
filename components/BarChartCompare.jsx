import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import '../css/BarChartCompare.css'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChartCompare = ({ labels, values, bar_titles }) => {

  const [chartData, setChartData] = useState(null);
  const barColorArray = [
    'rgba(54, 162, 235, 0.6)', 
    'rgba(235, 54, 54, 1)',
    'rgba(54, 162, 235, 0.6)', 
    'rgba(235, 54, 54, 1)',
    'rgba(54, 162, 235, 0.6)'
  ]
  const barBorderColorArray = [
    'rgba(54, 162, 235, 1)', 
    'rgba(235, 75, 54, 0.96)',
    'rgba(54, 162, 235, 0.6)', 
    'rgba(235, 54, 54, 1)',
    'rgba(54, 162, 235, 0.6)'
  ]

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
      tooltip: { enabled: true }
    }
  };

  useEffect(() => {
    
    var datasetInfoArray = [];
    for (var index=0; index<values.length; index++)
    {
      const datasetInfo = {
            label: bar_titles[index],
            data: values[index],
            backgroundColor: barColorArray[index],
            borderColor: barBorderColorArray[index],
            borderWidth: 1
      }
      datasetInfoArray.push(datasetInfo);
    }

    setChartData({
        labels,
        datasets: datasetInfoArray
    });
    
  }, [labels, values, bar_titles]);

  return (
    <div className='barchartcompare'>
      {chartData ? <Bar data={chartData} options={options}/> : <p>Loading chart...</p>}
    </div>
  );
};

export default BarChartCompare;
