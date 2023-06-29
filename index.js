const xValues = ['23%','29%','58%','75%','35%','20%','73%','49%'];
const yValues = [12,14,15,18,17,17,15,14];


const data ={
    labels: xValues,
    datasets: [{
        data: yValues,
        borderColor: 'rgb(66,135, 245)',
        fill: true,
        backgroundColor:'rgb(66,135,245)',
        tension: 0,
        pointRadius: 0
    }]
};

const config ={
    type: 'line',
    data: data,
    options: {
        legend: {display:false},
        scales: {
            xAxes: [
                {
                  gridLines: {
                    display: true, // Hide x-axis grid lines
                  },
                  ticks:{
                    fontSize: 15,
                  },
                },
              ],
              yAxes: [
                {
                  display: true, // Hide y-axis
                  gridLines: {
                    display: false, // Show y-axis grid lines
                  },
                  ticks:{
                    min:10,
                    max:30,
                    display:false
                  }
                },
              ],
        }        
    }
}

const chart = new Chart(
    document.getElementById('myChart'),
    config
);