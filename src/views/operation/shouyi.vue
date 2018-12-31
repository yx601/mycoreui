<template>
<div>
  <b-row>
    <b-col lg="6">
      <ve-pie :data="tdData" :title="tdTitle" :legend="tdLegend"></ve-pie>
    </b-col>
    <b-col lg="6" class="fenge">
      <ve-pie :data="dxData" :title="dxTitle" :legend="tdLegend"></ve-pie>
    </b-col>
  </b-row>
</div>
</template>

<script>
    export default {
        name: "shouyi",

      data () {
          this.tdLegend = {
            left: 'left'
          }
          this.tdTitle = {
            text: '厅店收益 1:2.5',
            textStyle: {
              fontSize: 20,
            },
            left: '60%',
            top: 'top'
          }
          this.dxTitle = {
            text: '电信收益 1:3',
            textStyle: {
              fontSize: 20,
            },
            left: '60%',
            top: 'top'
          }
          return {
            tdData: {
              columns: ['类型', '数值'],
              rows: [
                { '类型': '收入总数', '数值': 650 },
                { '类型': '支出总数', '数值': 350 },
              ]
            },
            dxData: {
              columns: ['类型', '数值'],
              rows: [
                { '类型': '收入总数', '数值': 650 },
                { '类型': '支出总数', '数值': 350 },
              ]
            }
          }
      }
    }
</script>

<style scoped>
  .fenge{
    border-left-style:dotted;
    border-color:darkgray;
    border-left-width: 1px;
  }
</style>
