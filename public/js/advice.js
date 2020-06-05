// DataSets
const constDataSets = {
"dps1": [1660, 1770, 1850,1990, 2003],
"dps2": [1760, 1850, 1918, 1965, 2003],
"dps3": [1578, 1600, 1789, 1820, 1950],
"dps4": [1520, 1750, 1967, 2100, 2279],
"dps5": [1650, 1630, 1620, 1640, 1660],
"dps6": [2299, 2310, 2250, 2300, 2307],
"dps7": [2700, 2760, 2720, 2750, 2766],
"dps8": [1950, 1990, 2050, 2120, 2160],
"dps9": [1750, 1670, 1520, 1350, 1498],
"dps10": [1850, 1720, 1620, 1522, 1498],
"dps11": [1000, 1150, 1200, 1270, 1295],
"dps12": [1190, 1290, 1350, 1400, 1596],
"dps13": [998, 1350, 1490, 1550, 1596],
"dps14": [1550, 1790, 1878, 1990, 2060],
"dps15": [1730, 1850, 1880, 1910, 1932],
"dps16": [950, 1200, 1464, 1682, 1821],
"dps17": [790, 810, 860, 910, 936],
"dps18": [1790, 1810, 1850, 1910, 1932],
"dps19": [1750, 1790, 1810, 1850, 1889],
"dps20": [1950, 1760, 1640, 1510, 1402],
"dps21": [1950, 1760, 1640, 1510, 1402],
}

// Config file
var chartConfig = {
  type: 'line',
  data: {
      labels: ['2016','2017','2018','2019','2020'],
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

  chartConfig.data.datasets[0].data = !data ? [1200,1400,1600,1900,2000] : constDataSets[data];
  myChart.update(chartConfig) 

}

loadChart();
