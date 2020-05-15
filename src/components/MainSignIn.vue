<template>
    <div>
        <img alt="Vue logo" src="../assets/logo.png">
        <div class="main-sign-form">
            <el-input v-model="account" placeholder="请输入账号" class="sign-el-input"></el-input>
            <el-input v-model="password" placeholder="请输入密码" class="sign-el-input"></el-input>
            <el-button  @click="SignInClick">Sign In</el-button>
            <el-button  @click="SignUpClick">Sign Up</el-button>
        </div>
    </div>
</template>



<script>
export default {
    data() {
        return {
            account:'1319975665',
            password:'xing123456'
        }
    },
    methods:{
        SignInClick:function(){               
            if (this.$store.state.accountnum==this.$data.account&& this.$store.state.password==this.$data.password) {
                 this.$store.commit("userSignIn",{ userAccount:this.$store.state.accountnum,userPassword:this.$store.state.password});
                 alert(this.$store.state.users.userAccount);
                 this.$router.push('Manage');
            }else{
                 alert("你的密码错误了！")
            }
           
        },
        SignUpClick:function(){
            alert("你点击注册按钮了！")
        }
    }
}
</script>
<style >
    .sign-el-input{
        
        margin: 10px auto;
        color: red;
    }
    .main-sign-form{
        width: 300px;
        margin: 0px auto;
    }
</style>