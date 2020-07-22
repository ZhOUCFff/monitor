<template>
  <div class="cd-box">
    <Header>
      <div class="safe-days">
        安全天数:
        <span class="ff-num">252&nbsp;</span>天
      </div>
    </Header>
    <Main>
      <div slot="left" class="px-20">
        <div class="emergency-resources">
          <div class="pt-20 fs-22">应急资源</div>
          <ul class="d-flex f-warp py-10">
            <li
              class="emergency-resources-item d-flex ai-center pt-10 pb-10"
              v-for="(item, i) in emergencyResources"
              :key="i"
            >
              <i
                class="emergency-resources-item-icon mr-8"
                :style="{backgroundImage:'url('+ require('../../assets/img/'+item.icon+'.png') +')'}"
              ></i>
              <div>
                <div class="fs-18">{{item.name}}</div>
                <div class="ff-num fs-20 pl-5" style="color:#11defe">{{item.value}}</div>
              </div>
            </li>
          </ul>
        </div>
        <div class="emergency-personnel">
          <div class="pt-20 fs-22">应急人员</div>
          <div class="emergency-person d-flex ff-yahei my-20">
            <div class="flex-1 d-flex ai-center">
              <div class="avatar mr-10"></div>
              <div>
                <div>管委会领导</div>
                <div style="color:#0fc1df">范长江</div>
              </div>
            </div>
            <div class="flex-1 d-flex ai-center">
              <div class="avatar mr-10"></div>
              <div>
                <div>值班领导</div>
                <div style="color:#0fc1df">彭万里</div>
              </div>
            </div>
          </div>
          <table class="emergency-list ff-yahei w-100">
            <thead>
              <tr>
                <td style="width:30%">单位</td>
                <td style="width:20%">值班人</td>
                <td style="width:30%">电话</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,i) in EmergencyPersonnel" :key="i">
                <td>{{item.company}}</td>
                <td>{{item.name}}</td>
                <td>{{item.tel}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <div class="pt-20 fs-22">天气情况</div>
          <ul class="d-flex jc-between mt-10">
            <li class="text-align-center ff-yahei">
              <div>今天</div>
              <div class="fs-12">2020-07-01</div>
              <div class="weather-icon_1">
                <i></i>
              </div>
              <div class="ff-num fs-18" style="color:#17dcfa">21~28</div>
              <div style="color:#17dcfa">晴</div>
              <div style="color:#17dcfa">南风</div>
            </li>
            <li class="text-align-center ff-yahei">
              <div>今天</div>
              <div class="fs-12">2020-07-01</div>
              <div class="weather-icon_2">
                <i></i>
              </div>
              <div class="ff-num fs-18" style="color:#17dcfa">20~26</div>
              <div style="color:#17dcfa">小雨</div>
              <div style="color:#17dcfa">东风风</div>
            </li>
            <li class="text-align-center ff-yahei">
              <div>今天</div>
              <div class="fs-12">2020-07-01</div>
              <div class="weather-icon_3">
                <i></i>
              </div>
              <div class="ff-num fs-18" style="color:#17dcfa">18~25</div>
              <div style="color:#17dcfa">大雨</div>
              <div style="color:#17dcfa">南风</div>
            </li>
          </ul>
        </div>
      </div>
      <div slot="center">
        <div class="message"></div>
        <div class="map-container">
          <div class="point_1">
            <div class="point_1_content"></div>
          </div>
          <div class="point_2">
            <div class="point_2_content-container">
              <div class="point_2_content"></div>
            </div>
          </div>
          <!-- <div class="wave">
            <div class="map position-relative">
              <div class="point_1">
                <div class="point_1_content"></div>
              </div>
              <div class="point_2">
                <div class="point_2_content-container">
                  <div class="point_2_content"></div>
                </div>
              </div>
            </div>
            <div class="w1"></div>
            <div class="w2"></div>
            <div class="w3"></div>
            <div class="w4"></div>
            <div class="w5"></div>
            <div class="w6"></div>
            <div class="w7"></div>
            <div class="w8"></div>
          </div>-->
        </div>

        <!-- 跳转组件 -->
        <div class="d-flex jc-center mt-20">
          <Skip />
        </div>
      </div>
      <div slot="right" class="px-20">
        <div>
          <div class="pt-20 fs-22">重点区域实时监控视频</div>
          <!-- <div class="monitor"></div> -->
          <div class="search d-flex">
            <input
              class="search-input"
              type="text"
              maxlength="100"
              placeholder="请在此输入设备号，实名，身份证，或人像"
            />
            <i class="search-icon"></i>
          </div>
          <div class="monitor-1"></div>
          <div class="monitor-2"></div>
          <div class="monitor-3"></div>
        </div>
      </div>
    </Main>
  </div>
</template>
 
<script>
import Header from '../../components/Header'
import Main from '../../components/Main'
import DataList from '../../components/DataList'
import Skip from '../../components/Skip'

export default {
  name: 'CommandDispatch',
  components: {
    Header,
    Main,
    DataList,
    Skip
  },
  data() {
    return {
      emergencyResources: [
        {
          name: '医院',
          value: 4,
          icon: 'hospital'
        },
        {
          name: '车辆',
          value: 12,
          icon: 'car'
        },
        {
          name: '救援队',
          value: 27,
          icon: 'rescue'
        },
        {
          name: '消防',
          value: 27,
          icon: 'fire_fighting'
        },
        {
          name: '预案库',
          value: 13,
          icon: 'plan_library'
        },
        {
          name: '专家',
          value: 17,
          icon: 'expert'
        }
      ],
      EmergencyPersonnel: [
        {
          name: '甘铁生',
          company: '景区管委会',
          tel: '0730-3395777'
        },
        {
          name: '马继祖',
          company: '景区管委会',
          tel: '0730-4438011'
        },
        {
          name: '宗敬先',
          company: '景区管委会',
          tel: '0730-8727300'
        },
        {
          name: '谭平山',
          company: '景区管委会',
          tel: '0730-8727300'
        }
      ],
      skipTimer: null
    }
  },
  mounted() {
    this.skipTimer = setTimeout(() => {
      this.$router.push('/operation_monitoring')
    }, 18000)
  },
  destroyed() {
    this.skipTimer && clearTimeout(this.skipTimer)
  }
}
</script>

<style lang="scss" scoped>
.safe-days {
  position: absolute;
  top: 0.25rem;
  left: 0.375rem;
  span {
    font-size: 0.4rem;
    color: #11defe;
  }
}

.message {
  position: absolute;
  top: 0.3125rem;
  left: 50%;
  transform: translate(-50%, 0);
  width: 8.325rem;
  height: 0.5375rem;
  background: url('../../assets/img/msg.png') no-repeat center 0;
  background-size: 100% 100%;
}

.cd-box {
  min-height: 100vh;
  background: url('../../assets/img/command_dispatch-bg-min.png') no-repeat
    center 0;
  background-size: 100% auto;
}
.emergency-resources {
  position: relative;
  &::after {
    content: '';
    display: block;
    width: 85%;
    height: 1px;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    background-color: #1a4e88;
  }
  .emergency-resources-item {
    width: 33.3%;
    .emergency-resources-item-icon {
      width: 30px;
      height: 30px;
      background-repeat: no-repeat;
      background-position: 0 0;
      background-size: 100% 100%;
    }
  }
}

.emergency-person {
  .avatar {
    width: 70px;
    height: 70px;
    background-color: red;
    background: url('../../assets/img/avatar_1.png') no-repeat 0 0;
    background-size: 100% 100%;
  }
}

.emergency-list {
  thead {
    td {
      height: 30px;
      padding-left: 0.25rem;
      background-color: #10253d;
    }
  }
  tbody {
    td {
      height: 45px;
      padding-left: 0.25rem;
      border-bottom: 1px solid #0a2858;
    }
  }
}

.weather-icon_1 {
  display: inline-block;
  width: 0.8625rem;
  height: 0.5875rem;
  background: url('../../assets/img/sunny.png') no-repeat 0 0;
  background-size: 100% auto;
}

.weather-icon_2 {
  display: inline-block;
  width: 0.8625rem;
  height: 0.5875rem;
  background: url('../../assets/img/light_rain.png') no-repeat 0 0.0625rem;
  background-size: 100% auto;
}

.weather-icon_3 {
  display: inline-block;
  width: 0.8625rem;
  height: 0.5875rem;
  background: url('../../assets/img/heavy_rain.png') no-repeat 0 0.0625rem;
  background-size: 100% auto;
}

.monitor-1 {
  width: 100%;
  height: 225px;
  margin-bottom: 0.1875rem;
  border-radius: 0.0625rem;
  background: url('../../assets/img/monitor-1.jpg') no-repeat center center;
  background-size: 100% 100%;
}

.monitor-2 {
  width: 100%;
  height: 225px;
  margin-bottom: 0.1875rem;
  border-radius: 0.0625rem;
  background: url('../../assets/img/monitor-2.jpg') no-repeat center center;
  background-size: 100% 100%;
}

.monitor-3 {
  width: 100%;
  height: 225px;
  margin-bottom: 0.1875rem;
  border-radius: 0.0625rem;
  background: url('../../assets/img/monitor-3.jpg') no-repeat center center;
  background-size: 100% 100%;
}

.search {
  // position: absolute;
  // left: 0.625rem;
  // top: 0.2125rem;
  width: 5rem;
  height: 0.5rem;
  margin: 0.175rem 0;
  border-radius: 0.25rem;
  background-color: rgba(255, 255, 255, 0.11);
  overflow: hidden;
  .search-input {
    width: 4.375rem;
    padding-left: 0.25rem;
    background-color: transparent;
    color: #ffffff;
    &::placeholder {
      color: #fff;
    }
  }
  .search-icon {
    display: inline-block;
    width: 0.625rem;
    height: 100%;
    background: url('../../assets/img/search.png') no-repeat center center;
    background-size: 50% auto;
  }
}

// .wave {
//   position: relative;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
//   width: 90%;
//   height: 8.5rem;
//   .w2 {
//     -webkit-animation-delay: 1s !important;
//   }
//   .w3 {
//     -webkit-animation-delay: 2s !important;
//   }
//   .w4 {
//     -webkit-animation-delay: 3s !important;
//   }
//   .w5 {
//     -webkit-animation-delay: 4s !important;
//   }
//   .w6 {
//     -webkit-animation-delay: 5s !important;
//   }
//   .w7 {
//     -webkit-animation-delay: 6s !important;
//   }
//   .w8 {
//     -webkit-animation-delay: 7s !important;
//   }

//   .map {
//     position: absolute;
//     z-index: 9;
//     width: 100%;
//     height: 100%;
//     background: url('../../assets/img/command_map-min.png') no-repeat center
//       center;
//     background-size: auto 100%;
//   }
// }

// @-webkit-keyframes opac {
//   from {
//     opacity: 1;
//     width: 0;
//     height: 0;
//     top: 50%;
//     left: 50%;
//   }

//   to {
//     opacity: 0;
//     width: 100%;
//     height: 100%;
//     top: 0;
//     left: 0;
//   }
// }

// .wave div[class^='w'] {
//   border: 0.0375rem dotted #fff;
//   position: absolute;
//   border-radius: 50%;
//   opacity: 0;
//   -webkit-animation: opac 7s infinite;
// }

.map-container {
  position: relative;
  width: 100%;
  height: 650px;
  margin-top: 1.225rem;
}

.point_1 {
  position: absolute;
  top: 2.8rem;
  left: 4.6625rem;
  width: 0.375rem;
  height: 0.625rem;
  cursor: pointer;
}

.point_1_content {
  position: absolute;
  top: -0.55rem;
  left: 0.175rem;
  width: 0;
  height: 1.375rem;
  background: url('../../assets/img/point_1.png') no-repeat 0 0;
  background-size: 100% 100%;
  transition: all 0.3s;
}

.point_1:hover .point_1_content {
  width: 3.525rem;
}

.point_2 {
  position: absolute;
  top: 4.625rem;
  left: 5.525rem;
  width: 0.375rem;
  height: 0.625rem;
  cursor: pointer;
}

.point_2_content-container {
  position: absolute;
  top: -0.2125rem;
  left: -2.95rem;
  width: 3.125rem;
  height: 1.375rem;
}

.point_2_content {
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 100%;
  background: url('../../assets/img/point_2.png') no-repeat 0 0;
  background-size: 100% 100%;
  transition: all 0.3s;
}

.point_2:hover .point_2_content {
  width: 3.125rem;
}
</style>