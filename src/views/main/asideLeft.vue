<template>
  <div class="container" >
    <el-menu :default-openeds="['1']"> 
      <el-menu-item v-for="(item,index) in mainMusic" :key="index" :index="`1-${index}`" >{{item}}</el-menu-item>
      <el-menu-item index="1-6" class="mineMusic" disabled >我的音乐</el-menu-item>
      <el-menu-item v-for="(item,index) in mineMusic" :key="index" :index="`2-${index}`">{{item}}</el-menu-item>
       <!-- <el-submenu index="1">
        <template #title>创建的歌单</template>
        <el-menu-item-group>
          <template #title>创建的歌单</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项2</el-menu-item>
        </el-menu-item-group> 
      </el-submenu>  -->
    </el-menu>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  setup() {
    const list = reactive({
      mainMusic:['发现音乐','视频','朋友','直播','私人FM'],
      mineMusic:['本地音乐','下载管理','我的音乐云盘','我的收藏','我的电台']
    })
    const resList = toRefs(list)
    return {...resList};
  }
}
</script>

<style scoped lang='scss'>
  .container{
    background-color: #FFFFFF;
    height: calc(100vh - 60px - 80px);
  }
  .el-menu-item{
    height: 42px;
    line-height: 42px;
    font-size: 18px;
    text-align: left;
    border: none;
    &:first-child{
      margin-top: 15px;
    }
    &:hover{
      background-color: #f6f6f7;
    }
  }
  .is-active{
    background-color: #f6f6f7 !important;
    font-weight: 700;
    font-size: 20px;
    color:#000000 !important;
  }
  .mineMusic{
    font-size: 16px  !important;
    color: #999999 !important;
    cursor:default !important;
    font-weight: 300 !important;
  }
  .slider-container {
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 10px 0;
    position: relative;
  }
</style>