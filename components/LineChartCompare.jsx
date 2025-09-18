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
      'rgba(91, 75, 192, 1)',
      'rgba(192, 75, 75, 1)'
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

      var datasetInfoArray = [];
      for (var index=0; index<values.length; index++)
      {
        const datasetInfo = {
          label: line_titles[index],
          data: values[index],
          fill: false,
          borderColor: colorArray[index],
          tension: 0.4,
        }
        datasetInfoArray.push(datasetInfo);
      }
        setChartData({
            labels,
            datasets: datasetInfoArray
        });
    }, [labels, values, line_titles]);

  return ( 
    <div className='linechartcompare'>
        {chartData ? <Line data={chartData} options={options}/> : <p>Loading chart...</p>}
    </div>
  );
};

export default LineChartCompare;
