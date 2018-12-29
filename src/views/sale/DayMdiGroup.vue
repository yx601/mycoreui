<template>
  <div>
    <b-row>
      <b-col lg="4">
        <h4 style="border-bottom-style:solid;border-color:#5a4980">发展量</h4>
        <ve-pie :data="fzlData" :settings="fzlSetting"></ve-pie>
      </b-col>
      <b-col lg="4">
        <h4 style="border-bottom-style:solid;border-color:#5a4980">积分</h4>
        <ve-pie :data="fjData"></ve-pie>
      </b-col>
      <b-col lg="2" >
        <div class="text-center center-vertical">
          <h2>100</h2>
          <h4>发展量</h4>
        </div>
      </b-col>
      <b-col lg="2" >
        <div class="text-center center-vertical">
          <h2>100</h2>
          <h4>积分</h4>
        </div>
      </b-col>
    </b-row>
  </div>

</template>

<script>
  export default {
    data () {
      this.fzlSetting = {
        level: [
          ['天翼用户','宽带用户', 'IPTV' ],
          ['单手机','融合1','副卡','包年', '包月','融合2','IPTV1']
        ]
      }
      return {
        fzlData: {
          columns: ['类型', '用户数'],
          rows: [
            { '类型': '天翼用户', '用户数': 1000 },
            { '类型': '宽带用户', '用户数': 2000 },
            { '类型': 'IPTV', '用户数': 50 },
            { '类型': '单手机', '用户数': 200 },
            { '类型': '融合1', '用户数': 400 },
            { '类型': '副卡', '用户数': 400 },
            { '类型': '包年', '用户数': 1500 },
            { '类型': '包月', '用户数': 400 },
            { '类型': '融合2', '用户数': 100 },
            { '类型': 'IPTV1', '用户数': 50 },
          ]
        },
        fjData: {
          columns:['类型', '用户数'],
          rows:[
            {'类型': '天翼用户', '用户数': 1000 },
            {'类型': '宽带用户', '用户数': 300 },
          ]
        }
      }
    }
  }
</script>

<style scoped>
  .center {
    width: auto;
    /*display: table;*/
    margin-left: auto;
    margin-right: auto;
    display: table-cell;
  }
  .center-vertical{

    position: relative;

    top: 50%;

    transform: translateY(-50%);

  }
</style>
