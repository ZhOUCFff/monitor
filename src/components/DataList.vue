<template>
  <div>
    <ul class="d-flex jc-between">
      <li class="d-flex ai-center jc-center list-item" v-for="(item, i) in data" :key="i">
        <i
          class="icon mr-5"
          :style="{backgroundImage: 'url('+ require('../assets/img/'+item.icon+'.png') +')' }"
        ></i>
        <div style="line-height:0.375rem">
          <span>{{item.text}}</span>
          <br />
          <span class="ff-num fs-42" style="color:#0fcbeb">{{item.value | thousands}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
 
<script>
export default {
  name: 'DataList',
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  filters: {
    thousands(value) {
      return Math.ceil(value)
        .toString()
        .replace(/\d{1,3}(?=(\d{3})+$)/g, function(value) {
          return value + ','
        })
    }
  }
}
</script>
 
<style scoped>
.list-item {
  width: 2.075rem;
  height: 0.975rem;
  background: url('../assets/img/data-list-item-bg.png') no-repeat 0 0;
  background-size: 100% 100%;
}
.icon {
  width: 0.625rem;
  height: 0.625rem;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 100% 100%;
}
</style>