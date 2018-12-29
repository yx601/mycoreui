<template>
  <div>
    <h5 class="card-body" style="border-bottom-style:solid;border-color:#5a4980">发展量</h5>
    <b-row>
      <b-col cols="12" sm="12" lg="6">
        <!--<div class="chart-wrapper">-->
          <mdi-chart chartId="chart-bar-01"/>
        <!--</div>-->
      </b-col>
      <b-col sm="12" lg="6" >
        <b-row>
          <b-col>
            <Callout variant="warning">
              <small class="text-muted">发展量总数</small><br>
              <strong class="h4">78,623</strong>
              <div class="chart-wrapper" :style="{ top: '-10px'}">
                <callout-chart-example chartId="callout-chart-03" :data="[]" variant="#f8cb00" width="80" height="30"/>
              </div>
            </Callout>
          </b-col>
        </b-row>
        <hr class="mt-0">
        <ul class="horizontal-bars type-2" style="padding-left: 0px;">
          <div class="progress-group">
            <div class="progress-group-header">
              <i class="icon-user progress-group-icon"></i>
              <span class="title">天翼发展量</span>
              <span class="ml-auto font-weight-bold">43%</span>
            </div>
            <div class="progress-group-bars">
              <b-progress height={} class="progress-xs" :value="43" variant="success"></b-progress>
            </div>
          </div>
          <div class="progress-group">
            <div class="progress-group-header">
              <i class="icon-user-female progress-group-icon"></i>
              <span class="title">宽带发展量</span>
              <span class="ml-auto font-weight-bold">37%</span>
            </div>
            <div class="progress-group-bars">
              <b-progress height={} class="progress-xs" :value="37" variant="success"></b-progress>
            </div>
          </div>
          <div class="progress-group">
            <div class="progress-group-header">
              <i class="icon-user-female progress-group-icon"></i>
              <span class="title">IPTV发展量</span>
              <span class="ml-auto font-weight-bold">88%</span>
            </div>
            <div class="progress-group-bars">
              <b-progress height={} class="progress-xs" :value="88" variant="success"></b-progress>
            </div>
          </div>
        </ul>
      </b-col>
    </b-row>
    <h5 class="card-body" style="border-bottom-style:solid;border-color:#5a4980">积分</h5>
    <b-row>
      <b-col cols="12" sm="12" lg="6">
        <!--<div class="chart-wrapper">-->
          <mdi-chart />
        <!--</div>-->
      </b-col>
      <b-col sm="12" lg="6">
        <b-row>
          <b-col>
            <Callout variant="success">
              <small class="text-muted">积分</small><br>
              <strong class="h4">78,623</strong>
              <div class="chart-wrapper" :style="{ top: '-10px'}">
                <callout-chart-example chartId="callout-chart-03" :data="[]" variant="#f8cb00" width="80" height="30"/>
              </div>
            </Callout>
          </b-col>
        </b-row>
        <hr class="mt-0">
        <ul class="horizontal-bars type-2" style="padding-left:0px">
          <div class="progress-group">
            <div class="progress-group-header">
              <i class="icon-user progress-group-icon"></i>
              <span class="title">天翼积分</span>
              <span class="ml-auto font-weight-bold">43%</span>
            </div>
            <div class="progress-group-bars">
              <b-progress height={} class="progress-xs" :value="43" variant="warning"></b-progress>
            </div>
          </div>
          <div class="progress-group">
            <div class="progress-group-header">
              <i class="icon-user progress-group-icon"></i>
              <span class="title">宽带积分</span>
              <span class="ml-auto font-weight-bold">55%</span>
            </div>
            <div class="progress-group-bars">
              <b-progress height={} class="progress-xs" :value="55" variant="warning"></b-progress>
            </div>
          </div>
        </ul>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import { Callout } from '@coreui/vue'
  import mdiChart from './mycharts/MdiChart1'
  import CalloutChartExample from './mycharts/CalloutChartExample'

    export default {
        name: "MdiGroup",
      components: {
          mdiChart,
        Callout,
        CalloutChartExample
      }
    }
</script>

<style scoped>

</style>
