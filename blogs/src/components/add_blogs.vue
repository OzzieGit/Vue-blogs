<template>
  <div class="addBlogs">
    <Top></Top>
    <form v-loading="sendStatus" element-loading-text="发布中">
      <strong>博客标题</strong>
      <el-input type="text" v-model="blog.title"></el-input>
      <strong>博客内容</strong>
      <el-input type="textarea" resize="none" v-model="blog.content"></el-input>
      <div class="blog_type">
        <strong>技术类型</strong>
        <el-checkbox-group :min="1" v-model="blog.types">
          <el-checkbox v-for="(item, index) in blogTypes" :key="index" :label="item" v-model="blog.types">{{ item }}</el-checkbox>
        </el-checkbox-group>
      </div>
      <strong class="author">作者</strong>
      <el-select class="author_select" v-model="blog.author">
        <el-option v-for="(item, index) in blogAuthors" :value="item" :key="index">{{ item }}</el-option>
      </el-select>
      <el-button class="send" type="primary" @click.prevent="send">发布</el-button>
    </form>
  </div>
</template>

<script>
  import Top from "@/components/top"
  export default {
    name: 'addBlogs',
    components:{
      Top
    },
    data () {
      return {
        msg: 'addBlogs',
        blog:{
          title:"",
          content:"",
          types:["Vue.js"],
          author:"Ozzie"
        },
        blogTypes:["Vue.js","Node.js","Jquery.js","React.js","Angular.js","其他"],
        blogAuthors:['Ozzie','Tom','Jarry'],
        sendStatus:false
      }
    },
    methods:{
      send(){
        if(this.blog.title == ""){
          this.$message({
            message:'请输入博客标题',
            type:'error',
            duration:1000
          });
        }else if(this.blog.content == ""){
          this.$message({
            message:'请输入博客内容',
            type:'error',
            duration:1000
          });
        }else{
          this.sendStatus = true;
          this.$http.post('http://jsonplaceholder.typicode.com/posts',{
            userId:1,
            title:this.blog.title,
            body:this.blog.content
          }).then(data=>{
            this.sendStatus = false;
            this.blog = {
              title:"",
              content:"",
              types:["Vue.js"],
              author:"张三"
            }
            this.$message({
              message:'发布成功',
              type:'success',
              duration:2000
            });
          })
        }
      }
    }
  }
</script>

<style scoped>
form{ max-width: 500px; width: 90%; margin: 30px auto 0; padding: 10px 30px 30px; box-shadow: 0 0 10px 1px rgba(0,0,0,0.1); border-radius: 6px; color: #999; box-sizing: border-box; }
form strong{ display: block; margin: 20px 0 15px; font-weight: 100; color: #333; font-size: 16px; }
form .author{ margin-top: 5px; }
form .author_select{ width: 100%; user-select: none; }
.send{ width: 100%; background-color: #CC0001; border-color: #CC0001; margin-top: 30px; }
</style>