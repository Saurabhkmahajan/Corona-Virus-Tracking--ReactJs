import React  from "react";
import { Line } from "react-chartjs-2";
import { Chart as Chartjs, Legend, LineElement, Title, Tooltip, CategoryScale, LinearScale, PointElement } from 'chart.js';
Chartjs.register(
    Legend, LineElement, Title, Tooltip, CategoryScale, LinearScale, PointElement
)


const LineGraph = (props) => {
    return(
        <div style={{
             height: '600px',
             width: '600px',
             margin: '50px auto',
             
        }}>

    
      <Line  data={{
          labels: props.label.map(l => l.substr(0, 10)),
          datasets: [
              {
                  label: 'My First dataset',
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: 'rgba(75,192,192,0.4)',
                  borderColor: 'rgba(75,192,192,1)',
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: 'rgba(75,192,192,1)',
                  pointBackgroundColor: '#fff',
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                  pointHoverBorderColor: 'rgba(220,220,220,1)',
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: props.yAxis
                  
              }
          ]
      }}/>

        </div>

    );
}
 export default LineGraph;