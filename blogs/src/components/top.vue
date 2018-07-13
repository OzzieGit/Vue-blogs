<template>
	<div class="head">
		<span>
			<router-link to="/" exact>博客</router-link>
		</span>
		<span>
			<router-link to="/addBlogs" exact>写博客</router-link>
		</span>
	</div>
</template>
<script>
	export default{
		name:"head",
		data(){
			return{}
		}
	}
</script>
<style scoped>
	.head{ text-align: center; padding: 20px 0; background-color: #CC0001; font-family: "SumSun"; font-size: 0; }
	span{ display: inline-block; width: 80px; height: 36px; font-weight: bold; margin: 0 10px; }
	span a{ display: block; width: 100%; height: 100%; line-height: 36px; color: #fff; border: 1px solid #fff; border-radius: 6px; font-size: 16px; }
	span a.router-link-active{ background-color: #fff; color: #CC0001; }
</style>