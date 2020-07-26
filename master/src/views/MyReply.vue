<template>
  <div class="reply">

    <el-container style="width:80%">
      <el-row>
        <HeaderBar></HeaderBar>
      </el-row>
      <el-row class="search">
        <label>搜索</label>
        <el-input
          style="width:80%"
          v-model="search"
          placeholder="请输入搜索内容"
        ></el-input>
        <el-button
          icon="el-icon-search"
          circle
        ></el-button>
      </el-row>
      <el-row class="table-row">
        <!-- <el-col span="24"> -->
        <el-table
          :data="replyList"
          border
        >
          <el-table-column
            prop="createTime"
            label="回复时间"
            width="150"
          >
          </el-table-column>
          <el-table-column
            prop="toUser"
            label="回复对象"
            width="150"
          >
          </el-table-column>
          <el-table-column
            prop="context"
            label="回复内容"
          >
          </el-table-column>
          <!-- 原文内容 -->
          <el-table-column
            prop="sourceContext"
            label="原文内容"
            width="150"
          >
            <template slot-scope="scope">
              <el-tooltip
                class="item"
                effect="dark"
                placement="top-start"
              >
                <div
                  class="tooltip-content"
                  slot="content"
                >{{scope.row.comment}}</div>
                <el-link>查看<i class="el-icon-view el-icon--right"></i> </el-link>
              </el-tooltip>
            </template>
          </el-table-column>
          <!-- 按钮操作 -->
          <el-table-column
            label="操作"
            width="150"
          >
            <template slot-scope="scope">
              <el-button
                size="mini"
                style="float:left"
                @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button>
              <el-button
                size="mini"
                style="float:left"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button>
            </template>
          </el-table-column>
        </el-table>

        <el-pagination
          background
          :page-size="pageSize"
          layout="prev, pager, next"
          :total="count"
        >
        </el-pagination>
      </el-row>

    </el-container>

    <el-dialog
      class="textarea"
      title="输入修改内容"
      :visible.sync="open"
      :before-close="handleClose"
    >
      <el-input
        type="textarea"
        placeholder="请修改内容"
        maxlength="512"
        show-word-limit
        v-model="text"
      >

      </el-input>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          type="primary"
          @click="open = false"
        >确 定</el-button>
        <el-button @click="open = false">取 消</el-button>

      </div>
    </el-dialog>
  </div>
</template>

<script>
import HeaderBar from "../components/Header";
import api from "../axios/api";

export default {
  name: "Reply",
  components: {
    HeaderBar,
  },
  data() {
    return {
      count: 0,
      pageNum: 1,
      pageSize: 10,
      open: false,
      text: "2342342352453",
      search: "",
      activeNames: ["1"],

      replyList: [],
    };
  },
  methods: {
    getMyReplyCommentList() {
      
      const pageSize = this.pageSize;
      const pageNum = this.pageNum;
      api.getMyReplyCommentList({ pageSize, pageNum }).then((res) => {
        //获取数据，赋值给commentList
        this.replyList = res.data;
      });
    },

    handleChange(val) {
      console.log(val);
    },
    handleEdit(index, row) {
      this.text = row.address;
      this.open = true;
      console.log(row);
    },
    handleDelete(index, row) {
      console.log(row.address);
    },
    handleClose(done) {
      this.$confirm("您还没有编辑完成，确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
  created() {
    // this.openState = Array(10).fill(false);
    this.getMyReplyCommentList();
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "getMyReplyCommentList",
  },
};
</script>


<style  scoped>
.search {
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translate(-50%, -50%);
  width: 80%;
}
.tooltip-content {
  max-width: 400px !important;
  line-height: 180%;
}

.textarea >>> .el-textarea__inner {
  resize: none;
  border-radius: 5px;
  height: 150px;
  /* width:80%; */
  line-height: 1.5em;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: #000000;
}
.el-pagination {
  margin-top: 10px;
}

.table-row {
  margin-top: 150px;
  width: 80%;
  height: 20%;
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translate(-50%, -50%);
  background: #2d2d2d;
}
</style>
