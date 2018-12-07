<template>
  <div>
    <b-card class="card-accent-info" header="发展量">
      <b-row>
        <b-col cols="12" sm="12" lg="6">
          <div class="chart-wrapper">
            <mdi-chart chartId="chart-bar-01"/>
          </div>
        </b-col>
        <b-col cols="12" sm="12" lg="2" class="align-items-center">
          <b-card class="text-center ">
            <div class="h1 text-muted text-center mb-4">
              <i class="icon-people"></i>
            </div>
            <div class="h4 mb-0">876</div>
            <small class="text-muted text-uppercase font-weight-bold">发展量总数</small>
            <!--<b-progress height={} class="progress-xs mt-3 mb-0" variant="info" :value="25"/>-->
          </b-card>
        </b-col>
        <b-col cols="12" sm="12" lg="4">
          <b-row>
            <b-col>
              <b-card :no-body="true">
                <b-card-body class="p-0 clearfix">
                  <i class="fa fa-cogs bg-primary p-4 font-2xl mr-3 float-left"></i>
                  <div class="h5 text-primary mb-0 pt-3">333</div>
                  <div class="text-muted text-uppercase font-weight-bold font-xs">天翼发展量</div>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-card :no-body="true">
                <b-card-body class="p-0 clearfix">
                  <i class="fa fa-cogs bg-primary p-4 font-2xl mr-3 float-left"></i>
                  <div class="h5 text-primary mb-0 pt-3">1111</div>
                  <div class="text-muted text-uppercase font-weight-bold font-xs">宽带发展量</div>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-card :no-body="true">
                <b-card-body class="p-0 clearfix">
                  <i class="fa fa-cogs bg-primary p-4 font-2xl mr-3 float-left"></i>
                  <div class="h5 text-primary mb-0 pt-3">222</div>
                  <div class="text-muted text-uppercase font-weight-bold font-xs">IPTV发展量</div>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-card>
    <b-card class="card-accent-info" header="积分">
      <b-row>
        <b-col cols="12" sm="12" lg="6">
          <div class="chart-wrapper">
            <mdi-chart chartId="chart-bar-02"/>
          </div>
        </b-col>
        <b-col cols="12" sm="12" lg="2" class="align-items-center">
          <b-card class="text-center ">
            <div class="h1 text-muted text-center mb-4">
              <i class="icon-people"></i>
            </div>
            <div class="h4 mb-0">876</div>
            <small class="text-muted text-uppercase font-weight-bold">积分总数</small>
            <!--<b-progress height={} class="progress-xs mt-3 mb-0" variant="info" :value="25"/>-->
          </b-card>
        </b-col>
        <b-col cols="12" sm="12" lg="4">
          <b-row>
            <b-col>
              <b-card :no-body="true">
                <b-card-body class="p-0 clearfix">
                  <i class="fa fa-cogs bg-primary p-4 font-2xl mr-3 float-left"></i>
                  <div class="h5 text-primary mb-0 pt-3">333</div>
                  <div class="text-muted text-uppercase font-weight-bold font-xs">天翼积分</div>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-card :no-body="true">
                <b-card-body class="p-0 clearfix">
                  <i class="fa fa-cogs bg-primary p-4 font-2xl mr-3 float-left"></i>
                  <div class="h5 text-primary mb-0 pt-3">1111</div>
                  <div class="text-muted text-uppercase font-weight-bold font-xs">宽带积分</div>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
  import mdiChart from './mycharts/MdiChart'
    export default {
        name: "MdiGroup",
      components: {
          mdiChart
      }
    }
</script>

<style scoped>

</style>
