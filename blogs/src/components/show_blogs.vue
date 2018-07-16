<template>
	<div id="showBlogs">
		<Top></Top>
		<div class="load" v-loading="loadStatus" v-if="loadStatus" element-loading-text="加载中"></div>
		<div class="lists">
			<div class="item" v-for="(item,index) in listBlogs" :key="index" @click="to(item.id)">
				<strong v-rainbow>{{ item.title | uppercase }}</strong>
				<p>{{ item.body | snippet }}</p>
			</div>
		</div>
		<div class="page_btns">
			<el-pagination background layout="pager" :total="allBlogs.length" :page-size="pageCount" @current-change="pageToggle"> </el-pagination>
		</div>
	</div>
</template>

<script>
	import Top from '@/components/top'
	export default {
		name: 'showBlogs',
		components:{
			Top
		},
		data(){
			return {
				allBlogs:[],
				listBlogs:[],
				pageCount:14,
				page: 0,
				loadStatus:false
			}
		},
		methods:{
			pageToggle(e){
				this.page = (e - 1) * this.pageCount;
				this.listBlogs = this.allBlogs.slice(this.page,this.page + this.pageCount);
				document.body.scrollTop = 0;
			},
			to(id){
				this.$router.push({path: '/details', query:{id: id}})
			}
		},
		created(){
			this.loadStatus = true;
			this.$http.get('https://jsonplaceholder.typicode.com/posts').then(data=>{
				this.allBlogs = data.data;
				this.listBlogs = this.allBlogs.slice(0,this.pageCount);
				this.loadStatus = false;
			})
		}
	}
</script>

<style scoped>
.load{ position: fixed; top: 0; left: 0; right: 0; bottom: 0; }
h1{ text-align: center; padding: 20px 0; background-color: #CC0001; color: #fff; font-family: "SumSun" }
.lists{ max-width: 900px; margin: 30px auto; box-sizing: border-box; }
.item{ padding: 20px; margin: 20px; background-color: #f8f8f8; border-radius: 6px; cursor: pointer; }
.item strong{ display: block; margin-bottom: 15px; font-size: 18px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.item p{ color: #999; line-height: 1.8; }
.item, .item strong, .item p{ transition: all .5s ease-out; }
.item:hover{ background-color: rgba(204,0,1,0.5); }
.item:hover strong, .item:hover p{ color: #fff !important; }
.page_btns{ text-align: center; margin-bottom: 50px; }
</style>