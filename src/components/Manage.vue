<template>
    <div>
        <el-row>
            <el-col :span="4">
                <el-menu  class=" heigth-100" :default-active="defaultActive" theme="dark" router>
                <el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>
                <el-submenu index='2'>
                    <template slot="title">基本信息</template>

                    <el-menu-item index="userInfo">用户列表</el-menu-item>
                    <!-- <el-menu-item>个人信息</el-menu-item>
                    <el-menu-item>基本资料</el-menu-item> -->
                </el-submenu>
                 <el-submenu index="3">
                    <template slot="title">接口管理</template>



                    <!-- <el-menu-item >拥有接口</el-menu-item>
                    <el-menu-item>权限维护</el-menu-item> -->
                </el-submenu>
            </el-menu> 
            </el-col>
            <el-col :span="20">
                <router-view></router-view>
            </el-col>
        </el-row>
        
            
            
    
    </div>
</template>
<script>
  export default {
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
    }
</script>
<style>
    .heigth-100{
        width: 200px;
        height: 800px;
        background-color: #ff0463;
    }
</style>
