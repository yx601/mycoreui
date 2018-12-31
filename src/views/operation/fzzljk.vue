<template>
  <div>
    <b-row>
      <b-col lg="4" class="mb-0">
        <ve-ring :title="title" :data="chartData"  ></ve-ring>
      </b-col>
      <b-col lg="8" >
        <b-row class="mycenter fenge" >
          <b-col lg="4" class="font-2xl" style="text-align:center;">
            <div class="mycenter">
              <i class="fa fa-square  mr-2" style="color:darkred"></i><span class="font-xl">不合格用户总数</span>
              <p >10000</p>
            </div>
          </b-col>
          <b-col lg="8" class="fenge">
            <table class="table mb-0  float-left">
              <tbody class="font-2xl">
              <tr>
                <td><i class="fa fa-dot-circle-o mr-2" style="color:#ff9560"></i><span >发展总量</span></td>
                <td><span >拆机率 <span style="color:red">60%</span></span></td>
              </tr>
              <tr>
                <td><i class="fa fa-dot-circle-o mr-2" style="color:#ff9560"></i><span >发展总量</span></td>
                <td><span >拆机率 <span style="color:red">60%</span></span></td>
              </tr>
              <tr>
                <td><i class="fa fa-dot-circle-o mr-2" style="color:#ff9560"></i><span>发展总量</span></td>
                <td><span >拆机率 <span style="color:red">60%</span></span></td>
              </tr>
              <tr>
                <td><i class="fa fa-dot-circle-o mr-2" style="color:#ff9560"></i><span>地址用户数（含副卡）</span></td>
                <td><span >地址用户占比 <span style="color:red">60%</span></span></td>
              </tr>
              </tbody>
            </table>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

  </div>

</template>

<script>
  // import Icon from 'vue-awesome/components/Icon'
  // import 'vue-awesome/icons/index'

  export default {
    // components: {
    //   'v-icon': Icon
    // },
    data () {
      // this.chartSettings = {
      //   dataType: 'KMB'
      // }
      this.title= {
        text: '30%',
        textStyle: {
          fontSize: 24,
        },
        subtext: '不合格率',
        subtextStyle: {
          fontSize:20,
        },
        x: 'center',
        y: 'center'
      }
      return {
        chartData: {
          columns: ['属性', '用户数'],
          rows: [
            { '属性': '不合格', '用户数': 1000 },
            { '属性': '合格', '用户数': 3000 },
          ],

        }
      }
    }
  }
</script>
<style scoped>
.mycenter{
  position:relative;
  top: 50%;
  transform: translateY(-50%);
}
.fenge{
  border-left-style:dotted;
  border-color:darkgray;
  border-left-width: 1px;
}
/*span{*/
  /*font-size:20px;*/
/*}*/
</style>
