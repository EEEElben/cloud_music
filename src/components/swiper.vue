<template>
  <div class="slider-container" ref='slider'
    :style="sliderStyle"
    @mouseover="pause()"
    @mouseout="play()">
    <div class="slider-content" :class="mask ? 'mask' : ''">
      <div class="slider" v-for="(item, index) in list"
        :key="index"
        :class="setClass(index)"
        @click="onClick(index)" :style="setBGImg(item)">
      </div>
      <i v-show="arrow" class="el-icon-arrow-left" @click="prev()"></i>
      <i v-show="arrow" class="el-icon-arrow-right" @click="next()"></i>
    </div>
    <div class="dots" v-if="dots">
      <span v-for="(item, index) in list" :key="index"
        :style="setActiveDot(index)"
        @mouseover="currentIndex = index"></span>
    </div>
  </div>
</template>

<script>
import { reactive, computed, onMounted, ref, toRefs } from 'vue'
export default {
  name:'swiper',
  props: {
      //图片列表
      list: {
      required: true,
      type: Array,
      default () {
        return []
      }
      },
      //整体宽高
      width: {
        type: Number
      },
      height: {
        type: Number
      },
      //图片尺寸
      imgType: {
        type: String,
        default: 'percentage'
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      mask: {
        type: Boolean,
        default: true
      },
      //进入页面几秒后开始轮播
      interval: {
        type: Number,
        default: 4000
      },
      dots: {
        type: Boolean,
        default: true
      },
      arrow: {
        type: Boolean,
        default: true
      },
      color: {
        type: String,
        default: 'rgb(248, 85, 85)'
      }
  },
  emits: ['sliderClick'],
  setup(props,context) {
    const slider = ref(null)
    const data = reactive({
      currentIndex: 0,
      sliderDomList: [],
      timer: null,
      setClass: (i) => {
        let next = data.currentIndex === (props.list.length - 1) ? 0 : data.currentIndex + 1;
        let prev = data.currentIndex === 0 ? props.list.length - 1 : data.currentIndex - 1;
        switch (i) {
          case data.currentIndex:
            return 'active';
          case next:
            return 'next';
          case prev:
            return 'prev';
          default:
            return '';
        }
      },
      setBGImg: (src) => {
        return {
          backgroundImage: `url(${src})`
        }
      },
      setActiveDot: (index) => {
        return index === data.currentIndex ? {
          backgroundColor: props.color
        } : {
          backgroundColor: '#ccc'
        }
      },
      play: () => {
        data.pause();
        if (props.autoPlay) {
          data.timer = setInterval(()=>{
            data.next();
          }, props.interval)
        }
      },
      pause: () => {
        clearInterval(data.timer);
      },
      next: () => {
        data.currentIndex = ++data.currentIndex % props.list.length;
      },
      prev: () => {
        data.currentIndex = data.currentIndex === 0 ? props.list.length - 1 : data.currentIndex - 1;
      },
      onClick: (i) => {
        if (i === data.currentIndex){
          context.emit('sliderClick', i);
        } else {
          let currentClickClassName = data.sliderDomList[i].className.split(' ')[1]
          console.log(currentClickClassName)
          if (currentClickClassName === 'next') {
            data.next()
          } else {
            data.prev()
          }
        }
      }
    })
    onMounted(() => {
      data.sliderDomList =  document.querySelectorAll('div.slider');
      data.play();
    })
    const sliderStyle = computed(() => {
      return {
          width: props.width ? props.width + 'px' : '100%',
          height: props.height ? props.height + 'px' : '100%',
          perspective: props.width + 'px',
          backgroundSize: props.imgType == 'percentage' ? '100% 100%' : props.imgType
        }
    })
    const list = toRefs(data)
    return { 
      slider,
      sliderStyle,
      ...list 
      }
  }
}
</script>

<style lang="scss" scoped>
  .slider-container {
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 10px 0;
    position: relative;
  }
  .slider-content {
    position: relative;
    width: 100%;
    height: calc(100% - 20px);
    left: 0%;
    top: 0%;
    margin: 0px;
    padding: 0px;
    background-size: inherit;
    .slider {
      position: absolute;
      margin: 0;
      padding: 0;
      top: 0;
      left: 50%;
      width: 45%;
      height: 100%;
      transition: 500ms all ease-in-out;
      border-radius: 10px;
      background-color: #fff;
      background-repeat: no-repeat;
      background-position: center;
      background-size: inherit;
      transform: translate3d(-50%,0,-80px);
      z-index: 1;
      &:before{
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0);
        transition-delay: 100ms!important;
        transition: all 500ms;
        cursor: pointer;
      }
      &.active{
        transform: translate3d(-50%, 0, 0);
        z-index: 20;
      }   
      &.prev {
        transform: translate3d(-95%, 0, -200px);
        z-index: 19;
      }  
      &.next {
        transform: translate3d(-5%, 0, -200px);
        z-index: 18;
      }   
    }
    i {
      width: 12.5%;
      position: absolute;
      top: 40%;
      font-size: 22px;
      color: rgba(255, 255, 255, 0.5);
      text-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
      cursor: pointer;
      z-index: 21;
      &:first-child{
        left: 0;
      } 
      &:last-child{
        right: 0;
      }     
    }
    &:hover {
      i {
        color: rgba(255, 255, 255, 0.8);
        display: block;
      }    
    }
    &.mask {
      .slider {
        &.prev, &.next{
           &:before {
              background-color: rgba(0, 0, 0, 0.50);
              border-radius: 10px;
           }
        }
      }
    }
  }

  .dots {
    width: 100%;
    height: 20px;
    span { 
      display: inline-block;
      width: 20px;
      height: 2px;
      margin: 1px 3px;
      cursor: pointer;
    }
  }
</style>