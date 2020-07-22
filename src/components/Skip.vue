<template>
  <div>
    <ul class="skip d-flex fs-18" style="color:#2967a9">
      <li
        class="skip-item px-30"
        :class="{active: $route.path === item.path}"
        v-for="(item, i) in skipList"
        :key="i"
        @click="skipItemClick(item.path)"
      >{{item.text}}</li>
    </ul>
  </div>
</template>
 
<script>
export default {
  name: "Skip",
  data() {
    return {
      currentSkipIndex: 0,
      skipList: [
        {
          text: '运行监测',
          path: '/operation_monitoring'
        },
        {
          text: '决策分析',
          path: '/strategic_analysis'
        },
        {
          text: '指挥调度',
          path: '/command_dispatch'
        }
      ],
    }
  },
  methods: {
    skipItemClick(path) {
      if (this.$route.path === path) return
      this.$router.push(path)
    }
  }
}
</script>
 
<style lang='scss' scoped>
.skip {
  padding-top: 0.45rem;
  .skip-item {
    position: relative;
    cursor: pointer;
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: -0.45rem;
      left: 50%;
      transform: translate(-50%, 0);
      width: 0.425rem;
      height: 0.425rem;
      border-radius: 50%;
      background: url("../assets/img/skip-dot.png") no-repeat center center;
      background-size: 100% 100%;
    }

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: -0.25rem;
      left: 0;
      width: 100%;
      height: 0.025rem;
      background-color: #123f6d;
    }

    &:first-child {
      &::before {
        left: 50%;
        width: 50%;
      }
    }

    &:last-child {
      &::before {
        width: 50%;
      }
    }

    &.active {
      color: #10daff !important;
      font-size: 0.275rem;
      &::after {
        background-image: url("../assets/img/skip-active.png");
      }
    }
  }
}
</style>