import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
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
    },
    syd3ch: {
      type: Number
    },
    amsch: {
      type: Number
    },
    ashch: {
      type: Number
    },
    berch: {
      type: Number
    },
    chich: {
      type: Number
    },
    frach: {
      type: Number
    },
    lonch: {
      type: Number
    },
    hkgch: {
      type: Number
    },
    saoch: {
      type: Number
    }
  },
  data () {
    return {
      datacollection: {
        // Data to be represented on x-axis
        labels: [ 'AMS', 'ASH', 'BER', 'CHI', 'FRA', 'LON', 'HKG', 'SAO', 'SYD' ],
        datasets: [{
          label: 'Devices',
          backgroundColor: '#ff6f77',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: '#249EBF',
          // Data to be represented on y-axis
          data: [this.ams, this.ash, this.ber, this.chi, this.fra, this.lon, this.hkg, this.sao, this.syd3]
        },
        {
          label: 'Chassis',
          backgroundColor: '#88a5f8',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: '#249EBF',
          // Data to be represented on y-axis
          data: [ this.amsch, this.ashch, this.berch, this.chich, this.frach, this.lonch, this.hkgch, this.saoch, this.syd3ch ]
        }
        ]
      },
      // Chart.js options that controls the appearance of the chart
      sour: 2013,
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
          labels: {
            fontColor: 'white'
          },
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
