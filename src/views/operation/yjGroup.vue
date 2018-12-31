<template>
<div>
  <b-row>
    <b-col lg="8" >
      <h5 class="downline">佣金</h5>
      <ve-line :data="lineData" :settings="lineSettings"></ve-line>
    </b-col>
    <!--<b-col lg="1" style="border-left:1px dotted darkgray"></b-col>-->
    <b-col lg="4" style="border-left:1px dotted darkgray">
      <h5 style="padding:3px"></h5>
      <div class="smaller">
        <ve-pie :data="pieData" :settings="pieSettings"></ve-pie>
      </div>

    </b-col>
  </b-row>
  <b-row>
    <b-col lg="12" class="fenge mb-3 mt-3 smaller"></b-col>
  </b-row>
  <b-row>
    <b-col lg="8">
      <h5 class="downline">积分</h5>
      <ve-line :data="lineData" :settings="lineSettings"></ve-line>
    </b-col>
    <!--<b-col lg="1" style="border-left:1px dotted darkgray"></b-col>-->
    <b-col lg="4" style="border-left:1px dotted darkgray">
      <h5 style="padding:3px"></h5>
      <ve-pie :data="pieData" :settings="pieSettings"></ve-pie>
    </b-col>
  </b-row>
</div>
</template>
<script>

  export default {
    data () {
      this.lineSettings = {
        metrics: ['访问用户', '下单用户'],
        dimension: ['日期']
      }
      this.pieSettings = {
        dimension: '日期',
        metrics: '访问用户'
      }
      return {
        lineData: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        },
        pieData: {
          columns: ['日期', '访问用户'],
          rows: [
            { '日期': '1/1', '访问用户': 1393 },
            { '日期': '1/2', '访问用户': 3530 },
            { '日期': '1/3', '访问用户': 2923 },
            { '日期': '1/4', '访问用户': 1723 },
            { '日期': '1/5', '访问用户': 3792 },
            { '日期': '1/6', '访问用户': 4593 }
          ]
        }
      }
    }
  }
</script>

<style scoped>
  .downline{
    border-bottom-style:solid;
    border-color:#5a4980;
    border-bottom-width: 1px;
    padding:3px
  }
  .fenge{
    border-bottom-style:dotted;
    border-color:darkgray;
    border-bottom-width: 1px;
  }
  .smaller{
    /*transform:scale(0.8,0.8);*/
    /*left:20%;*/
    /*transform:translateX(-20%);*/
  }
</style>
