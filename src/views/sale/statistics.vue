<template>
  <div>
    <b-card>
      <div slot="header">
        <strong>筛选条件 </strong> <small>hot</small>
      </div>
      <b-row >
        <b-col  lg="3">
          <b-button-group>
            <b-button variant="success" :class="{focus:dateKey==='day'}" @click="selDate('day')">本日</b-button>
            <b-button variant="warning" :class="{focus:dateKey==='week'}" @click="selDate('week')">本周</b-button>
            <b-button variant="danger" :class="{focus:dateKey==='year'}" @click="selDate('year')">本年</b-button>
          </b-button-group>
        </b-col>
        <b-col lg="2">
          <b-form-select id="basicSelect"
                         :plain="true"
                         :options="['选择经营单位','Option 1', 'Option 2', 'Option 3']"
                         value="选择经营单位">
          </b-form-select>
        </b-col>
        <b-col lg="2">
          <b-form-select id="basicSelect"
                         :plain="true"
                         :options="['选择支局','Option 1', 'Option 2', 'Option 3']"
                         value="选择支局">
          </b-form-select>
        </b-col>
        <b-col lg="2">
          <b-form-select id="basicSelect"
                         :plain="true"
                         :options="['选择代理商','Option 1', 'Option 2', 'Option 3']"
                         value="选择代理商">
          </b-form-select>
        </b-col>
        <b-col lg="3">
          <b-form-select id="basicSelect"
                         :plain="true"
                         :options="['选择厅店','Option 1', 'Option 2', 'Option 3']"
                         value="选择厅店">
          </b-form-select>
        </b-col>
      </b-row>
      <b-row  class="mt-3">
        <b-col >
          <b-form-input type="date" id="date"></b-form-input>
        </b-col>
        -
        <b-col>
          <b-form-input type="date" id="date"></b-form-input>
        </b-col>
      </b-row>

    </b-card>
    <b-card>
      <div slot="header">
        <div class="font-xl float-left">业务发展量统计</div>
        <b-button-group class="float-right">
          <b-button variant="success" :class="{focus:fzl}" @click="fzlClick">发展量</b-button>
          <b-button variant="info" :class="{focus:fzfx}" @click="fzfxClick">发展分析</b-button>
        </b-button-group>
      </div>
    <template v-if="dateKey==='day'">
      <template v-if="fzl">
        <keep-alive>
          <day-mdi-group></day-mdi-group>
        </keep-alive>
      </template>
      <template v-else>
        <keep-alive>
          <fzfx></fzfx>
        </keep-alive>
      </template>
    </template>
    <template v-else>
      <template v-if="fzl">
        <keep-alive>
          <week-mdi-group></week-mdi-group>
        </keep-alive>
      </template>
      <template v-else>
        <keep-alive>
          <fzfx></fzfx>
        </keep-alive>
      </template>
    </template>
    </b-card>
    <!--<b-card>-->
      <!--<div slot="header">-->
        <!--<div class="font-xl float-left">人流量统计</div>-->
        <!--<b-button-group class="float-right">-->
          <!--<b-button variant="success">人流统计</b-button>-->
          <!--<b-button variant="info">转化分析</b-button>-->
        <!--</b-button-group>-->
      <!--</div>-->
      <!--<pdi-group></pdi-group>-->
    <!--</b-card>-->
  </div>
</template>

<script>
import BarExample from '../charts/BarExample'
import LineExample from '../charts/LineExample'
import DoughnutExample from '../charts/DoughnutExample'
import RadarExample from '../charts/RadarExample'
import PieExample from '../charts/PieExample'
import PolarAreaExample from '../charts/PolarAreaExample'
import DayMdiGroup from "./DayMdiGroup"
import WeekMdiGroup from "./WeekMdiGroup"
import PdiGroup from "./PdiGroup"
import fzfx from "./fzfx"

export default {
  name: "statistics",
  components: {
    WeekMdiGroup,
    BarExample,
    LineExample,
    DoughnutExample,
    RadarExample,
    PieExample,
    PolarAreaExample,
    PdiGroup,
    DayMdiGroup,
    fzfx
  },
  computed:{
    currentTabComponent:'MdiGroup'
  },
  data:()=>{
    return {
      fzl: true,
      fzfx: false,
      dateKey: 'day',
    };
  },
  methods:{
    fzlClick:function(){
      this.fzl = true;
      this.fzfx = false;
    },
    fzfxClick:function(){
      this.fzfx = true;
      this.fzl = false;
    },
    selDate:function(k){
      this.dateKey=k;
    }
  }
}
</script>

<style scoped>

</style>
