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
    'rgba(235, 54, 54, 1)'
  ]
  const barBorderColorArray = [
    'rgba(54, 162, 235, 1)', 
    'rgba(235, 75, 54, 0.96)'
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
    setChartData({
        labels,
        datasets: [
        {
            label: bar_titles[0],
            data: values[0],
            backgroundColor: barColorArray[0],
            borderColor: barBorderColorArray[0],
            borderWidth: 1
        },
        {
            label: bar_titles[1],
            data: values[1],
            backgroundColor: barColorArray[1],
            borderColor: barBorderColorArray[1],
            borderWidth: 1
        }]
    });
  }, [labels, values, bar_titles]);

  return (
    <div className='barchartcompare'>
      {chartData ? <Bar data={chartData} options={options}/> : <p>Loading chart...</p>}
    </div>
  );
};

export default BarChartCompare;
