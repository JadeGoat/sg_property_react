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
import '../css/BarChart.css'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChartCompare = ({ labels, values }) => {

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
            label: 'Values',
            data: values,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    });
  }, [labels, values]);

  return (
    <div>
      {chartData ? <Bar data={chartData} options={options}/> : <p>Loading chart...</p>}
    </div>
  );
};

export default BarChartCompare;
