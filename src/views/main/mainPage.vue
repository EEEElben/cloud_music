<template>
  <div>
    <el-row type="flex" class="row-bg">
      <el-col :span="2" v-for="(item,index) in menuList" :key="index"  @click="chooseItem(index)" 
              :class="active==index?'isActive':''">{{item}}</el-col>
    </el-row>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default { 

  setup(props,context){
    const router = useRouter();
    const data = reactive({
      active:0,
      menuList:['个性推荐','歌单','主播电台','排行榜','歌手','最新音乐'],
      chooseItem: (index) => {
        data.active = index;
        router.push("/home/songList");
      },      
    })
    const resList = toRefs(data);
    return { ...resList }
  }
}
</script>

<style scoped lang="scss">
  .el-row {
    cursor: pointer;
    font-size: 18px;
  }
  .el-col-2 {
    width: auto;
    margin: 0 20px;
  }
  .isActive {
    position: relative;
    font-weight: 700;
    font-size: 20px;
    &:after {
      content:"";
      position: absolute;
      bottom: 0;
      left:50%;
      transform:translateX(-50%);
      width: 80%;
      height: 3px;
      background: #ec4141;
      margin-bottom: -8px;
      border-radius: 3px;
    }
  }
  .container{
    margin-top: 10px;
    width: 100%;
    padding: 0 10px;
  }
</style>