<template>
  <div class="hello">
    <img src="../assets/logo.png" alt=""/>
    <group>
      <cell title="hello world" @click.native="alert"></cell>
    </group>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    msg: String
  },
  methods: {
    alert () {
      this.$vux.alert.show('hello')
    }
  }
}
</script>

<style scoped lang="less">
  .hello {
    text-align: center;
  }
</style>
