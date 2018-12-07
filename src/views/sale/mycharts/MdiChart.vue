<script>
  import { Bar } from 'vue-chartjs'
  import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips'

  export default {
    extends: Bar,
    mounted () {
      // Overwriting base render method with actual data.
      this.renderChart(
        {
          labels: ['9-21', '9-22', '9-23', '9-24', '9-25', '9-26', '9-27'],
          datasets: [
            {
              label: '厅店1',
              backgroundColor: '#f87979',
              data: [40, 20, 12, 39, 10, 40, 391]
            },
            {
              label: '厅店2',
              backgroundColor: '#f87900',
              data: [30, 40, 52, 19, 20, 20, 441]
            }
          ]
        },
        {
          responsive: true,
          maintainAspectRatio: true,
          tooltips: {
            enabled: false,
            custom: CustomTooltips,
            intersect: true,
            mode: 'index',
            position: 'nearest',
            callbacks: {
              labelColor: function (tooltipItem, chart) {
                return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].backgroundColor }
              }
            }
          }
        }
      )
    }
  }
</script>
