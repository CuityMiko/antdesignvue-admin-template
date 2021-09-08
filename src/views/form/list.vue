<template>
  <section>
    <h1>表单列表页</h1>
    <a-row :gutter="16">
      <a-col :span="8">
        <a-button type="primary" @click="handleGo('setting')"> 设置页 </a-button>
      </a-col>
      <a-col :span="8">
        <a-button type="primary" @click="handleGo('detail')"> 详情页 </a-button>
      </a-col>
      <a-col :span="8">
        <a-button type="primary" @click="handleGo('compare')"> 对比页 </a-button>
      </a-col>
    </a-row>
  </section>
</template>

<script>
export default {
  name: 'FormList',
  data() {
    return {}
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {
    handleGo(type) {
      this.$router.push({ path: `/form/${type}` })
    },
  },
}
</script>

<style scoped lang="less">
h1 {
  .sc(24px,#333);
}
</style>
