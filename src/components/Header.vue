<template>
  <div class="header">
    <slot></slot>
    <div class="title">太平山智慧旅游大数据平台</div>
    <ul class="head-info">
      <li>
        <i class="weather-icon mr-8"></i>
        <span>
          小雨
          <br />北风三级
        </span>
      </li>
      <li>
        <span>
          山顶：26
          <br />山脚：16
        </span>
      </li>
      <li>
        <span>
          {{week}}
          <br />
          {{date}}
        </span>
      </li>
      <li>
        <span>
          风向:东北风
          <br />
          时间：{{time}}
        </span>
      </li>
    </ul>
  </div>
</template>
 
<script>
export default {
  name: 'Header',
  data() {
    return {
      week: '',
      date: '',
      time: '',
      timer: null
    }
  },
  methods: {
    showTime() {
      const time = new Date()
      const year = time.getFullYear()
      const month = time.getMonth() + 1
      const day = time.getDate()
      const week = time.getDay()
      const hour = time.getHours()
      const minute = time.getMinutes()
      const second = time.getSeconds()
      const weeks = [
        '星期日',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六'
      ]
      this.week = weeks[week]
      this.time = `${hour >= 10 ? hour : '0' + hour}:${
        minute >= 10 ? minute : '0' + minute
      }:${second >= 10 ? second : '0' + second}`
      this.date = `${year}/${month}/${day}`
    }
  },
  created() {
    // 生成时间
    this.showTime()
    this.timer = setInterval(() => {
      this.showTime()
    }, 1000)
  },
  destroyed() {
    clearInterval(this.timer)
  }
}
</script>
 
<style lang="scss" scoped>
.header {
  position: relative;
  width: 100%;
  height: 1.1875rem;
  background: url('../assets/img/header-bg.png') no-repeat -0.15rem 0.875rem;
  background-size: 100% auto;
  .title {
    padding-top: 0.3125rem;
    text-align: center;
    font-size: 0.4rem;
  }
  .head-info {
    display: flex;
    position: absolute;
    top: 0.0625rem;
    right: 1.5rem;
    height: 0.9625rem;
    li {
      display: flex;
      align-items: center;
      padding: 0 0.225rem;
      background: url('../assets/img/head-border.png') no-repeat right center;
    }
    li:last-child {
      background: none;
    }
    .weather-icon {
      width: 0.6125rem;
      height: 0.4375rem;
      background: url('../assets/img/light_rain.png') no-repeat 0 0.0375rem;
      background-size: auto 100%;
    }
  }
}
</style>