<template>
  	<div class="home">
        <head-top></head-top>
        <home-left> </home-left>
       <div class="content"><router-view ></router-view></div>
       <el-alert
          :title="alertText"
          type="error" v-if="showAlert" :closable="false">
        </el-alert> 
    </div>
</template>

<script>
import headTop from '../../components/header/head'
import homeLeft from '../../components/left/left'
export default {
    data(){
        return{
            showAlert:false,
            alertText:"",
        }
    },

	mounted(){
        
        
    },

    components:{
        headTop,
        homeLeft,
    },

    computed:{
        
    },

    methods:{

    },
}

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    .home{
        position: absolute;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        background: white;
        .content{
            position: absolute;
            left: 15.6%;
            top:60px;
            right: 1.2%;;
            bottom: 0;
            overflow: scroll;
        }
        .el-alert{
          position: absolute;
          width: auto;
          font-size: 16px;
          border-radius: 5px;
          left: 50%;
          top: 50%;
          transform:translate(-50%,-50%);
          -webkit-transform:translate(-50%,-50%);
          -moz-transform:translate(-50%,-50%);
          -o-transform:translate(-50%,-50%);
        }
    }

</style>
