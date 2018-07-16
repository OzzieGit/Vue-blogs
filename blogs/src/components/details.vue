<template>
  <div id="details">
  	<div class="load" v-loading="loadStatus" v-if="loadStatus" element-loading-text="加载中"></div>
    <h1 class="title">{{ detail.title }}</h1>
    <p class="content">{{ detail.body }}</p>
    <el-button class="back" type="primary" icon="el-icon-back" @click="back">返回</el-button>
  </div>
</template>

<script>
	export default {
	  name: 'details',
	  data(){
	  	return {
	  		detail:{},
	  		loadStatus:false
	  	}
	  },
	  methods:{
	  	back(){
	  		this.$router.go(-1)
	  	}
	  },
	  created(){
	  	this.loadStatus = true;
	  	this.$http.get('https://jsonplaceholder.typicode.com/posts/'+this.$route.query.id).then(data=>{
	  		this.detail = data.data;
	  		this.loadStatus = false;
	  	})
	  }
	}
</script>

<style scoped>
	.load{ position: fixed; top: 0; left: 0; right: 0; bottom: 0; }
	#details{ max-width: 900px; width: 90%; margin: 0 auto; }
	#details h1{ font-size: 20px; color: #333; line-height: 1.8; padding: 30px 0; text-align: center; }
	#details p{ padding: 30px; line-height: 2; box-shadow: 0 0 20px 1px rgba(0,0,0,0.1); border-radius: 6px; color: #999; }
	.back{ margin-top: 30px; float: right; }
</style>