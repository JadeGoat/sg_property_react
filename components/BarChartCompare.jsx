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

const BarChartCompare = ({ labels, mean_values, median_values }) => {

  const [chartData, setChartData] = useState(null);
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
      tooltip: { enabled: true }
    }
  };

  useEffect(() => {
    setChartData({
        labels,
        datasets: [
        {
            label: 'mean',
            data: mean_values,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        },
        {
            label: 'median',
            data: median_values,
            backgroundColor: 'rgba(235, 54, 54, 1)',
            borderColor: 'rgba(235, 75, 54, 0.96)',
            borderWidth: 1
        }]
    });
  }, [labels, mean_values, median_values]);

  return (
    <div className='barchart'>
      {chartData ? <Bar data={chartData} options={options}/> : <p>Loading chart...</p>}
    </div>
  );
};

export default BarChartCompare;
