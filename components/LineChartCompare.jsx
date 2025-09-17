import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import '../css/LineChartCompare.css'

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const LineChartCompare = ({ labels, values, title }) => {

    const [chartData, setChartData] = useState(null);

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'top' },
        tooltip: { enabled: true }
      },
    };

    useEffect(() => {
        setChartData({
            labels,
            datasets: [
            {
                label: title[0],
                data: values[0],
                fill: false,
                borderColor: 'rgba(79, 192, 75, 1)',
                tension: 0.4,
            },
            {
                label: title[1],
                data: values[1],
                fill: false,
                borderColor: 'rgba(75, 192, 151, 1)',
                tension: 0.4,
            },
            {
                label: title[2],
                data: values[2],
                fill: false,
                borderColor: 'rgba(75, 186, 192, 1)',
                tension: 0.4,
            },
            {
                label: title[3],
                data: values[3],
                fill: false,
                borderColor: 'rgba(75, 128, 192, 1)',
                tension: 0.4,
            },
            {
                label: title[4],
                data: values[4],
                fill: false,
                borderColor: 'rgba(91, 75, 192, 1)',
                tension: 0.4,
            }]
        });
    }, [labels, values, title]);

  return ( 
    <div className='linechartcompare'>
        {chartData ? <Line data={chartData} options={options}/> : <p>Loading chart...</p>}
    </div>
  );
};

export default LineChartCompare;
