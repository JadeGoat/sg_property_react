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

const BarChartCompare = ({ labels, values1, values2 }) => {
  const [chartData, setChartData] = useState(null);
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    }
  };

  useEffect(() => {
    setChartData({
        labels,
        datasets: [
        {
            label: 'Values1',
            data: values1,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        },
        {
            label: 'Values2',
            data: values2,
            backgroundColor: 'rgba(235, 54, 54, 1)',
            borderColor: 'rgba(235, 75, 54, 0.96)',
            borderWidth: 1
        }
        ]
    });
  }, [labels, values1, values2]);

  return (
    <div className='barchart'>
      {chartData ? <Bar data={chartData} options={options}/> : <p>Loading chart...</p>}
    </div>
  );
};

export default BarChartCompare;
