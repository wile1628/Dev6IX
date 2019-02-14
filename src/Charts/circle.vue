<template>
  <svg viewBox="0 0 86 86" class="circular-chart">
    <path class="circle"
          stroke-dasharray="80, 100"
          d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"></path>
    <text x="10.5" y="21.5" class="percentage" style="font-size: 10px">80%</text>
  </svg>
</template>

<script>
export default {
  name: 'circle'
}
</script>

<style scoped>
  .circular-chart {
    display: block;
    margin: 10px auto;
    max-width: 80%;
    max-height: 250px;
  }

  .circle {
    stroke: #4CC790;
    fill: none;
    stroke-linecap: round;
    animation: progress 1s ease-out forwards;
  }

  @keyframes progress {
    0% {
      stroke-dasharray: 0;
    }
  }
</style>
