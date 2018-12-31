<template>
<b-card>
  <div slot="header">
    <div class="font-xl float-left">销售点信息</div>
    <b-button-group class="float-right">
      <template v-for="(item,index) in poses">
        <b-button :key="index" :variant="item.style" :class="{focus:item.id===curpos}" @click="choosePos(item.id)">{{item.name}}</b-button>
      </template>
    </b-button-group>
  </div>
  <b-row class="mb-2">
    <b-col lg="12">
      <h5>点信息</h5>
      <table class="table-bordered">
        <tbody>
          <tr>
            <td>销售点名称：</td>
            <td>销售点C</td>
            <td>店中商名称：</td>
            <td>XXX</td>
            <td>网点类型：</td>
            <td>XXX</td>
          </tr>
          <tr>
            <td>销售点新增时间：</td>
            <td></td>
            <td>店中商运营时间：</td>
            <td></td>
            <td>门店形态：</td>
            <td>
                <b-form-select id="basicSelect"
                               :plain="true"
                               :options="['电信VI','厂商VI', 'Option 2', 'Option 3']"
                               value="电信VI">
                </b-form-select>
            </td>
          </tr>
          <tr>
            <td>场地性质：</td>
            <td>自有</td>
            <td>门店租赁到期时间：</td>
            <td><b-form-input type="date" id="date"></b-form-input></td>
            <td>房租：</td>
            <td><b-form-input></b-form-input></td>
          </tr>
          <tr>
            <td>以店包片厅：</td>
            <td>
              <b-form-select id="basicSelect"
                             :plain="true"
                             :options="['是','否']"
                             value="是">
              </b-form-select>
            </td>
            <td>包片网格：</td>
            <td><b-form-input></b-form-input></td>
            <td>设置翼支付区：</td>
            <td>
              <b-form-select id="basicSelect"
                   :plain="true"
                   :options="['是','否']"
                   value="否">
              </b-form-select>
            </td>
          </tr>
          <tr>
            <td>设置智慧家庭区：</td>
            <td>
              <b-form-select id="basicSelect"
                             :plain="true"
                             :options="['是','否']"
                             value="是">
              </b-form-select>
            </td>
            <td>网点状态：</td>
            <td><b-form-input value="有效"></b-form-input></td>
            <td>销售点面积：</td>
            <td></td>
          </tr>
          <tr>
            <td>销售点地址：</td>
            <td>
            </td>
            <td>代理商人数：</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </b-col>
  </b-row>
  <b-row class="mb-2">
    <b-col lg="12">
      <h5>归属单位信息</h5>
      <table class="table-bordered">
        <tbody>

        <tr>
          <td>销售点归属单位：</td>
          <td>
            <b-form-select id="basicSelect"
                           :plain="true"
                           :options="['xxx单位','否']"
                           value="xxx单位">
            </b-form-select>
          </td>
          <td>归属支局：</td>
          <td>
            <b-form-select id="basicSelect"
                           :plain="true"
                           :options="['xxx单位','否']"
                           value="xxx单位">
            </b-form-select>
          </td>
          <td>归属网格：</td>
          <td></td>
        </tr>
        <tr>
          <td>商圈类型：</td>
          <td>市核心商圈</td>
          <td>商圈名称：</td>
          <td><b-form-input value="名称"></b-form-input></td>
          <td>网点负责渠道经理：</td>
          <td></td>
        </tr>
        <tr>
          <td>渠道负责人联系号码：</td>
          <td>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
      </table>
    </b-col>
  </b-row>
  <b-row class="mb-2">
    <b-col>
      <div style="height: 40px">
        <h5 class="float-left">店员信息：</h5>
        <div class="float-right ">
          <b-button size="30" variant="success" class="mr-2" v-b-modal.modal-center>添加人员</b-button>
          <b-button size="30" variant="info">批量导入</b-button>
          <b-modal id="modal-center" centered title="添加人员">
            <p class="my-4">Vertically centered modal!</p>
          </b-modal>
        </div>
      </div>
      <b-table :dark="dark" :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage">
        <template slot="头像" slot-scope="data">
          <img :src="data.item['头像']" style="height:30px"/>
        </template>
      </b-table>
        <b-pagination-nav :link-gen="linkGen" :number-of-pages="2" v-model="currentPage" />
    </b-col>
  </b-row>
</b-card>
</template>

<script>

  const someData = () => {return [
    {'头像': '/img/logo.png', '工号': '12345', '姓名': 'yangxi', '联系电话': '18977347921', '职务': '店长'},
    {'头像': '/img/logo.png', '工号': '12345', '姓名': 'yangxi', '联系电话': '18977347921', '职务': '店长'},
    {'头像': '/img/logo.png', '工号': '12345', '姓名': 'yangxi', '联系电话': '18977347921', '职务': '店长'},
    {'头像': '/img/logo.png', '工号': '12345', '姓名': 'yangxi', '联系电话': '18977347921', '职务': '店长'},
    {'头像': '/img/logo.png', '工号': '12345', '姓名': 'yangxi', '联系电话': '18977347921', '职务': '店长'},
    {'头像': '/img/logo.png', '工号': '12345', '姓名': 'yangxi', '联系电话': '18977347921', '职务': '店长'},
    {'头像': '/img/logo.png', '工号': '12345', '姓名': 'yangxi', '联系电话': '18977347921', '职务': '店长'},
  ]}

    export default {
        name: "pos",
      data () {
        this.poses = [
          {name: '销售点A',style: 'success', id: 1},
          {name: '销售点B',style: 'info',  id: 2},
          {name: '销售点C',style: 'warning',  id: 3},
        ]
        this.items=someData()
        this.captions = ['头像','工号','姓名','联系电话','职务']
        this.curpos = 1
        return {
          curpos: 1,
          dark: false,
          hover: true,
          striped: true,
          bordered: true,
          small: false,
          fixed: true,
          currentPage:1,
          perPage:5,
          fields: [
            {key: '头像', label: '头像', sortable: true},
            {key: '工号'},
            {key: '姓名'},
            {key: '联系电话', sortable: true},
            {key: '职务', sortable: true}
          ],
        }
      },
      methods: {
        choosePos: function(cur){
          this.curpos = cur
          console.log(this.curpos)
        },
        linkGen (pageNum) {
          return '#page/' + pageNum + '/foobar'
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
  table tr td:nth-child(odd){
    background-color: rgb(242, 242, 242);
  }
  table{
    width:100%
  }
  table td{
    min-width: 60px;
    padding:10px;
  }
</style>
