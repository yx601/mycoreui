<template>
  <div>
    <b-card class="card-accent-info" header="发展量">
      <b-row>
        <b-col cols="12" sm="12" lg="5">
          <!--<div class="chart-wrapper">-->
            <mdi-chart chartId="chart-bar-01"/>
          <!--</div>-->
        </b-col>
        <b-col sm="12" lg="5" offset="2">
          <b-row>
            <b-col sm="6">
              <Callout variant="warning">
                <small class="text-muted">Pageviews</small><br>
                <strong class="h4">78,623</strong>
                <div class="chart-wrapper" :style="{ top: '-10px'}">
                  <callout-chart-example chartId="callout-chart-03" :data="[35, 23, 56, 22, 97, 23, 64]" variant="#f8cb00" width="80" height="30"/>
                </div>
              </Callout>
            </b-col>
            <b-col sm="6">
              <Callout variant="success">
                <small class="text-muted">Organic</small><br>
                <strong class="h4">49,123</strong>
                <div class="chart-wrapper" :style="{ top: '-10px'}">
                  <callout-chart-example chartId="callout-chart-04" :data="[65, 59, 84, 84, 51, 55, 40]" variant="#4dbd74" width="80" height="30" />
                </div>
              </Callout>
            </b-col>
          </b-row>
          <hr class="mt-0">
          <ul class="horizontal-bars type-2">
            <div class="progress-group">
              <div class="progress-group-header">
                <i class="icon-user progress-group-icon"></i>
                <span class="title">Male</span>
                <span class="ml-auto font-weight-bold">43%</span>
              </div>
              <div class="progress-group-bars">
                <b-progress height={} class="progress-xs" :value="43" variant="warning"></b-progress>
              </div>
            </div>
            <div class="progress-group mb-5">
              <div class="progress-group-header">
                <i class="icon-user-female progress-group-icon"></i>
                <span class="title">Female</span>
                <span class="ml-auto font-weight-bold">37%</span>
              </div>
              <div class="progress-group-bars">
                <b-progress height={} class="progress-xs" :value="37" variant="warning"></b-progress>
              </div>
            </div>
            <div class="progress-group">
              <div class="progress-group-header">
                <i class="icon-globe progress-group-icon"></i>
                <span class="title">Organic Search</span>
                <span class="ml-auto font-weight-bold">191,235 <span class="text-muted small">(56%)</span></span>
              </div>
              <div class="progress-group-bars">
                <b-progress height={} class="progress-xs" :value="56" variant="success"></b-progress>
              </div>
            </div>
            <div class="progress-group">
              <div class="progress-group-header">
                <i class="icon-social-facebook progress-group-icon"></i>
                <span class="title">Facebook</span>
                <span class="ml-auto font-weight-bold">51,223 <span class="text-muted small">(15%)</span></span>
              </div>
              <div class="progress-group-bars">
                <b-progress height={} class="progress-xs" :value="15" variant="success"></b-progress>
              </div>
            </div>
            <div class="progress-group">
              <div class="progress-group-header">
                <i class="icon-social-twitter progress-group-icon"></i>
                <span class="title">Twitter</span>
                <span class="ml-auto font-weight-bold">37,564 <span class="text-muted small">(11%)</span></span>
              </div>
              <div class="progress-group-bars">
                <b-progress height={} class="progress-xs" :value="11" variant="success"></b-progress>
              </div>
            </div>
            <div class="progress-group">
              <div class="progress-group-header">
                <i class="icon-social-linkedin progress-group-icon"></i>
                <span class="title">LinkedIn</span>
                <span class="ml-auto font-weight-bold">27,319 <span class="text-muted small">&nbsp;(8%)</span></span>
              </div>
              <div class="progress-group-bars">
                <b-progress height={} class="progress-xs" :value="8" variant="success"></b-progress>
              </div>
            </div>
            <div class="divider text-center">
              <b-button variant="link" size="sm" class="text-muted"><i class="icon-options"></i></b-button>
            </div>
          </ul>
        </b-col>
      </b-row>
    </b-card>
    <b-card class="card-accent-info" header="积分">
      <b-row>
        <b-col cols="12" sm="12" lg="5">
          <!--<div class="chart-wrapper">-->
            <mdi-chart />
          <!--</div>-->
        </b-col>
        <b-col sm="12" lg="5" offset="2">
          <b-row>
            <b-col sm="6">
              <Callout variant="warning">
                <small class="text-muted">Pageviews</small><br>
                <strong class="h4">78,623</strong>
                <div class="chart-wrapper" :style="{ top: '-10px'}">
                  <callout-chart-example chartId="callout-chart-03" :data="[35, 23, 56, 22, 97, 23, 64]" variant="#f8cb00" width="80" height="30"/>
                </div>
              </Callout>
            </b-col>
            <b-col sm="6">
              <Callout variant="success">
                <small class="text-muted">Organic</small><br>
                <strong class="h4">49,123</strong>
                <div class="chart-wrapper" :style="{ top: '-10px'}">
                  <callout-chart-example chartId="callout-chart-04" :data="[65, 59, 84, 84, 51, 55, 40]" variant="#4dbd74" width="80" height="30" />
                </div>
              </Callout>
            </b-col>
          </b-row>
          <hr class="mt-0">
          <ul class="horizontal-bars type-2">
            <div class="progress-group">
              <div class="progress-group-header">
                <i class="icon-user progress-group-icon"></i>
                <span class="title">Male</span>
                <span class="ml-auto font-weight-bold">43%</span>
              </div>
              <div class="progress-group-bars">
                <b-progress height={} class="progress-xs" :value="43" variant="warning"></b-progress>
              </div>
            </div>
            <div class="progress-group mb-5">
              <div class="progress-group-header">
                <i class="icon-user-female progress-group-icon"></i>
                <span class="title">Female</span>
                <span class="ml-auto font-weight-bold">37%</span>
              </div>
              <div class="progress-group-bars">
                <b-progress height={} class="progress-xs" :value="37" variant="warning"></b-progress>
              </div>
            </div>
            <div class="progress-group">
              <div class="progress-group-header">
                <i class="icon-globe progress-group-icon"></i>
                <span class="title">Organic Search</span>
                <span class="ml-auto font-weight-bold">191,235 <span class="text-muted small">(56%)</span></span>
              </div>
              <div class="progress-group-bars">
                <b-progress height={} class="progress-xs" :value="56" variant="success"></b-progress>
              </div>
            </div>
            <div class="progress-group">
              <div class="progress-group-header">
                <i class="icon-social-facebook progress-group-icon"></i>
                <span class="title">Facebook</span>
                <span class="ml-auto font-weight-bold">51,223 <span class="text-muted small">(15%)</span></span>
              </div>
              <div class="progress-group-bars">
                <b-progress height={} class="progress-xs" :value="15" variant="success"></b-progress>
              </div>
            </div>
            <div class="progress-group">
              <div class="progress-group-header">
                <i class="icon-social-twitter progress-group-icon"></i>
                <span class="title">Twitter</span>
                <span class="ml-auto font-weight-bold">37,564 <span class="text-muted small">(11%)</span></span>
              </div>
              <div class="progress-group-bars">
                <b-progress height={} class="progress-xs" :value="11" variant="success"></b-progress>
              </div>
            </div>
            <div class="progress-group">
              <div class="progress-group-header">
                <i class="icon-social-linkedin progress-group-icon"></i>
                <span class="title">LinkedIn</span>
                <span class="ml-auto font-weight-bold">27,319 <span class="text-muted small">&nbsp;(8%)</span></span>
              </div>
              <div class="progress-group-bars">
                <b-progress height={} class="progress-xs" :value="8" variant="success"></b-progress>
              </div>
            </div>
            <div class="divider text-center">
              <b-button variant="link" size="sm" class="text-muted"><i class="icon-options"></i></b-button>
            </div>
          </ul>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
  import { Callout } from '@coreui/vue'
  import mdiChart from './mycharts/MdiChart'
    export default {
        name: "MdiGroup",
      components: {
          mdiChart,
        Callout
      }
    }
</script>

<style scoped>

</style>
