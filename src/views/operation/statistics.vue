<template>
  <div>
    <b-card>
      <div slot="header">
        <strong>筛选条件 </strong> <small>hot</small>
      </div>
      <b-row >
        <b-col lg="3">
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
        <b-col lg="2">
          <b-form-input type="date" id="date"></b-form-input>
        </b-col>
        -
        <b-col lg="2">
          <b-form-input type="date" id="date"></b-form-input>
        </b-col>
      </b-row>
    </b-card>
  <b-card>
    <div slot="header">
      <strong>基本信息</strong>
    </div>
    <b-row>
      <b-col lg="9">
        <b-row>
          <b-col>
            <i class="fa fa-2x fa-home"></i><strong style="font-size:16px"> 经营主体名称：天香营业厅</strong>
          </b-col>
          <b-col>
            <i class="fa fa-2x fa-user-o"></i><strong style="font-size:16px"> 法人名称：王某某</strong>
          </b-col>
          <b-col>
            <i class="fa fa-2x fa-flag-o"></i><strong style="font-size:16px"> 商积分排名：1</strong>
          </b-col>
        </b-row>
        <b-row class="mt-2">
          <b-col>
            <i class="fa fa-2x fa-calendar"></i><strong style="font-size:16px"> 协议到期时间：2018-12-31</strong>
          </b-col>
          <b-col>
            <i class="fa fa-2x fa-phone"></i><strong style="font-size:16px"> 联系号码：1391112222</strong>
          </b-col>
          <b-col>
            <i class="fa fa-2x fa-check-square-o"></i><strong style="font-size:16px"> 商类型：本地商</strong>
          </b-col>
        </b-row>
      </b-col>
      <b-col lg="1" class="mr-lg-4">
        <img src="img/test.jpg" alt="图1" width="100" height="100">
      </b-col>
      <b-col lg="1" >
        <img src="img/test.jpg" alt="图1" width="100" height="100">
      </b-col>
    </b-row>
  </b-card>
    <b-card>
      <div slot="header">
        <strong>佣金</strong>
      </div>
      <yj-group></yj-group>
    </b-card>
  <b-row>
    <b-col lg="12">
      <b-card>
        <div slot="header">
          <strong>发展质量监控</strong>
        </div>
        <fzzljk></fzzljk>
      </b-card>
    </b-col>

  </b-row>
    <b-row>
      <b-col lg="12">
        <b-card>
          <div slot="header">
            <strong>收益</strong>
          </div>
          <shouyi></shouyi>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// import BarExample from '../charts/BarExample'
// import LineExample from '../charts/LineExample'
// import DoughnutExample from '../charts/DoughnutExample'
// import RadarExample from '../charts/RadarExample'
// import PieExample from '../charts/PieExample'
// import PolarAreaExample from '../charts/PolarAreaExample'
import yjGroup from './yjGroup'
import fzzljk from './fzzljk'
import shouyi from './shouyi'

export default {
  name: "statistics",
  components: {
    // BarExample,
    // LineExample,
    // DoughnutExample,
    // RadarExample,
    // PieExample,
    // PolarAreaExample,
    yjGroup,
    fzzljk,
    shouyi
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
