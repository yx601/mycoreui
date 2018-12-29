<template>
  <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        showLine: ['积分'],
        axisSite: { right: ['积分'] },
        // yAxisType: ['KMB', 'percent'],
        // yAxisName: ['数值', '比率']
      }
      return {
        chartData: {
          columns: ['时间', '发展量', '积分'],
          rows: [
            { '时间': '8:00', '发展量': 1393, '积分': 103},
            { '时间': '9:00', '发展量': 3530, '积分': 323},
            { '时间': '10:00', '发展量': 2923, '积分': 262 },
            { '时间': '11:00', '发展量': 1723, '积分': 142 },
            { '时间': '12:00', '发展量': 3792, '积分': 349 },
            { '时间': '13:00', '发展量': 4593, '积分': 429 }
          ]
        }
      }
    }
  }
</script>
