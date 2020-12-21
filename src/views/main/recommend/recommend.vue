<template>
  <div>
    <swiper @sliderClick="sliderClick" :list='swiperList' :width='1300' :height='244' :arrow='false'></swiper>
    <div class="navTag">推荐歌单<i class="el-icon-arrow-right"></i></div>
    <div class="songList">
      <div v-for="(item,index) in songList" :key="index" class="listItem">
        <img :src="item.src">
        <div class="text">{{item.content}}</div>
      </div>
    </div>
    <div class="navTag">独家放送<i class="el-icon-arrow-right"></i></div>
  </div>
</template>

<script>
  import swiper from '@/components/swiper'
  import {
    reactive,
    toRefs,
    onMounted
  } from 'vue'
  export default {
    components: {
      swiper
    },
    emits: ['itemClick'],
    setup(props, context) {
      const data = reactive({
        songList: [{
            src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2476144346,714064027&fm=26&gp=0.jpg",
            content: "你好"
          },
          {
            src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2476144346,714064027&fm=26&gp=0.jpg",
            content: "你好"
          },
          {
            src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2476144346,714064027&fm=26&gp=0.jpg",
            content: "你好"
          },
          {
            src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2476144346,714064027&fm=26&gp=0.jpg",
            content: "你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好"
          },
          {
            src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2476144346,714064027&fm=26&gp=0.jpg",
            content: "你好"
          },
          {
            src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2476144346,714064027&fm=26&gp=0.jpg",
            content: "你好"
          },
          {
            src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2476144346,714064027&fm=26&gp=0.jpg",
            content: "你好"
          },
          {
            src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2476144346,714064027&fm=26&gp=0.jpg",
            content: "你好"
          },
          {
            src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2476144346,714064027&fm=26&gp=0.jpg",
            content: "你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好"
          },
          {
            src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2476144346,714064027&fm=26&gp=0.jpg",
            content: "你好"
          }
        ],
        swiperList: [
          'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1539367743,1839014179&fm=15&gp=0.jpg',
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1830996896,1790652234&fm=15&gp=0.jpg',
          'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2769656211,3374936140&fm=26&gp=0.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607933232453&di=f84b7b199747ee40fe3f5fff4faa64e8&imgtype=0&src=http%3A%2F%2Fhbimg.huabanimg.com%2F07c58d28a43c0a47681dd7cc83c08b5f0285452e60d44-4F7ZVv_fw658'
        ],
        sliderClick: (i) => {
          console.log(i)
        }
      })
      const resList = toRefs(data);
      return {
        ...resList
      }
    }
  }
</script>

<style lang="scss" scoped>
  .navTag {
    text-align: left;
    margin: 0.625rem 0 0 0.625rem;
    font-weight: 700;
    font-size: 1.25rem;
    color: #373737;

    &:hover {
      color: #000000;
      cursor: pointer;
    }
  }

  .bg-purple {
    margin-left: 1.25rem;
    background: #d3dce6;
  }

  .songList {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    .listItem {
      width: 20%;

      img {
        width: 12.5rem;
        height: 12.5rem;
        margin: 0.625rem 1.25rem 0.625rem 0.625rem;
      }

      .text {
        height: 3rem;
        width: 12.5rem;
        text-align: left;
        margin: 0 0 0.625rem 1.25rem;
        color: #373737;
        font-size: 1rem;
        line-height: 1.5rem;
        word-break: break-all;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
</style>