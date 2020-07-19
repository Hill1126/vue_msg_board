 <template>
  <el-pagination
    layout="prev, pager, next"
    :total="size"
  >
  </el-pagination>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    size: Number,
  }
}
</script>

<style lang="less" scoped>

</style>