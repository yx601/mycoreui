<template>
  <div>
    <b-card>
      <div slot="header">
        <strong>筛选条件 </strong> <small>111</small>
      </div>
      <b-row>
        <b-col lg="3">
          <b-form-group sl>
            <label for="name">Name</label>
            <b-form-input type="text" id="name" placeholder="Enter your name"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col lg="3">
          <b-form-group sl>
            <label for="name">Name</label>
            <b-form-input type="text" id="name" placeholder="Enter your name"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col lg="3">
          <b-form-group sl>
            <label for="name">Name</label>
            <b-form-input type="text" id="name" placeholder="Enter your name"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>


    </b-card>
    <b-card>
      <div slot="header">
        <div class="font-xl float-left">业务发展量统计</div>
        <b-button-group class="float-right">
          <b-button variant="success">发展量</b-button>
          <b-button variant="info">发展分析</b-button>
        </b-button-group>
      </div>
      <mdi-group></mdi-group>
    </b-card>
    <b-card>
      <div slot="header">
        <div class="font-xl float-left">人流量统计</div>
        <b-button-group class="float-right">
          <b-button variant="success">人流统计</b-button>
          <b-button variant="info">转化分析</b-button>
        </b-button-group>
      </div>
      <pdi-group></pdi-group>
    </b-card>
  </div>
</template>

<script>
import BarExample from '../charts/BarExample'
import LineExample from '../charts/LineExample'
import DoughnutExample from '../charts/DoughnutExample'
import RadarExample from '../charts/RadarExample'
import PieExample from '../charts/PieExample'
import PolarAreaExample from '../charts/PolarAreaExample'
import MdiGroup from "./MdiGroup"
import PdiGroup from "./PdiGroup"


export default {
  name: "statistics",
  components: {
    MdiGroup,
    BarExample,
    LineExample,
    DoughnutExample,
    RadarExample,
    PieExample,
    PolarAreaExample,
    PdiGroup
  }
}
</script>

<style scoped>

</style>
