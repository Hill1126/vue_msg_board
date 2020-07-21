 <template>
 <div>


  <el-dialog
    title="收货地址"
    :visible.sync="dialog"
  >
    <el-form :model="form">
      <el-form-item
        label="活动名称"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="form.name"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="活动区域"
        :label-width="formLabelWidth"
      >
        <el-select
          v-model="form.region"
          placeholder="请选择活动区域"
        >
          <el-option
            label="区域一"
            value="shanghai"
          ></el-option>
          <el-option
            label="区域二"
            value="beijing"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div
      slot="footer"
      class="dialog-footer"
    >
      <el-button @click="dialog = false">取 消</el-button>
      <el-button
        type="primary"
        @click="dialog = false"
      >确 定</el-button>
    </div>
  </el-dialog>
  </div>
</template>
<script>
export default {
  name: "Edit",
  props: {
    dialogFormVisible: {
      type: Boolean,
      default: () => {
        return false;
      }
    }
  },
   watch: {
    dialogFormVisible(val){
      this.dialog = val
    }
   },
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      dialog:this.dialogFormVisible,
      formLabelWidth: "120px"
    };
  }
};
</script>

<style lang="less" scoped>
</style>