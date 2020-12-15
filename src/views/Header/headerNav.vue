<template>
  <div>
    <el-row>
      <el-col :span="3"><img src="@/assets/img/cloud-music1.png" alt="" style="height:60px;float:left;"></el-col>
      <el-col :span="2" class="arrowIcon">
          <i class="el-icon-arrow-left circle" style="color:#FFFFFF;"></i>
          <i class="el-icon-arrow-right circle" style="color:#FFFFFF;"></i>
      </el-col>
      <el-col :span="3">
        <el-input
            placeholder="搜索"
            v-model="inputVal">
            <template #prefix>
              <i class="el-input__icon el-icon-search"></i>
            </template>
          </el-input>
      </el-col>
      <el-col :span="1"><i class="el-icon-microphone" style="color:#FFFFFF;"></i></el-col>
      <el-col :span="9" class="el-col-transparent"></el-col>
      <el-col :span="6">
        <div class="head">
          <el-avatar :size="30" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" style="cursor: pointer"></el-avatar>
          <div class="user">{{userName}}<i class="el-icon-arrow-down" style="color:#FFFFFF;"></i></div>
          <i class="el-icon-setting" style="color:#FFFFFF;"></i>
          <i class="iconfont icon-elben-clothes-copy" style="color:#FFFFFF;"></i>
          <i class="iconfont icon-elben-envelope-copy" style="color:#FFFFFF;">
            <div class="iconfontAfter">99+</div>
          </i>
          
          <i class="iconfont icon-elben-shrink-copy" style="color:#FFFFFF;"></i>
        </div> 
      </el-col>
    </el-row>  
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  setup() {
    let inputVal = ref('');
    let userName = ref('Elben');
    return {
      inputVal,
      userName
    }
  }
}
</script>

<style scoped>
  /deep/ .el-input__inner {
    border-radius: 60px;   
    background-color: #e13e3e;
    color: #FFFFFF;
    border:none; 
  } 
  .head{
    display:flex;
    justify-content: space-around;
    align-items: center;
  }
  .el-col-transparent{
    border:1px solid transparent;
  }
  .icon-elben-envelope-copy{
    position: relative;
  }
  .iconfontAfter{
    position: absolute;
    bottom: 50%;
    right: 0;
    margin-right: -25px;
    width: 30px;
    height: 14px;
    border-radius: 5px;
    background-color: #FFFFFF;
    color: #e13e3e;
    font-size: 12px;
    text-align: center;
    line-height: 14px;
  }
  i{
    cursor: pointer;
  }
</style>