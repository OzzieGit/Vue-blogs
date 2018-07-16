<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
	export default {
	  name: 'App'
	}
</script>

<style>
	*{ margin: 0; padding: 0; font-family: "Microsoft YaHei"; line-height: 1; text-decoration: none;}
	.el-checkbox-group .el-checkbox:first-child{ margin-right: 30px; }
	.el-checkbox-group .el-checkbox{ margin-bottom: 15px; }
	.el-checkbox+.el-checkbox{ margin-left: 0; margin-right: 30px; }
</style>