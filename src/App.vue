<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import debounce from './utils/debounce'
export default {
  name: 'App',
  data() {
    return {}
  },
  methods: {},
  mounted() {
    const resizeDebounce = debounce(() => {
      this.$bus.$emit('resize')
    }, 20)
    window.addEventListener('resize', () => {
      resizeDebounce()
    })
  }
}
</script>

<style lang="scss">
body {
  background: url('./assets/img/bg-min.png') no-repeat center center;
  background-size: 100% 100%;
}
#app {
  min-height: 100vh;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 0.3s;
}
</style>
