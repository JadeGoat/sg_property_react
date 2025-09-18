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

const LineChartCompare = ({ labels, values, line_titles }) => {

    const [chartData, setChartData] = useState(null);
    const colorArray = [
      'rgba(79, 192, 75, 1)', 
      'rgba(75, 192, 151, 1)',
      'rgba(75, 186, 192, 1)',
      'rgba(75, 128, 192, 1)',
      'rgba(91, 75, 192, 1)'
    ]

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
                label: line_titles[0],
                data: values[0],
                fill: false,
                borderColor: colorArray[0],
                tension: 0.4,
            },
            {
                label: line_titles[1],
                data: values[1],
                fill: false,
                borderColor: colorArray[1],
                tension: 0.4,
            },
            {
                label: line_titles[2],
                data: values[2],
                fill: false,
                borderColor: colorArray[2],
                tension: 0.4,
            },
            {
                label: line_titles[3],
                data: values[3],
                fill: false,
                borderColor: colorArray[3],
                tension: 0.4,
            },
            {
                label: line_titles[4],
                data: values[4],
                fill: false,
                borderColor: colorArray[4],
                tension: 0.4,
            }]
        });
    }, [labels, values, line_titles]);

  return ( 
    <div className='linechartcompare'>
        {chartData ? <Line data={chartData} options={options}/> : <p>Loading chart...</p>}
    </div>
  );
};

export default LineChartCompare;
