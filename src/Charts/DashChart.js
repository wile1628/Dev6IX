import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  props: {
    syd3: {
      type: Number
    },
    ams: {
      type: Number
    },
    ash: {
      type: Number
    },
    ber: {
      type: Number
    },
    chi: {
      type: Number
    },
    fra: {
      type: Number
    },
    lon: {
      type: Number
    },
    hkg: {
      type: Number
    },
    sao: {
      type: Number
    }
  },
  data () {
    return {
      datacollection: {
        // Data to be represented on x-axis
        labels: [ 'AMS', 'ASH', 'BER', 'CHI', 'FRA', 'LON', 'HKG', 'SAO', 'SYD' ],
        datasets: [{
          backgroundColor: ['#d38df8', '#81f882', '#88a5f8', 'red', 'yellow', 'grey', 'orange', 'blue', 'brown'],
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: '#249EBF',
          // Data to be represented on y-axis
          data: [this.ams, this.ash, this.ber, this.chi, this.fra, this.lon, this.hkg, this.sao, this.syd3]
        }
        ]},
      dcam: [1690, 287, 23],
      options: {
        legend: {
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  // Chart.js options that controls the appearance of the chart
  mounted () {
    // renderChart function renders the chart with the datacollection and options object.
    this.renderChart(this.datacollection, this.options)
  }
}
