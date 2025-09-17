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

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const LineChart = ({ labels, values, title }) => {

    const [chartData, setChartData] = useState(null);

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'top' },
        title: {
          display: !!title,
          text: title,
        },
      },
    };

    useEffect(() => {
        setChartData({
            labels,
            datasets: [
            {
                label: title || 'My Line Chart',
                data: values,
                fill: false,
                borderColor: 'rgba(75,192,192,1)',
                tension: 0.4,
            }]
        });
    }, [labels, values, title]);

  return ( 
    <div>
        {chartData ? <Line data={chartData} options={options}/> : <p>Loading chart...</p>}
    </div>
  );
};

export default LineChart;
