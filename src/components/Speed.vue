<template>
  <div>
    <apexcharts type="radialBar" :options="chartOptions" :series="series"></apexcharts>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  components: {
    apexcharts: VueApexCharts
  },
  props: {
    series: {
      type: Array
    }
  },
  data: function () {
    return {
      chartOptions: {
        chart: {
          height: 140,
          width: 140,
          type: 'radialBar'
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: '#e7e7e7',
              strokeWidth: '97%',
              margin: 5, // margin is in pixels
              shadow: {
                enabled: true,
                top: 2,
                left: 0,
                color: '#999',
                opacity: 1,
                blur: 2
              }
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                offsetY: -3,
                fontSize: '22px'
              }
            }
          }
        },
        fill: {
          colors: ['#f4c756'],
          gradient: {
            enabled: true,
            shade: 'light',
            shadeIntensity: 0.4,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91]
          }
        }
      },
      // colors: ['#1ab7aa', '#0084ff', '#39539E', '#0077B5'],
      // series: [76],
      labels: ['Average Results']

    }
  }
}
</script>

<style scoped>

</style>
