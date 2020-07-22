<template>
  <div>
    <Header />
    <Main>
      <!-- 左边 -->
      <div slot="left">
        <!-- 游客年龄 -->
        <div class="tourist-age">
          <div class="pt-20 pl-20 fs-22">游客年龄统计</div>
          <div class="tourist-age-charts" ref="touristAgeCharts"></div>
        </div>
        <!-- 男女游客比例 -->
        <div class="gender-distribution">
          <div class="pt-20 pl-20 fs-22">男女游客比例</div>
          <div class="gender-distribution-charts">
            <div class="position-relative w-50">
              <span class="men-icon t-ellipsis fs-18">
                <img src="../../assets/img/men.png" alt /> 男性
              </span>
              <div class="men" ref="menCharts"></div>
            </div>

            <div class="position-relative w-50">
              <span class="women-icon t-ellipsis fs-18">
                <img src="../../assets/img/women.png" alt /> 女性
              </span>
              <div class="men" ref="womenCharts"></div>
            </div>
          </div>
        </div>
        <!-- 停车场 -->
        <div class="parking-lot">
          <div class="pt-20 pl-20 fs-22">停车场</div>

          <div class="parking-lot-charts pt-20 pl-20 pr-20">
            <swiper :auto-update="true" :auto-destroy="true" :options="swiperOption" ref="swiper">
              <swiper-slide>
                <div class="w-100">
                  <Car />
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="w-100">
                  <Car />
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="w-100">
                  <Car />
                </div>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
        </div>
      </div>
      <!-- 中间 -->
      <div slot="center">
        <DataList class="mt-30 ml-30 mr-30" :data="dataList" />
        <div class="map-ccontainer px-10">
          <div class="map" ref="mapCharts"></div>
        </div>
        <!-- 跳转组件 -->
        <div class="d-flex jc-center mt-10">
          <Skip />
        </div>
      </div>
      <!-- 右边 -->
      <div slot="right" class="fs-22 pl-20">
        <div class="passenger-flow">
          <div class="pt-30 pl-20">辖区实时客流趋势</div>
          <div class="passenger-flow-charts" ref="passengerFlowCharts"></div>
        </div>
        <div class="traffic">
          <div class="pt-30 pl-20">主要监控点拥堵TOP10</div>
          <div class="traffic-charts" ref="trafficCharts"></div>
        </div>
        <div class="air">
          <div class="pt-20 pl-20">空气指数</div>
          <div class="air-info pt-30 pb-30 pr-20 d-flex jc-between">
            <div class="d-flex" v-for="(item,i) in airIndex" :key="i">
              <i
                class="air-icon mr-3"
                :style="{backgroundImage: 'url('+ require('../../assets/img/'+item.icon+'.png') +')' }"
              ></i>
              <div class="d-flex f-column jc-end">
                <div class="fs-14 t-ellipsis">{{item.text}}</div>
                <div class="ff-num fs-24 t-ellipsis" style="color:#18e6fa">
                  {{item.value}}
                  <span class="fs-12">{{item.unit}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="spa">
          <div class="pt-20 pl-20">温泉指数</div>
          <div class="spa-info pt-30 pb-30 pr-20 d-flex jc-between">
            <div class="d-flex" v-for="(item,i) in spaIndex" :key="i">
              <i
                class="spa-icon"
                :style="{backgroundImage: 'url('+ require('../../assets/img/'+item.icon+'.png') +')' }"
              ></i>
              <div class="d-flex f-column jc-end">
                <div class="fs-14 t-ellipsis">{{item.text}}</div>
                <div class="ff-num fs-24 t-ellipsis" style="color:#18e6fa">
                  {{item.value}}
                  <span class="fs-12">{{item.unit}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>-->
      </div>
    </Main>
  </div>
</template>
 
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import Header from '../../components/Header'
import Main from '../../components/Main'
import Car from './components/Car'
import DataList from '../../components/DataList'
import Skip from '../../components/Skip'

export default {
  name: 'OperationMonitoring',
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true // 允许点击小圆点跳转
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false // 手动切换之后继续自动轮播
        },
        loop: true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper
      },
      touristAgeCharts: null,
      touristAgeChartsData: [
        {
          name: '儿童',
          value: 189654
        },
        {
          name: '少年',
          value: 103696
        },
        {
          name: '中年',
          value: 38956
        },
        {
          name: '老年',
          value: 126987
        }
      ],
      menCharts: null,
      menChartsData: {
        value: 50,
        ringColor: [
          {
            offset: 0,
            color: '#0ed9ef' // 0% 处的颜色
          },
          {
            offset: 1,
            color: '#01e6a6' // 100% 处的颜色
          }
        ]
      },
      womenCharts: null,
      trafficCharts: null,
      trafficChartsData: {
        yAxisData: [
          '小东江',
          '兜率岛',
          '东江湖游客中心',
          '龙景峡谷',
          '东江漂流'
        ],
        data: [362, 854, 350, 971, 831]
      },
      mapCharts: null,
      mapChartsData: null,
      passengerFlowCharts: null,
      passengerFlowChartsData: [
        0,
        30,
        20,
        60,
        100,
        108,
        50,
        70,
        45,
        50,
        30,
        0,
        46,
        24,
        7,
        5,
        24,
        25,
        56,
        21,
        52,
        90,
        80,
        70
      ],
      // 空气指数
      airIndex: [
        {
          text: '山顶负氧离子',
          value: '91000',
          unit: '个/㎡',
          icon: 'top_negative_oxygen_ions'
        },
        {
          text: '山脚负氧离子',
          value: '1510',
          unit: '个/㎡',
          icon: 'foot_negative_oxygen_ions'
        },
        {
          text: 'PM2.5',
          value: '86',
          unit: 'ug/㎡',
          icon: 'pm2.5'
        }
      ],
      // 温泉指数
      spaIndex: [
        {
          text: '水温',
          value: '25',
          unit: '',
          icon: 'water_temp'
        },
        {
          text: '硒含量',
          value: '0.015',
          unit: 'mg/l',
          icon: 'SE'
        },
        {
          text: 'PH值',
          value: '7.5',
          unit: '',
          icon: 'PH'
        },
        {
          text: '偏硅酸',
          value: '96',
          unit: 'mg/l',
          icon: 'metasilicate'
        }
      ],
      dataList: [
        {
          text: '景区出园数',
          value: '1097',
          icon: 'enter_num'
        },
        {
          text: '景区入园数',
          value: '2300',
          icon: 'export_num'
        },
        {
          text: '景区在园数',
          value: '1203',
          icon: 'in_num'
        },
        {
          text: '景区售票张数',
          value: '1512',
          icon: 'income'
        }
      ],
      skipTimer: null,
      changeDataTimer: null
    }
  },
  components: {
    Header,
    Main,
    DataList,
    Skip,
    Car,
    swiper,
    swiperSlide
  },
  methods: {
    // 生成游客年龄统计图
    touristAgeChartsInit() {
      this.touristAgeCharts = echarts.init(this.$refs.touristAgeCharts)
      const colorList = [
        '#d3e600',
        '#00e6a4',
        '#11dfff ',
        '#004a83',
        '#FD866A',
        '#9E87FF',
        '#58D5FF'
      ]
      const option = {
        backgroundColor: 'transparent',
        title: {
          text: '',
          x: 'center',
          y: 'center',
          textStyle: {
            fontSize: 20
          }
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['35%', '50%'],
            clockwise: true,
            avoidLabelOverlap: true,
            hoverOffset: 6,
            itemStyle: {
              normal: {
                color: function(params) {
                  return colorList[params.dataIndex]
                },
                label: {
                  show: true,
                  position: 'outside',
                  color: '#ddd',
                  rich: {
                    a: {
                      fontSize: 14
                      // color: "#fff"
                    },
                    b: {
                      color: '#fff',
                      fontSize: 24,
                      // fontWeight: 'bold',
                      fontFamily: 'font-number'
                    }
                  },
                  formatter: params => {
                    let total = 0
                    this.touristAgeChartsData.forEach(item => {
                      total += item.value
                    })
                    const percent = ((params.value / total) * 100).toFixed(0)
                    return `{a| ${params.name} (${percent}%)}\n{b| ${params.value}}`
                  }
                }
              }
            },
            labelLine: {
              normal: {
                length: 15,
                length2: 15,
                lineStyle: {
                  width: 2,
                  color: '#00e6a4'
                }
              }
            },
            data: this.touristAgeChartsData
          }
        ]
      }
      this.touristAgeCharts.setOption(option)
    },
    // 生成男女游客比例统计图
    genderDistributionChartsInit() {
      this.menCharts = echarts.init(this.$refs.menCharts)
      this.womenCharts = echarts.init(this.$refs.womenCharts)
      // 男游客数据
      const menChartsData = {
        value: 51,
        ringColor: [
          {
            offset: 0,
            color: '#0ed9ef' // 0% 处的颜色
          },
          {
            offset: 1,
            color: '#01e6a6' // 100% 处的颜色
          }
        ]
      }

      // 男游客图表配置项
      const menOption = {
        backgroundColor: 'transparent',
        title: {
          text: this.menChartsData.value + '%',
          x: 'center',
          y: 'center',
          textStyle: {
            fontWeight: 'normal',
            color: '#fff',
            fontSize: '32',
            fontFamily: 'font-number'
          }
        },
        color: ['#282c40'],
        legend: {
          show: false,
          data: []
        },

        series: [
          {
            name: 'men',
            type: 'pie',
            clockWise: true,
            radius: ['50%', '60%'],
            center: ['50%', '50%'],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            hoverAnimation: false,
            data: [
              {
                value: this.menChartsData.value,
                name: '',
                itemStyle: {
                  normal: {
                    color: {
                      // 完成的圆环的颜色
                      colorStops: this.menChartsData.ringColor
                    },
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              },
              {
                name: '',
                value: 100 - this.menChartsData.value
              }
            ]
          }
        ]
      }
      // 女游客图表配置项
      const womenOption = {
        backgroundColor: 'transparent',
        title: {
          text: 100 - this.menChartsData.value + '%',
          x: 'center',
          y: 'center',
          textStyle: {
            fontWeight: 'normal',
            color: '#fff',
            fontSize: '32',
            fontFamily: 'font-number'
          }
        },
        color: ['#282c40'],
        legend: {
          show: false,
          data: []
        },

        series: [
          {
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['50%', '60%'],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            hoverAnimation: false,
            data: [
              {
                value: 100 - this.menChartsData.value,
                name: '',
                itemStyle: {
                  normal: {
                    color: {
                      // 完成的圆环的颜色
                      colorStops: this.menChartsData.ringColor
                    },
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              },
              {
                name: '',
                value: this.menChartsData.value
              }
            ]
          }
        ]
      }
      this.menCharts.setOption(menOption)
      this.womenCharts.setOption(womenOption)
    },
    // 生成拥堵监控图表
    trafficChartsInit() {
      this.trafficCharts = echarts.init(this.$refs.trafficCharts)
      const option = {
        grid: {
          left: '5%',
          right: '5%',
          bottom: '0%',
          top: '5%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'none'
          },
          formatter: function(params) {
            return (
              params[0].name +
              '<br/>' +
              "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
              params[0].seriesName +
              ' : ' +
              ((params[0].value / 3368) * 100).toFixed(0) +
              '%<br/>'
            )
          }
        },
        backgroundColor: 'transparent',
        xAxis: {
          show: false,
          type: 'value'
        },
        yAxis: [
          {
            type: 'category',
            inverse: true,
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            data: ['祈财堂', '大雄宝殿', '松越塔', '灵源轩', '钟楼']
          },
          {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
              textStyle: {
                color: '#ffffff',
                fontSize: '12'
              },
              formatter: function(value) {
                return value.toLocaleString()
              }
            },
            data: this.trafficChartsData.data
          }
        ],
        series: [
          {
            name: '拥堵值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
              normal: {
                barBorderRadius: 30,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: '#0098fb'
                  },
                  {
                    offset: 1,
                    color: '#00f299'
                  }
                ])
              }
            },
            barWidth: 20,
            data: this.trafficChartsData.data
          },
          {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: [1000, 1000, 1000, 1000, 1000],
            itemStyle: {
              normal: {
                color: 'rgba(24,31,68,.5)',
                barBorderRadius: 30
              }
            }
          }
        ]
      }
      this.trafficCharts.setOption(option)
    },
    // 生成地图
    mapInit() {
      this.mapCharts = echarts.init(this.$refs.mapCharts)

      var chinaGeoCoordMap = {
        黑龙江: [127.9688, 45.368],
        上海: [121.4648, 31.2891],
        东莞: [113.8953, 22.901],
        东营: [118.7073, 37.5513],
        中山: [113.4229, 22.478],
        临汾: [111.4783, 36.1615],
        临沂: [118.3118, 35.2936],
        丹东: [124.541, 40.4242],
        丽水: [119.5642, 28.1854],
        乌鲁木齐: [87.9236, 43.5883],
        佛山: [112.8955, 23.1097],
        保定: [115.0488, 39.0948],
        兰州: [103.5901, 36.3043],
        包头: [110.3467, 41.4899],
        北京: [116.4551, 40.2539],
        北海: [109.314, 21.6211],
        南京: [118.8062, 31.9208],
        南宁: [108.479, 23.1152],
        南昌: [116.0046, 28.6633],
        南通: [121.1023, 32.1625],
        厦门: [118.1689, 24.6478],
        台州: [121.1353, 28.6688],
        合肥: [117.29, 32.0581],
        呼和浩特: [111.4124, 40.4901],
        咸阳: [108.4131, 34.8706],
        哈尔滨: [127.9688, 45.368],
        唐山: [118.4766, 39.6826],
        嘉兴: [120.9155, 30.6354],
        大同: [113.7854, 39.8035],
        大连: [122.2229, 39.4409],
        天津: [117.4219, 39.4189],
        太原: [112.3352, 37.9413],
        威海: [121.9482, 37.1393],
        宁波: [121.5967, 29.6466],
        宝鸡: [107.1826, 34.3433],
        宿迁: [118.5535, 33.7775],
        常州: [119.4543, 31.5582],
        广州: [113.5107, 23.2196],
        廊坊: [116.521, 39.0509],
        延安: [109.1052, 36.4252],
        张家口: [115.1477, 40.8527],
        徐州: [117.5208, 34.3268],
        德州: [116.6858, 37.2107],
        惠州: [114.6204, 23.1647],
        成都: [103.9526, 30.7617],
        扬州: [119.4653, 32.8162],
        承德: [117.5757, 41.4075],
        拉萨: [91.1865, 30.1465],
        无锡: [120.3442, 31.5527],
        日照: [119.2786, 35.5023],
        昆明: [102.9199, 25.4663],
        杭州: [119.5313, 29.8773],
        枣庄: [117.323, 34.8926],
        柳州: [109.3799, 24.9774],
        株洲: [113.5327, 27.0319],
        武汉: [114.3896, 30.6628],
        汕头: [117.1692, 23.3405],
        江门: [112.6318, 22.1484],
        沈阳: [123.1238, 42.1216],
        沧州: [116.8286, 38.2104],
        河源: [114.917, 23.9722],
        泉州: [118.3228, 25.1147],
        泰安: [117.0264, 36.0516],
        泰州: [120.0586, 32.5525],
        济南: [117.1582, 36.8701],
        济宁: [116.8286, 35.3375],
        海口: [110.3893, 19.8516],
        淄博: [118.0371, 36.6064],
        淮安: [118.927, 33.4039],
        深圳: [114.5435, 22.5439],
        清远: [112.9175, 24.3292],
        温州: [120.498, 27.8119],
        渭南: [109.7864, 35.0299],
        湖州: [119.8608, 30.7782],
        湘潭: [112.5439, 27.7075],
        滨州: [117.8174, 37.4963],
        潍坊: [119.0918, 36.524],
        烟台: [120.7397, 37.5128],
        玉溪: [101.9312, 23.8898],
        珠海: [113.7305, 22.1155],
        盐城: [120.2234, 33.5577],
        盘锦: [121.9482, 41.0449],
        石家庄: [114.4995, 38.1006],
        福州: [119.4543, 25.9222],
        秦皇岛: [119.2126, 40.0232],
        绍兴: [120.564, 29.7565],
        聊城: [115.9167, 36.4032],
        肇庆: [112.1265, 23.5822],
        舟山: [122.2559, 30.2234],
        苏州: [120.6519, 31.3989],
        莱芜: [117.6526, 36.2714],
        菏泽: [115.6201, 35.2057],
        营口: [122.4316, 40.4297],
        葫芦岛: [120.1575, 40.578],
        衡水: [115.8838, 37.7161],
        衢州: [118.6853, 28.8666],
        西宁: [101.4038, 36.8207],
        西安: [109.1162, 34.2004],
        贵阳: [106.6992, 26.7682],
        连云港: [119.1248, 34.552],
        邢台: [114.8071, 37.2821],
        邯郸: [114.4775, 36.535],
        郑州: [113.4668, 34.6234],
        鄂尔多斯: [108.9734, 39.2487],
        重庆: [107.7539, 30.1904],
        金华: [120.0037, 29.1028],
        铜川: [109.0393, 35.1947],
        银川: [106.3586, 38.1775],
        镇江: [119.4763, 31.9702],
        长春: [125.8154, 44.2584],
        长沙: [113.0823, 28.2568],
        太平山: [113.03893, 28.31173],
        长治: [112.8625, 36.4746],
        阳泉: [113.4778, 38.0951],
        青岛: [120.4651, 36.3373],
        韶关: [113.7964, 24.7028]
      }
      var chinaDatas = [
        [
          {
            name: '西安',
            value: 8
          }
        ],
        [
          {
            name: '北京',
            value: 5
          }
        ],
        [
          {
            name: '上海',
            value: 7
          }
        ],
        [
          {
            name: '广州',
            value: 6
          }
        ],
        [
          {
            name: '西宁',
            value: 5
          }
        ],
        [
          {
            name: '银川',
            value: 4
          }
        ],
        [
          {
            name: '南京',
            value: 9
          }
        ],
        [
          {
            name: '扬州',
            value: 2
          }
        ],
        [
          {
            name: '沈阳',
            value: 3
          }
        ],
        [
          {
            name: '成都',
            value: 6
          }
        ],
        [
          {
            name: '济南',
            value: 1
          }
        ],
        [
          {
            name: '深圳',
            value: 1
          }
        ]
      ]

      var convertData = function(data) {
        var res = []
        for (var i = 0; i < data.length; i++) {
          var dataItem = data[i]
          var fromCoord = chinaGeoCoordMap[dataItem[0].name]
          // var toCoord = [113.4668, 34.6234];
          // var toCoord = [113.0958, 28.3234]
          var toCoord = [113.03893, 28.31173]
          if (fromCoord && toCoord) {
            res.push([
              {
                coord: fromCoord,
                value: dataItem[0].value
              },
              {
                coord: toCoord
              }
            ])
          }
        }
        return res
      }
      var series = []
      ;[['太平山', chinaDatas]].forEach(function(item, i) {
        series.push(
          {
            type: 'lines',
            zlevel: 2,
            effect: {
              show: true,
              period: 4, //箭头指向速度，值越小速度越快
              // trailLength: 0.05, //特效尾迹长度[0,1]值越大，尾迹越长重
              trailLength: 0.01,
              color: '#fff',
              symbol: 'arrow', //箭头图标
              symbolSize: 5 //图标大小
            },
            lineStyle: {
              normal: {
                width: 1, //尾迹线条宽度
                opacity: 0.3, //尾迹线条透明度
                curveness: 0.3 //尾迹线条曲直度
              }
            },
            data: convertData(item[1])
          },
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
              //涟漪特效
              period: 3, //动画时间，值越小速度越快
              brushType: 'fill', //波纹绘制方式 stroke, fill
              scale: 3 //波纹圆环最大限制，值越大波纹越大
            },
            label: {
              normal: {
                show: true,
                position: 'right', //显示位置
                offset: [5, 0], //偏移设置
                formatter: function(params) {
                  //圆环显示文字
                  return params.data.name
                },
                fontSize: 13,
                color: '#f0f0f0'
              },
              emphasis: {
                show: true
              }
            },
            symbol: 'circle',
            symbolSize: function(val) {
              return 6 //圆环大小
            },
            itemStyle: {
              normal: {
                show: false,
                // shadowBlur: 10,
                // shadowColor: 'blue',
                color: 'red'
              }
            },
            data: item[1].map(function(dataItem) {
              return {
                name: dataItem[0].name,
                value: chinaGeoCoordMap[dataItem[0].name].concat([
                  dataItem[0].value
                ])
              }
            })
          },
          //被攻击点
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
              //涟漪特效
              period: 4, //动画时间，值越小速度越快
              brushType: 'stroke', //波纹绘制方式 stroke, fill
              scale: 4 //波纹圆环最大限制，值越大波纹越大
            },
            label: {
              normal: {
                show: true,
                position: 'right', //显示位置
                offset: [5, 0], //偏移设置
                formatter: function(params) {
                  //圆环显示文字
                  // return ''
                  return params.data.name
                },
                fontSize: 16,
                color: '#ffffff'
              },
              emphasis: {
                show: true
              }
            },
            symbol: 'circle',
            symbolSize: function(val) {
              return 8 //圆环大小
            },
            itemStyle: {
              normal: {
                show: false,
                color: '#f00'
              }
            },
            data: [
              {
                name: item[0],
                value: chinaGeoCoordMap[item[0]].concat([10])
              }
            ]
          }
        )
      })
      const option = {
        backgroundColor: 'transparent',
        tooltip: {
          trigger: 'item',
          borderColor: '#FFFFCC',
          showDelay: 0,
          hideDelay: 0,
          enterable: true,
          transitionDuration: 0,
          extraCssText: 'z-index:100',
          formatter: function(params, ticket, callback) {
            //根据业务自己拓展要显示的内容
            var res = ''
            var name = params.name
            var value = params.value[params.seriesIndex + 1]
            res =
              "<span style='color:#fff;'>" + name + '</span><br/>数据：' + value
            if (name) return res
            return ''
          }
        },
        visualMap: {
          //图例值控制
          min: 0,
          max: 10,
          calculable: true,
          show: true,
          color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
          textStyle: {
            color: '#fff'
          }
        },
        geo: {
          map: 'china',
          zoom: 1.2,
          label: {
            emphasis: {
              show: false
            }
          },
          roam: false, //是否允许缩放
          itemStyle: {
            normal: {
              // color: 'transparent', //地图背景色
              borderColor: 'rgba(147, 235, 248, 1)', //省市边界线00fcff 516a89
              borderWidth: 1,
              areaColor: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                  }
                ],
                globalCoord: false // 缺省为 false
              }
            },
            shadowColor: 'rgba(128, 217, 248, 1)',
            shadowOffsetX: -2,
            shadowOffsetY: 2,
            shadowBlur: 10,
            emphasis: {
              // color: 'rgba(37, 43, 61, .5)' //悬浮背景
              areaColor: '#389BB7',
              borderWidth: 0
            }
          }
        },
        series: series
      }

      this.mapCharts.setOption(option)
    },
    passengerFlowChartsInit() {
      this.passengerFlowCharts = echarts.init(this.$refs.passengerFlowCharts)
      const colorList = ['#03e2b0', '#73DDFF', '#fe9a8b', '#F56948', '#03e2b0']
      const option = {
        backgroundColor: 'transparent',
        title: {
          text: '',
          textStyle: {
            fontSize: 12,
            fontWeight: 400
          },
          left: 'center',
          top: '5%'
        },
        legend: {
          show: false,
          icon: 'circle',
          top: '5%',
          right: '5%',
          itemWidth: 6,
          itemGap: 20,
          textStyle: {
            color: '#556677'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            label: {
              show: true,
              backgroundColor: '#fff',
              color: '#556677',
              borderColor: 'rgba(0,0,0,0)',
              shadowColor: 'rgba(0,0,0,0)',
              shadowOffsetY: 0
            },
            lineStyle: {
              width: 0
            }
          },
          backgroundColor: '#fff',
          textStyle: {
            color: '#5c6c7c'
          },
          padding: [10, 10],
          extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)'
        },
        grid: {
          top: '20%',
          left: '10%',
          right: '10%',
          bottom: '12%'
        },
        xAxis: [
          {
            type: 'category',
            data: [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              20,
              21,
              22,
              23,
              24
            ],
            axisLine: {
              lineStyle: {
                color: '#DCE2E8'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: true,
              interval: 0,
              rotate: 70,
              textStyle: {
                color: '#fff'
              },
              margin: 10
            },
            axisPointer: {
              label: {
                show: false,
                padding: [11, 5, 7],
                backgroundColor: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#fff' // 0% 处的颜色
                    },
                    {
                      offset: 0.9,
                      color: '#fff' // 0% 处的颜色
                    },
                    {
                      offset: 0.9,
                      color: '#33c0cd' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#33c0cd' // 100% 处的颜色
                    }
                  ],
                  global: false // 缺省为 false
                }
              }
            },
            boundaryGap: false
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#DCE2E8'
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            },
            splitLine: {
              show: false
            }
          },
          {
            show: false
          }
        ],
        series: [
          {
            name: '流量',
            type: 'line',
            data: this.passengerFlowChartsData,
            symbolSize: 1,
            symbol: 'circle',
            smooth: true,
            yAxisIndex: 0,
            showSymbol: false,
            markPoint: {
              data: [
                {
                  name: '',
                  type: 'max'
                }
              ]
            },
            lineStyle: {
              width: 5,
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {
                  offset: 0,
                  color: '#0fcbeb'
                },
                {
                  offset: 1,
                  color: '#00e6a4'
                }
              ])
              // shadowColor: 'rgba(158,135,255, 0.3)',
              // shadowBlur: 10,
              // shadowOffsetY: 20
            },
            itemStyle: {
              normal: {
                color: colorList[0],
                borderColor: colorList[0]
              }
            }
          }
        ]
      }
      this.passengerFlowCharts.setOption(option)
    },
    resizeCharts() {
      this.touristAgeCharts && this.touristAgeCharts.resize()
      this.menCharts && this.menCharts.resize()
      this.womenCharts && this.womenCharts.resize()
      this.trafficCharts && this.trafficCharts.resize()
      this.mapCharts && this.mapCharts.resize()
      this.passengerFlowCharts && this.passengerFlowCharts.resize()
    },
    changeData() {
      function random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min
      }
      this.changeDataTimer = setInterval(() => {
        this.dataList = this.dataList.map((item, i) => {
          if (i <= 2) {
            item.value = Number(item.value) + random(0, 5)
          } else {
            item.value = Number(item.value) + random(0, 5)
          }
          return item
        })
        this.dataList[2].value = this.dataList[1].value - this.dataList[0].value

        this.touristAgeChartsData = this.touristAgeChartsData.map(item => {
          item.value = item.value + random(0, 6)
          return item
        })
        this.touristAgeChartsInit()

        this.menChartsData.value = random(50, 60)
        this.genderDistributionChartsInit()

        this.passengerFlowChartsData = this.passengerFlowChartsData.map(
          item => {
            if (item >= 0 && item < 10) {
              return random(0, 10)
            } else if (item >= 10 && item < 20) {
              return random(10, 20)
            } else if (item >= 20 && item < 30) {
              return random(20, 30)
            } else if (item >= 30 && item < 40) {
              return random(30, 40)
            } else if (item >= 40 && item < 50) {
              return random(40, 50)
            } else if (item >= 50 && item < 60) {
              return random(50, 60)
            } else if (item >= 60 && item < 70) {
              return random(60, 70)
            } else if (item >= 70 && item < 80) {
              return random(70, 80)
            } else if (item >= 80 && item < 90) {
              return random(80, 90)
            } else if (item >= 90 && item < 100) {
              return random(90, 100)
            } else if (item >= 100 && item < 110) {
              return random(100, 110)
            } else if (item >= 110 && item < 120) {
              return random(110, 120)
            }
          }
        )
        this.passengerFlowChartsInit()

        this.trafficChartsData.data = this.trafficChartsData.data.map(item => {
          if (item >= 0 && item < 100) {
            return random(0, 100)
          } else if (item >= 100 && item < 200) {
            return random(100, 200)
          } else if (item >= 200 && item < 300) {
            return random(200, 300)
          } else if (item >= 300 && item < 400) {
            return random(300, 400)
          } else if (item >= 400 && item < 500) {
            return random(400, 500)
          } else if (item >= 500 && item < 600) {
            return random(500, 600)
          } else if (item >= 600 && item < 700) {
            return random(600, 700)
          } else if (item >= 700 && item < 800) {
            return random(700, 800)
          } else if (item >= 800 && item < 900) {
            return random(800, 900)
          } else if (item >= 900 && item < 1000) {
            return random(900, 1000)
          }
          // return random(0, 1000)
        })
        this.trafficChartsInit()
      }, 5000)
    }
  },
  mounted() {
    this.touristAgeChartsInit()
    this.genderDistributionChartsInit()
    this.trafficChartsInit()
    this.passengerFlowChartsInit()
    this.mapInit()
    window.addEventListener('resize', this.resizeCharts, true)
    this.$refs.swiper.update()
    this.changeData()
    this.skipTimer = setTimeout(() => {
      this.$router.push('/strategic_analysis')
    }, 18000)
  },
  destroyed() {
    window.removeEventListener('resize', this.resizeCharts, true)
    this.skipTimer && clearTimeout(this.skipTimer)
    this.changeDataTimer && clearInterval(this.changeDataTimer)
    this.touristAgeCharts && this.touristAgeCharts.dispose()
    this.menCharts && this.menCharts.dispose()
    this.womenCharts && this.womenCharts.dispose()
    this.trafficCharts && this.trafficCharts.dispose()
    this.mapCharts && this.mapCharts.dispose()
    this.passengerFlowCharts && this.passengerFlowCharts.dispose()
  }
}
</script>
 
<style lang="scss" scoped>
// 游客年龄
.tourist-age {
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
  .tourist-age-charts {
    width: 100%;
    height: 250px;
  }
}
// 男女比例
.gender-distribution {
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
  .gender-distribution-charts {
    display: flex;
    width: 100%;
    height: 250px;
    .men {
      width: 100%;
      height: 100%;
    }
    .women {
      width: 50%;
      height: 100%;
    }
    .men-icon,
    .women-icon {
      position: absolute;
      width: 100%;
      height: 0.2875rem;
      left: 50%;
      top: 20px;
      transform: translate(-50%, 0);
      text-align: center;
      img {
        vertical-align: middle;
        height: 100%;
      }
    }
  }
}

// 地图
.map {
  width: 100%;
  height: 650px;
}

.passenger-flow-charts {
  width: 100%;
  height: 220px;
}

// 10大拥堵点
.traffic {
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
  .traffic-charts {
    width: 100%;
    height: 300px;
  }
}
// 空气指数
.air-info {
  position: relative;
  width: 100%;
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
  .air-icon {
    width: 0.6875rem;
    height: 0.75rem;
    background-repeat: no-repeat;
    // background-position: center center;
    background-size: 100% 100%;
  }
}
// 温泉指数
.spa-info {
  position: relative;
  width: 100%;
  .spa-icon {
    width: 0.6875rem;
    height: 0.75rem;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: auto auto;
  }
}

// 轮播图圆点
.swiper-pagination {
  text-align: left;
  bottom: -5px;
}
</style>