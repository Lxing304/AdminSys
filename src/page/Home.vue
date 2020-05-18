<template>
    <div>
        <dead-top></dead-top>
		<section class="data_section">
			<header class="section_title">数据统计</header>
			<el-row :gutter="20" style="margin-bottom: 10px;">
                <el-col :span="4"><div class="data_list today_head"><span class="data_num head">当日数据：</span></div></el-col>
				<el-col :span="4"><div class="data_list"><span class="data_num">{{12}}</span> 新增用户</div></el-col>
				<el-col :span="4"><div class="data_list"><span class="data_num">{{1200}}</span> 新增订单</div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">{{11}}</span> 新增管理员</div></el-col>
			</el-row>
            <el-row :gutter="20">
                <el-col :span="4"><div class="data_list all_head"><span class="data_num head">总数据：</span></div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">{{123331}}</span> 注册用户</div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">{{123233}}</span> 订单</div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">{{12300}}</span> 管理员</div></el-col>
            </el-row>
		</section>
        <ChartOfDayUser></ChartOfDayUser>
    </div>
</template>
<script>
 import deadTop from '../components/HeaderTit'
 import ChartOfDayUser from '../components/ChartOfDayUser'
export default {
   components:{
       deadTop,
       ChartOfDayUser
   }
    
}
</script>
<style lang="less">
    .data_section{
		padding: 20px;
		margin-bottom: 40px;
		.section_title{
			text-align: center;
			font-size: 30px;
			margin-bottom: 10px;
		}
		.data_list{
			text-align: center;
			font-size: 14px;
			color: #666;
            border-radius: 6px;
            background: #E5E9F2;
            .data_num{
                color: #333;
                font-size: 26px;

            }
            .head{
                border-radius: 6px;
                font-size: 22px;
                padding: 4px 0;
                color: #fff;
                display: inline-block;
            }
        }
        .today_head{
            background: #FF9800;
        }
        .all_head{
            background: #20A0FF;
        }
        .wan{
            .sc{
                font-size: 16px;
                color: #333;       
            }
         }   
    } 
      
</style>