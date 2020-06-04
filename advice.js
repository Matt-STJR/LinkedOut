// DataSets
const constDataSets = {
"dps1": [1908,1958,2003],
"dps2": [1850,1900,2050],
"dps3": [1855,1905,1950],
"dps4": [2184,2234,2279],
"dps5": [1565,1615,1660],
"dps6": [2162,2262,2279],
"dps7": [2621,2262,2307],
"dps8": [2015,2115,2160],
"dps9": [1353,1453,1498],
"dps10": [1353,1453,1498],
"dps11": [1200,1250,1295],
"dps12": [1500,1550,1600],
"dps13": [1500,1550,1600],
"dps14": [1965,2015,2060],
"dps15": [1837,1887,1932],
"dps16": [1726,1776,1821],
"dps17": [816,891,936],
"dps18": [1812,1887,1932],
"dps19": [1769,1884,1889],
"dps20": [1282,1357,1402],
}

// Config file
var chartConfig = {
  type: 'bar',
  data: {
      labels: ['2018','2019','2020'],
      datasets: [{
          label: 'Weekly Pay',
          data: [],
          backgroundColor: 'rgba(0, 0, 0, 0.75)', 
          borderColor: 'rgba(255, 159, 64, 1)',
          borderWidth: 3,
          hoverBackgroundColor:"#000"
      }]
  },
  options: {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  },
  title: {
    display: true,
    text: 'Weekly Pay',
    fontColor: "#333",
    fontSize: 20,
    padding: 20
  },
  legend: {
    display: false,
  }
}
}

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, chartConfig);

$('#job-view').on('submit', (evt) => {
  evt.preventDefault();
  
  const dataValues = $('#job-view select').val();
  
  loadChart(dataValues);  

});

loadChart = (data) => {  

  chartConfig.data.datasets[0].data = !data ? [1600,1900,2000] : constDataSets[data];
  myChart.update(chartConfig) 

}

loadChart();
