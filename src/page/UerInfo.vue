<template>
    <div>
        <head-top></head-top>
        
        <el-row >
            <el-col :span="12" :offset="6"  style=" margin-top: 200px;  min-width: 600px;">
                <el-collapse v-model="activeNames" :accordion="false" @change="collapseClick">
                    <el-collapse-item >
                       
                            <div  slot="title" style="height:48px; width:100%; text-align: left; " >
                                <span class="tit-span" >资料 </span>
                                <span> 修改您的头像、昵称、性别等。</span>    
                            </div>    
                        <div class="w-div">
                            <template>
                                <div >
                                    <el-upload
                                        class="avatar-uploader"
                                        action="https://jsonplaceholder.typicode.com/posts/"
                                        :show-file-list="false"
                                        :on-success="handleAvatarSuccess"
                                        :before-upload="beforeAvatarUpload">
                                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload> 
                                </div>
                            </template>
                            <label  >展示名称</label><br>
                            <label > 其他成员将会看到您的用户昵称，绝大多数的用户会将昵称设置为自己的姓名，方便团队协作中辨认身份。</label><br>
                            昵称：<el-input v-model="nickname"  style="width:300px; margin: 10px auto;" label="昵称："  placeholder="请输入昵称"></el-input><br>
                            性别： <el-select v-model="sex"  style="width:300px; margin: 10px auto;"  placeholder="请选择性别">
                                <el-option v-for="item in sexs"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.id">
                                </el-option>
                            </el-select><br>
                            <el-button  @click="butClick">保存</el-button>     
                        </div>
                        <!-- content -->
                    </el-collapse-item>
                     <el-collapse-item>
                         <div  slot="title" style="height:48px; width:100%; text-align: left; " >
                                <span class="tit-span" >修改密码 </span>
                                <span> 修改您的登录密码。</span>    
                            </div>
                        <div class="w-div">
                            <br>
                           旧的密码:<el-input v-model="newPassword"  style="width:300px; margin: 10px auto;" placeholder="请输入原密码"></el-input><br>
                           新的密码:<el-input v-model="newPassword"  style="width:300px; margin: 10px auto;" placeholder="请输入新密码"></el-input><br>
                           确认密码:<el-input v-model="newPassword"  style="width:300px; margin: 10px auto;" placeholder="请确认密码"></el-input><br>
                           <el-button  @click="butClick">保存</el-button>
                           
                        </div>
                        <!-- content -->
                    </el-collapse-item>
                     <el-collapse-item>
                        <div  slot="title" style="height:48px; width:100%; text-align: left; " >
                            <span class="tit-span" >设置邮箱 </span>
                            <span> 您可以使用邮箱进行登录、接收项目通知邮件、找回密码等操作。</span>    
                        </div>
                        <div class="w-div">
                            <br>
                                邮箱号:<el-input v-model="newPassword"  style="width:300px; margin: 10px auto;" placeholder="请输入邮箱号"></el-input><br>
                                验证码:<el-input v-model="newPassword"  style="width:300px; margin: 10px auto;" placeholder="请输入图片验证码"></el-input><br>
                                邮箱验证码:<el-input v-model="newPassword"  style="width:200px; margin: 10px auto;" placeholder="请输入验证码"></el-input>
                                <el-button type="primary" icon="el-icon-edit">获取验证码</el-button><br>
                           <el-button  @click="butClick">保存</el-button>
                        </div>
                        <!-- content -->
                    </el-collapse-item>
                     <el-collapse-item>
                        <div  slot="title" style="height:48px; width:100%; text-align: left; " >
                            <span class="tit-span" >设置手机 </span>
                            <span>您可以使用手机号进行登录、接收项目通知短信、找回密码等操作。</span>    
                        </div>
                        <div class="w-div">
                            <br>
                                手机号:<el-input v-model="newPassword"  style="width:300px; margin: 10px auto;" placeholder="请输入邮箱号"></el-input><br>
                                图片验证码:<el-input v-model="newPassword"  style="width:200px; margin: 10px auto;" placeholder="请输入图片验证码"></el-input>
                                <el-button type="primary" icon="el-icon-edit">获取验证码</el-button><br>
                                短信验证码:<el-input v-model="newPassword"  style="width:200px; margin: 10px auto;" placeholder="请输入验证码"></el-input>
                                <el-button type="primary" icon="el-icon-edit">获取验证码</el-button><br>
                           <el-button  @click="butClick">保存</el-button>
                        </div>
                        <!-- content -->
                    </el-collapse-item>
                </el-collapse>
            </el-col> 
        </el-row>
    </div>
</template>
<script>
import headTop from '../components/HeaderTit.vue'
export default {
    data() {
      return {
        activeNames: ['1'],
        nickname :"",
        sex:"",
        sexs:[{id :1,name:"未知" },{id :2,name:"男" },{id :3,name:"女" }],
        oldPassword:"",
        newPassword:"",
        imageUrl: ""
      };
    },
    methods:{
        collapseClick:function(){
            //alert("nidianji l !")
        },
        errorHandler:function(){
            //图片加载错误时huidiao
        },
        butClick:function(){

        },
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
             return isJPG && isLt2M;
      }
    },
    components:{
        headTop
    }
}
</script>
<style>
    .w-div{
        width: 100%;
        height: auto;
        
    }
    .elRow-main{
        background-color: rgb(248, 241, 242);
    }
    .tit-span{
        line-height: 25px;
        font-size: 25px;
        font-weight: 800;
    }
     .tit-span{
        line-height: 25px;
        font-size: 16px;
       
    }
     .el-input-tit{
        width:300px; 
        margin: 10px auto;
    }



.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>