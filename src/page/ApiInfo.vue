<template>
    <div>
        <head-top></head-top>
        
        <el-row>
            <el-col :span="12">
                <div class=" apiInfo-w-div" ></div>
            </el-col>
            <el-col :span="12">
                <div class=" apiInfo-w-div" ></div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import headTop from '../components/HeaderTit.vue'
export default {
    components:{
        headTop
    }
}
</script>
<style>
    .apiInfo-w-div{
        width: 100%;
        height: 300px;
        background-color:rgb(40, 218, 40);
    }
</style>