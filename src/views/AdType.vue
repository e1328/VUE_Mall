<template>
  <div>
    <div style="width: 100%;height: 40px;line-height: 40px;border-bottom: 1px solid rgba(153,153,153,0.2)" class="container">
      <span class="h4">广告分类管理</span>
    </div>
    <div style="width: 100%;height: 30px;margin-top: 10px;" class="container">
      <div class="btn-group btn-group-sm" role="group" aria-label="...">
        <button type="button" class="btn btn-default" data-toggle="modal" data-target="#editModal">新增</button>
        <button type="button" class="btn btn-default" @click="del">删除</button>
        <button type="button" class="btn btn-default" @click="refresh">刷新</button>
      </div>
    </div>
    <div style="width: 100%;margin-top: 10px;" class="container" id="div">
      <table class="table table-bordered">
        <tbody>
        <tr>
          <td><input type="checkbox"></td>
          <td>广告分类ID</td>
          <td>广告分类名称</td>
          <td>操作</td>
        </tr>
        <tr v-for="(item, index) in list" :key="index">
          <td><input type="checkbox" @click="updateSelection($event, item.id)"></td>
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>
            <button class="btn btn-success btn-xs" data-toggle="modal" data-target="#editModal" @click="findOne(item.id)">修改</button>
            <button class="btn btn-danger btn-xs" @click="delOne(item.id)">删除</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog" >
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true" @click="close">×</button>
            <h4 id="myModalLabel">广告分类编辑</h4>
          </div>
          <div class="modal-body">
            <table class="table h5">
              <tr>
                <td>广告分类名称</td>
                <td><input class="form-control" placeholder="广告分类名称" v-model="entity.name"></td>
              </tr>
            </table>
          </div>
          <div class="modal-footer">
            <button class="btn btn-success btn-sm" data-dismiss="modal" aria-hidden="true" @click="save">保存</button>
            <button class="btn btn-default btn-sm" data-dismiss="modal" aria-hidden="true" @click="close">关闭</button>
          </div>
        </div>
      </div>
    </div>
    <cpaginate
      :pageCount="pageCount"
      :marginPages="marginPages"
      :rangePage="rangePage"
      :initPage="initPage"
      @pageEvent="pageEvent">
    </cpaginate>
  </div>
</template>

<script>
import cpaginate from './customPaginate'
export default {
  name: 'AdType',
  components: {
    cpaginate
  },
  data () {
    return {
      pageCount: 20,
      marginPages: 2,
      rangePage: 5,
      initPage: 0,
      list: [],
      selectIds: [],
      page: 1,
      entity: {}
    }
  },
  methods: {
    pageEvent: function (e) {
      this.page = e
      console.log(e)
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/ad_type/findPage?page=' + e + '&size=10'
      })
        .then(response => {
          this.list = response.data.rows
        })
        .catch(error => {
          alert(error)
        })
    },
    findOne: function (id) {
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/ad_type/findOne?id=' + id
      })
        .then(response => {
          this.entity = response.data
        })
    },
    add: function () {
      this.axios({
        method: 'post',
        url: 'http://localhost:8080/ad_type/add',
        data: this.entity
      })
        .then(response => {
          this.pageEvent(this.page)
          this.entity.name = ''
          this.entity.id = null
        })
      // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('增加失败')
        })
    },
    update: function () {
      this.axios({
        method: 'post',
        url: 'http://localhost:8080/ad_type/update',
        data: this.entity
      })
        .then(response => {
          this.pageEvent(this.page)
          this.entity.name = ''
          this.entity.id = null
        })
      // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('更新失败')
        })
    },
    save: function () {
      if (this.entity.id != null) {
        this.update()
      } else {
        this.add()
      }
    },
    updateSelection: function ($event, id) {
      if ($event.target.checked) {
        this.selectIds.push(id)
      } else {
        var index = this.selectIds.indexOf(id)
        this.selectIds.splice(index, 1)
      }
    },
    delOne: function (id) {
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/ad_type/deleteOne?id=' + id
      })
        .then(response => {
          this.pageEvent(this.page)
        })
      // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('删除失败')
        })
    },
    del: function () {
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/ad_type/delete?ids=' + this.selectIds
      })
        .then(response => {
          this.pageEvent(this.page)
          // eslint-disable-next-line no-undef
          $('input:checkbox').prop('checked', false)
          this.selectIds = []
        })
      // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('删除失败')
        })
    },
    refresh: function () {
      this.pageEvent(this.page)
    },
    close: function () {
      this.entity = []
    }
  },
  mounted: function () {
    this.pageEvent(1)
  }
}
</script>

<style scoped>

</style>
