<template>
  <div class="car">
    <div class="parking-lot-name">
      <span>集散中心停车场</span>
    </div>
    <div class="pr-30 position-relative">
      <div class="free">
        <div class="free-precent"></div>
      </div>
      <span class="value ff-num fs-16">219</span>
    </div>
    <div class="pr-30 position-relative">
      <div class="busy">
        <div class="busy-precent"></div>
      </div>
      <span class="value ff-num fs-16">300</span>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "Car"
}
</script>
 
<style lang="scss" scoped>
.car {
  .parking-lot-name {
    span {
      display: inline-block;
      padding: 0.0625rem 0.125rem;
      background-color: rgba(10, 58, 127, 0.33);
    }
  }
  .free {
    height: 0.625rem;
    background: url("../../../assets/img/bar-car.png") repeat-x 0 center;
    background-size: auto 40%;
    .free-precent {
      width: 50%;
      height: 100%;
      background: url("../../../assets/img/bar-car-percent.png") repeat-x 0
        center;
      background-size: auto 40%;
    }
  }
  .busy {
    height: 0.625rem;
    background: url("../../../assets/img/bar-car.png") repeat-x 0 center;
    background-size: auto 40%;
    .busy-precent {
      width: 60%;
      height: 100%;
      background: url("../../../assets/img/bar-car-percent.png") repeat-x 0
        center;
      background-size: auto 40%;
    }
  }
  .value {
    position: absolute;
    right: 0.0625rem;
    top: 50%;
    transform: translate(0, -50%);
  }
}
</style>