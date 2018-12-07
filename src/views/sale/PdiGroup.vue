<template>
    <div>
      <b-row>
        <b-col cols="12" sm="12" md="8" lg="6">
          <div class="chart-wrapper">
            <pdi-chart chartId="chart-line-01"/>
          </div>
        </b-col>
        <b-col cols="12" sm="12" md="4" offset="2" lg="4">
          <h5>人流量分析</h5>
          <div class="chart-wrapper">
            <pdi-pie-chart chartId="chart-pie-01"/>
          </div>
        </b-col>
      </b-row>
    </div>
</template>

<script>
  import pdiChart from './mycharts/PdiLineChart'
  import pdiPieChart from './mycharts/PdiPieChart'
    export default {
        name: "PdiGroup",
      components: {
          pdiChart,
        pdiPieChart
      }
    }
</script>

<style scoped>

</style>
