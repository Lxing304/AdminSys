<template>
    <div  class=" header_container">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/manage'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item,index) in $route.meta"  :key="index"> {{item}}</el-breadcrumb-item>
        </el-breadcrumb> 
    </div>
</template>


<script>
export default {
    
}
</script>
<style >
    .header_container{
		height: 60px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 20px;
	}
</style>