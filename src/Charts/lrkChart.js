import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  data () {
    return {
      datacollection: {
        // Data to be represented on x-axis
        labels: ['', '', ''],
        datasets: [{
          label: 'ESXi',
          backgroundColor: '#f87979',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: '#249EBF',
          // Data to be represented on y-axis
          data: [159, 5, 1]
        },
        {
          label: 'CPU',
          backgroundColor: '#59f83d',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: '#249EBF',
          // Data to be represented on y-axis
          data: [0, 0, 165]
        },
        {
          label: 'Model',
          backgroundColor: '#4b7ef8',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: '#249EBF',
          // Data to be represented on y-axis
          data: [164, 0, 1]
        }
        ]
      },
      // Chart.js options that controls the appearance of the chart
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted () {
    // renderChart function renders the chart with the datacollection and options object.
    this.renderChart(this.datacollection, this.options)
  }
}
