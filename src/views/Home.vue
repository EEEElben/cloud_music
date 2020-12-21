<template>
  <div class="home">
    <el-container style="height:100%">
      <el-header>
        <header-nav></header-nav>
      </el-header>
      <el-container style="height:calc(100vh - 140px">
        <el-aside width="200px">
          <aside-left></aside-left> 
        </el-aside>
        <el-main>
            <main-page></main-page>
        </el-main>
      </el-container>
      <el-footer style="height:80px;">
        <player></player>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import headerNav from './Header/headerNav';
import asideLeft from './main/asideLeft'
import mainPage from './main/mainPage'
import player from './footer/player'
export default {
  components:{
    headerNav,
    asideLeft,
    mainPage,
    player
  },
}
</script>

<style lang="scss"> 
  html,body,#app,.el-container,.home{
    height: 100%;
  }
  .home{
    min-height: calc(100% - 60px - 80px - 450px);
    min-width:1000px;
  }
  .el-header {
    background-color: #ec4141;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-footer {
    @extend .el-header;
    background-color: #f6f6f8;
    height: 80px !important;
    line-height: 80px;
  }
  .el-main {
    background-color: #FFFFFF;
    color: #333;
    text-align: center;
    min-width: 1250px;
    max-width: 100%;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-slider__bar{
    background: #ec4141 !important;
  }
  .el-slider__button{

      width: 10px !important;
      height: 10px !important;
      background: #ec4141 !important;
      border: none !important;
  }
</style>
