<template>
  <div id="app">
    {{ utilsResult }}
  </div>
</template>

<script>
  import { firstTestUtil } from 'vast-utils'
  export default {
    name: 'App',
    data() {
      return {
        utilsResult: false,
      }
    },
    components: {},
    mounted() {
      this.utilsResult = firstTestUtil()
    },
  }
</script>

<style></style>
