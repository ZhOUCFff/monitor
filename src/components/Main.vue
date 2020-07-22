<template>
  <div class="main">
    <!-- 左边 -->
    <div class="left ml-10">
      <slot name="left"></slot>
    </div>
    <!-- 中间 -->
    <div class="center">
      <slot name="center"></slot>
    </div>
    <!-- 右边 -->
    <div class="right mr-10">
      <slot name="right"></slot>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'Main'
}
</script>
 
<style lang='scss' scoped>
.main {
  display: flex;
  .left,
  .right {
    width: 26%;
    // flex: 3;
    border-radius: 0.125rem;
    background-color: rgba(0, 0, 0, 0.17);
  }

  .center {
    position: relative;
    width: 48%;
    // flex: 5;
  }
}
</style>