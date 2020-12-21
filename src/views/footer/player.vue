<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="leftpart">
          <div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2476144346,714064027&fm=26&gp=0.jpg" alt=""></div>
          <div class="test">
            <div class="songName">药水歌<i class="el-icon-star-off"></i></div>
            <div class="singer">药水哥</div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="midTop"></div>
        <div></div>
      </el-col>
      <el-col :span="4" class="el-col-transparent">
        <div>
          <div></div>
          <div>
            <el-slider v-model="musicVal" :format-tooltip="formatTooltip"></el-slider>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="rightpart">
          <div class="tone">标准</div>
          <i class="el-icon-service"></i>
          <div style="display:flex;justify-content:center;align-items:center">
            <i class="el-icon-service" style="margin-right:5px"></i>
            <el-slider v-model="value" style="color:red"></el-slider>
          </div>
          <i class="el-icon-service"></i>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { toRefs, reactive } from 'vue'
export default {
  setup() {
    const data = reactive({
      value:100,
      musicVal:100,
      formatTooltip:(musicVal) => {
        return musicVal / 60;
      }
    })
    const list = toRefs(data)
    return { ...list }
  }
}
</script>

<style lang="scss" scoped>
 .bg-purple {
    background: #d3dce6;
  }
  .leftpart{
    display:flex;
    text-align: left;
    margin: 11px 0;
    img{
      width: 58px;
      height: 58px;
      border-radius: 3px;
    }
  }
  .el-row,.el-col{
    height: 80px !important;
    overflow: hidden;
  }
  .el-col-transparent{
    border:1px solid transparent;
  }
  .test{
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    height: 58px;
    .songName{
      height:38px;
      font-size: 16px;
      line-height: 38px;
      i{
        margin-left: 5px;
      }
    }
    .singer{
      font-size: 12px;
      height: 20px;
      line-height: 20px;
    }
  }
  .rightpart{
    width: 100%;
    height: 50px;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .tone{
      width: 30px;
      height: 15px;
      border:1px solid #000000;
      margin-left: 5px;
      font-size: 12px;
      line-height: 15px;
    }
  }
  .el-slider{
    width: 60px;
  }
  .midTop{
    width: 100%;
    height: 60%;
  }
</style>