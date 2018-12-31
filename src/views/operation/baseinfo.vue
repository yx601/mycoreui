<template>
  <div>
    <b-card header="商信息">
      <b-row>
        <b-col lg="6">
          <table>
            <tbody>
              <tr>
                <td>经营主体名称：</td>
                <td>上海路营业厅</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>商类型：</td>
                <td>本地商</td>
                <td>商积分排名：</td>
                <td>1</td>
              </tr>
              <tr>
                <td>待办协议编码：</td>
                <td>A123456</td>
                <td>法人名称：</td>
                <td>张某</td>
              </tr>
              <tr>
                <td>协议到期时间：</td>
                <td>2018-12-1</td>
                <td>联系号码：</td>
                <td>1390000000</td>
              </tr>
            </tbody>
          </table>
        </b-col>
        <b-col lg="6" style="border-left:1px dotted gray">
          <b-row class="mb-2">
            <b-col lg="3">
              <div class="mycenter">合同照片：</div>
            </b-col>
            <b-col lg="3">
              <b-button block variant="primary">上传</b-button>
            </b-col>
          </b-row>
          <b-row>
            <b-col lg="3" class="mr-lg-2">
              <img src="img/test.jpg" alt="图1" width="100" height="100">
            </b-col>
            <b-col lg="3">
              <img src="img/test.jpg" alt="图1" width="100" height="100">
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-card>
    <pos></pos>
  </div>
</template>

<script>
  import pos from './pos'

    export default {
        name: "baseinfo",
      components: {
          pos
      }
    }
</script>

<style scoped>
.mycenter{
  position: relative;
  transform:translateY(-50%);
  top:50%
}
td{
  height:40px
}

</style>
