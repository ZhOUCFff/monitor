<template>
  <div class="sa-box">
    <Header />
    <Main>
      <div slot="left">
        <div class="tourist-flow">
          <div class="pt-20 pl-20 fs-22">游客流量曲线图</div>
          <div class="tourist-flow-charts" ref="touristFlowCharts"></div>
        </div>
        <div class="order-statistics">
          <div class="pt-20 pl-20 fs-22">渠道订单统计</div>
          <div class="order-statistics-pie-charts" ref="orderStatisticsPieCharts"></div>
          <div class="order-statistics-bar-charts" ref="orderStatisticsBarCharts"></div>
        </div>
      </div>
      <div slot="center">
        <DataList class="mt-30 ml-30 mr-30" :data="dataList" />
        <div class="map-container position-relative">
          <!-- <div class="wave">
            <div class="map"></div>
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
        <div class="d-flex jc-center mt-10">
          <Skip />
        </div>
      </div>
      <div slot="right">
        <div class="sales-ranking">
          <div class="pt-20 pl-20 fs-22">客户销售排名</div>
          <div class="sales-ranking-charts" ref="salesRankingCharts"></div>
        </div>
        <div class="sales-facts">
          <div class="pt-20 pl-20 fs-22">销售实况</div>
          <div class="sales-facts-pie-charts" ref="salesFactsPieCharts"></div>
          <div class="sales-facts-bar-charts" ref="salesFactsBarCharts"></div>
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
  name: 'StrategicAnalysis',
  components: {
    Header,
    Main,
    DataList,
    Skip
  },
  data() {
    return {
      touristFlowCharts: null,
      touristFlowChartsData: {
        xAxisData: [
          '一月',
          '二月',
          '三月',
          '四月',
          '五月',
          '六月',
          '七月',
          '八月',
          '九月',
          '十月',
          '十一月',
          '十二月'
        ],
        data: [0, 30, 20, 60, 100, 108, 50, 70, 45, 50, 30, 0]
      },
      orderStatisticsPieCharts: null,
      orderStatisticsPieChartsData: [
        {
          name: '万程',
          value: 68932
        },
        {
          name: '团队',
          value: 17458
        },
        {
          name: '郴州假期',
          value: 54896
        },
        {
          name: '美团',
          value: 54869
        },
        {
          name: '驴妈妈',
          value: 54869
        },
        {
          name: '其他',
          value: 23456
        }
      ],
      orderStatisticsBarCharts: null,
      orderStatisticsBarChartsData: [
        {
          name: '精品线路一',
          type: 'bar',
          //silent: true,
          barWidth: '5',
          barGap: '100%', // Make series be overlap
          data: [
            {
              value: 400
            },
            {
              value: 50
            },
            {
              value: 220
            },
            {
              value: 300
            },
            {
              value: 310
            },
            {
              value: 320
            }
          ]
        },
        {
          name: '精品线路二',
          type: 'bar',
          //silent: true,
          barWidth: '5',
          // barGap: '-100%', // Make series be overlap
          data: [
            {
              value: 100
            },
            {
              value: 30
            },
            {
              value: 200
            },
            {
              value: 110
            },
            {
              value: 120
            },
            {
              value: 110
            }
          ]
        },
        {
          name: '精品线路三',
          type: 'bar',
          //silent: true,
          barWidth: '5',
          //barGap: '-100%', // Make series be overlap
          data: [
            {
              value: 150
            },
            {
              value: 300
            },
            {
              value: 100
            },
            {
              value: 130
            },
            {
              value: 130
            },
            {
              value: 135
            }
          ]
        },
        {
          name: '精品线路四',
          type: 'bar',
          //silent: true,
          barWidth: '5',
          //barGap: '-100%', // Make series be overlap
          data: [
            {
              value: 250
            },
            {
              value: 100
            },
            {
              value: 400
            },
            {
              value: 250
            },
            {
              value: 240
            },
            {
              value: 260
            }
          ]
        }
      ],
      salesRankingCharts: null,
      salesRankingChartsData: {
        person_times: [30, 360, 300, 250, 200, 150, 100, 150, 200, 250],
        percent: [76, 46, 82, 69, 75, 32, 72, 32, 53, 16]
      },
      salesFactsPieCharts: null,
      salesFactsPieChartsData: [
        {
          name: '散客',
          value: 15968
        },
        {
          name: '团队',
          value: 54896
        },
        {
          name: '电商',
          value: 54896
        }
      ],
      salesFactsBarCharts: null,
      salesFactsBarChartsData: [
        {
          name: '票种一',
          type: 'bar',
          //silent: true,
          barWidth: '15',
          barGap: '100%', // Make series be overlap
          data: [
            {
              value: 400
            },
            {
              value: 50
            },
            {
              value: 220
            }
          ]
        },
        {
          name: '票种二',
          type: 'bar',
          //silent: true,
          barWidth: '15',
          // barGap: '-100%', // Make series be overlap
          data: [
            {
              value: 100
            },
            {
              value: 30
            },
            {
              value: 200
            }
          ]
        },
        {
          name: '票种三',
          type: 'bar',
          //silent: true,
          barWidth: '15',
          barGap: '50%', // Make series be overlap
          data: [
            {
              value: 150
            },
            {
              value: 300
            },
            {
              value: 100
            }
          ]
        },
        {
          name: '票种四',
          type: 'bar',
          //silent: true,
          barWidth: '15',
          //barGap: '-100%', // Make series be overlap
          data: [
            {
              value: 250
            },
            {
              value: 100
            },
            {
              value: 400
            }
          ]
        }
      ],
      dataList: [
        {
          text: '本月游客数',
          value: 60026,
          icon: 'month'
        },
        {
          text: '本年游客数',
          value: 960482,
          icon: 'year'
        },
        {
          text: '今日游客数',
          value: 2272,
          icon: 'day'
        },
        {
          text: '去年同期游客',
          value: 8672,
          icon: 'jiao'
        }
      ],
      skipTimer: null,
      changeDataTimer: null
    }
  },
  methods: {
    touristFlowChartsInit() {
      this.touristFlowCharts = echarts.init(this.$refs.touristFlowCharts)
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
          top: '15%',
          left: '10%',
          right: '10%',
          bottom: '16%'
        },
        xAxis: [
          {
            type: 'category',
            data: this.touristFlowChartsData.xAxisData,
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
              textStyle: {
                color: '#fff'
              },
              margin: 15
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
            name: 'Adidas',
            type: 'line',
            data: this.touristFlowChartsData.data,
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
      this.touristFlowCharts.setOption(option)
    },
    // 生成订单统计图
    orderStatisticsPieChartsInit() {
      let total = this.orderStatisticsPieChartsData
        .reduce((prev, cur) => {
          return prev + cur.value
        }, 0)
        .toString()
        .replace(/\d{1,3}(?=(\d{3})+$)/g, function(value) {
          return value + ','
        })

      this.orderStatisticsPieCharts = echarts.init(
        this.$refs.orderStatisticsPieCharts
      )
      const colorList = [
        '#e0b610',
        '#0f9168',
        '#e0710f ',
        '#0fe0e0',
        '#31d253',
        '#0f90eb',
        '#e0b610'
      ]
      const option = {
        backgroundColor: 'transparent',
        title: {
          text: total,
          x: 'center',
          y: 'center',
          textStyle: {
            fontSize: 28,
            color: '#0fcbeb',
            fontFamily: 'font-number'
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
                    this.orderStatisticsPieChartsData.forEach(item => {
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
            data: this.orderStatisticsPieChartsData
          }
        ]
      }
      this.orderStatisticsPieCharts.setOption(option)
    },
    orderStatisticsBarChartsInit() {
      this.orderStatisticsBarCharts = echarts.init(
        this.$refs.orderStatisticsBarCharts
      )
      const option = {
        backgroundColor: '',
        color: ['#0fe0e0', '#00e6a4', '#e0b610', '#0f90eb'],
        title: {
          text: '',
          top: 21,
          left: '21',
          textStyle: {
            fontSize: 18,
            color: '#fff'
          }
        },
        tooltip: {
          //提示框组件
          trigger: 'axis', //坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。只有设置了这个参数才会出现竖直的线条
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'none' //指示器类型。
          }
          // formatter: function(params) {
          //   //提示框自定义
          //   return formatterTip(params)
          // }
        },
        animation: true,
        grid: {
          top: '67',
          left: '32',
          bottom: '15',
          right: '39',
          containLabel: true
        },
        legend: {
          show: true,
          top: 15,
          left: 20,
          // data: ['精品线路一', '精品线路二', '精品线路三', '精品线路四'],
          textStyle: {
            color: '#fff'
          }
        },
        xAxis: [
          {
            type: 'category',
            data: ['官网', '万程', '美团', '郴州假期', '驴妈妈', '其他'],
            axisTick: {
              alignWithLabel: true
            },
            nameTextStyle: {
              color: '#fff'
            },
            axisLine: {
              lineStyle: {
                color: '#174375'
              }
            },
            axisLabel: {
              rotate: 30,
              textStyle: {
                color: '#fff'
              },
              margin: 20
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            interval: 100,
            axisLabel: {
              textStyle: {
                color: '#5493d7'
              },
              formatter: '{value}'
            },
            splitLine: {
              show: false,
              lineStyle: {
                type: 'dashed',
                color: 'RGB(47,68,114)'
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#174375'
              }
            }
          }
        ],
        series: this.orderStatisticsBarChartsData
      }
      this.orderStatisticsBarCharts.setOption(option)
    },
    salesRankingChartsInit() {
      this.salesRankingCharts = echarts.init(this.$refs.salesRankingCharts)

      const myData = [
        '中信旅行社',
        '神州旅行社',
        '安泰旅行社',
        '湘中旅行社',
        '赣州国旅',
        '韶关韶之旅',
        '上海春秋国际旅行社',
        '资兴安泰旅行社',
        '资兴东江湖安泰旅行',
        '五连冠旅行社'
      ]
      // const _databeast = [30, 350, 300, 250, 200, 150, 100, 150, 200, 250]
      const _databeauty = [76, 46, 82, 69, 75, 32, 72, 32, 53, 16]
      // var databeast = {
      //   7: [30, 350, 300, 250, 200, 150, 100, 150, 200, 250]
      // }
      // var databeauty = {
      //   7: [76, 46, 82, 69, 75, 32, 72, 32, 53, 16]
      // }
      var timeLineData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

      const option = {
        baseOption: {
          backgroundColor: 'transparent',
          timeline: {
            show: false,
            axisType: 'category',
            autoPlay: false,
            currentIndex: 6,
            playInterval: 3000000,
            label: {
              normal: {
                show: false,
                interval: 'auto',
                formatter: '{value}月'
              }
            },
            data: []
          },
          title: {
            //   text:'大北京景点帅哥美女统计',
            textStyle: {
              color: '#fff',
              fontSize: 16
            }
          },
          legend: {
            data: ['人次', '比例'],
            top: 4,
            left: '3%',
            textStyle: {
              color: '#fff'
            }
          },
          grid: [
            {
              show: false,
              left: '6%',
              top: 50,
              bottom: 10,
              containLabel: true,
              width: '30%'
            },
            {
              show: false,
              left: '52%',
              top: 70,
              bottom: 10,
              width: '0%'
            },
            {
              show: false,
              right: '6%',
              top: 50,
              bottom: 10,
              containLabel: true,
              width: '30%'
            }
          ],
          xAxis: [
            {
              type: 'value',
              inverse: true,
              interval: 100,
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              position: 'top',
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#569ae2',
                  fontSize: 12
                }
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: ['transparent', '#063c77'],
                  width: '30',
                  type: 'solid'
                }
              }
            },
            {
              gridIndex: 1,
              show: false
            },
            {
              gridIndex: 2,
              interval: 20,
              type: 'value',
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              position: 'top',
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#569ae2',
                  fontSize: 12
                }
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: ['transparent', '#063c77'],
                  width: '30',
                  type: 'solid'
                }
              }
            }
          ],
          yAxis: [
            {
              type: 'category',
              inverse: true,
              position: 'right',
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false,
                margin: 8,
                textStyle: {
                  color: '#fff',
                  fontSize: 12
                }
              },
              data: myData
            },
            {
              gridIndex: 1,
              type: 'category',
              inverse: true,
              position: 'left',
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: true,
                margin: 8,
                textStyle: {
                  color: '#fff',
                  fontSize: 12
                }
              },
              data: myData.map(function(value) {
                return {
                  value: value,
                  textStyle: {
                    align: 'center'
                  }
                }
              })
            },
            {
              gridIndex: 2,
              type: 'category',
              inverse: true,
              position: 'left',
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false,
                textStyle: {
                  color: '#fff',
                  fontSize: 12
                }
              },
              data: myData
            }
          ],
          series: []
        },
        options: new Array(10).fill(null).map(() => {
          return {
            series: [
              {
                name: '人次',
                type: 'bar',
                barGap: 10,
                barWidth: 8,
                label: {
                  normal: {
                    show: false
                  },
                  emphasis: {
                    show: true,
                    position: 'left',
                    offset: [0, 0],
                    textStyle: {
                      color: '#fff',
                      fontSize: 14
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    barBorderRadius: [10, 10, 10, 10],
                    color: '#00cbbf'
                  },
                  emphasis: {
                    color: '#08C7AE'
                  }
                },
                // data: databeast[timeLineData[i]],
                data: this.salesRankingChartsData.person_times
              },

              {
                name: '比例',
                type: 'bar',
                barGap: 10,
                barWidth: 8,
                xAxisIndex: 2,
                yAxisIndex: 2,
                label: {
                  normal: {
                    show: true,
                    position: 'right',
                    color: '#fff',
                    fontFamily: 'font-number',
                    formatter(params) {
                      return params.value + '%'
                    }
                  },
                  emphasis: {
                    show: true,
                    position: 'right',
                    offset: [0, 0],
                    textStyle: {
                      color: '#fff',
                      fontSize: 14
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    barBorderRadius: [10, 10, 10, 10],
                    color: '#e0b610'
                  },
                  emphasis: {
                    color: '#e0b610'
                  }
                },

                data: this.salesRankingChartsData.percent
              }
            ]
          }
        })
      }

      // for (var i = 0; i < timeLineData.length; i++) {
      //   //  option.baseOption.timeline.data.push(timeLineData[i]);
      //   option.options.push({
      //     title: {
      //       // text: '大北京' + timeLineData[i] + '月份城区景点帅哥美女统计'
      //       text: ''
      //     },
      //     series: [
      //       {
      //         name: '人次',
      //         type: 'bar',
      //         barGap: 10,
      //         barWidth: 8,
      //         label: {
      //           normal: {
      //             show: false
      //           },
      //           emphasis: {
      //             show: true,
      //             position: 'left',
      //             offset: [0, 0],
      //             textStyle: {
      //               color: '#fff',
      //               fontSize: 14
      //             }
      //           }
      //         },
      //         itemStyle: {
      //           normal: {
      //             barBorderRadius: [10, 10, 10, 10],
      //             color: '#00cbbf'
      //           },
      //           emphasis: {
      //             color: '#08C7AE'
      //           }
      //         },
      //         // data: databeast[timeLineData[i]],
      //         data: this.salesRankingChartsData.person_times
      //       },

      //       {
      //         name: '比例',
      //         type: 'bar',
      //         barGap: 10,
      //         barWidth: 8,
      //         xAxisIndex: 2,
      //         yAxisIndex: 2,
      //         label: {
      //           normal: {
      //             show: true,
      //             position: 'right',
      //             color: '#fff',
      //             fontFamily: 'font-number',
      //             formatter(params) {
      //               return params.value + '%'
      //             }
      //           },
      //           emphasis: {
      //             show: true,
      //             position: 'right',
      //             offset: [0, 0],
      //             textStyle: {
      //               color: '#fff',
      //               fontSize: 14
      //             }
      //           }
      //         },
      //         itemStyle: {
      //           normal: {
      //             barBorderRadius: [10, 10, 10, 10],
      //             color: '#e0b610'
      //           },
      //           emphasis: {
      //             color: '#e0b610'
      //           }
      //         },

      //         data: this.salesRankingChartsData.percent
      //       }
      //     ]
      //   })
      // }

      this.salesRankingCharts.setOption(option)
    },
    salesFactsPieChartsInit() {
      this.salesFactsPieCharts = echarts.init(this.$refs.salesFactsPieCharts)
      const colorList = [
        '#0fe0e0',
        '#0f90eb',
        '#e0b610 ',
        '#FDB36A',
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
            fontSize: 20,
            color: '#0fcbeb'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['40%', '60%'],
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
                    this.salesFactsPieChartsData.forEach(item => {
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
            data: this.salesFactsPieChartsData
          }
        ]
      }
      this.salesFactsPieCharts.setOption(option)
    },
    salesFactsBarChartsInit() {
      this.salesFactsBarCharts = echarts.init(this.$refs.salesFactsBarCharts)
      const option = {
        backgroundColor: '',
        color: ['#0fe0e0', '#00e6a4', '#e0b610', '#0f90eb'],
        title: {
          text: '',
          top: 21,
          left: '21',
          textStyle: {
            fontSize: 18,
            color: '#fff'
          }
        },
        animation: true,
        grid: {
          top: '67',
          left: '32',
          bottom: '15',
          right: '39',
          containLabel: true
        },
        legend: {
          show: true,
          top: 15,
          left: 20,
          data: ['票种一', '票种二', '票种三', '票种四'],
          textStyle: {
            color: '#fff'
          }
        },
        xAxis: [
          {
            type: 'category',
            data: ['电商', '散客', '团队'],
            axisTick: {
              alignWithLabel: true
            },
            nameTextStyle: {
              color: '#fff'
            },
            axisLine: {
              lineStyle: {
                color: '#174375'
              }
            },
            axisLabel: {
              textStyle: {
                color: '#fff'
              },
              margin: 20
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            interval: 100,
            axisLabel: {
              textStyle: {
                color: '#5493d7'
              },
              formatter: '{value}'
            },
            splitLine: {
              show: false,
              lineStyle: {
                type: 'dashed',
                color: 'RGB(47,68,114)'
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#174375'
              }
            }
          }
        ],
        series: this.salesFactsBarChartsData
      }
      this.salesFactsBarCharts.setOption(option)
    },
    resizeCharts() {
      this.touristFlowCharts && this.touristFlowCharts.resize()
      this.orderStatisticsPieCharts && this.orderStatisticsPieCharts.resize()
      this.orderStatisticsBarCharts && this.orderStatisticsBarCharts.resize()
      this.salesRankingCharts && this.salesRankingCharts.resize()
      this.salesFactsPieCharts && this.salesFactsPieCharts.resize()
      this.salesFactsBarCharts && this.salesFactsBarCharts.resize()
    },
    changeData() {
      function random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min
      }
      this.changeDataTimer = setInterval(() => {
        let num = random(0, 5)
        this.dataList = this.dataList.map((item, i) => {
          item.value = item.value + num
          if (i === 3) {
            item.value = item.value + random(0, 10)
          }
          return item
        })

        this.orderStatisticsPieChartsData = this.orderStatisticsPieChartsData.map(
          item => {
            item.value = item.value + random(0, 5)
            return item
          }
        )
        this.orderStatisticsPieChartsInit()

        this.salesFactsPieChartsData = this.salesFactsPieChartsData.map(
          item => {
            item.value = item.value + random(0, 6)
            return item
          }
        )
        this.salesFactsPieChartsInit()

        this.touristFlowChartsData.data = this.touristFlowChartsData.data.map(
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
        this.touristFlowChartsInit()

        this.orderStatisticsBarChartsData = this.orderStatisticsBarChartsData.map(
          item => {
            item.data = item.data.map(_item => {
              if (_item.value >= 0 && _item.value < 100) {
                _item.value = random(0, 100)
              } else if (_item.value >= 100 && _item.value < 200) {
                _item.value = random(100, 200)
              } else if (_item.value >= 200 && _item.value < 300) {
                _item.value = random(200, 300)
              } else if (_item.value >= 300 && _item.value <= 400) {
                _item.value = random(300, 400)
              } else {
                _item.value = _item.value
              }
              return _item
            })
            return item
          }
        )
        this.orderStatisticsBarChartsInit()

        this.salesRankingChartsData.person_times = this.salesRankingChartsData.person_times.map(
          _item => {
            if (_item >= 0 && _item < 100) {
              return random(0, 100)
            } else if (_item >= 100 && _item < 200) {
              return random(100, 200)
            } else if (_item >= 200 && _item < 300) {
              return random(200, 300)
            } else if (_item >= 300 && _item <= 400) {
              return random(300, 400)
            } else {
              return _item
            }
          }
        )
        this.salesRankingChartsData.percent = this.salesRankingChartsData.percent.map(
          _item => {
            if (_item >= 0 && _item < 10) {
              return random(0, 10)
            } else if (_item >= 20 && _item < 30) {
              return random(20, 30)
            } else if (_item >= 30 && _item <= 40) {
              return random(30, 40)
            } else if (_item >= 40 && _item <= 50) {
              return random(40, 50)
            } else if (_item >= 50 && _item <= 60) {
              return random(50, 60)
            } else if (_item >= 60 && _item <= 70) {
              return random(60, 70)
            } else if (_item >= 70 && _item <= 80) {
              return random(70, 80)
            } else if (_item >= 80 && _item <= 90) {
              return random(80, 90)
            } else {
              return random(90, 100)
            }
          }
        )
        this.salesRankingChartsInit()

        this.salesFactsBarChartsData = this.salesFactsBarChartsData.map(
          item => {
            item.data = item.data.map(_item => {
              if (_item.value >= 0 && _item.value < 100) {
                _item.value = random(0, 100)
              } else if (_item.value >= 100 && _item.value < 200) {
                _item.value = random(100, 200)
              } else if (_item.value >= 200 && _item.value < 300) {
                _item.value = random(200, 300)
              } else if (_item.value >= 300 && _item.value <= 400) {
                _item.value = random(300, 400)
              } else {
                _item.value = _item.value
              }
              return _item
            })
            return item
          }
        )
        this.salesFactsBarChartsInit()
      }, 5000)
    }
  },
  mounted() {
    this.touristFlowChartsInit()
    this.orderStatisticsPieChartsInit()
    this.orderStatisticsBarChartsInit()
    this.salesRankingChartsInit()
    this.salesFactsPieChartsInit()
    this.salesFactsBarChartsInit()
    window.addEventListener('resize', this.resizeCharts, true)
    this.skipTimer = setTimeout(() => {
      this.$router.push('/command_dispatch')
    }, 18000)
    this.changeData()
  },
  destroyed() {
    window.removeEventListener('resize', this.resizeCharts, true)
    this.skipTimer && clearTimeout(this.skipTimer)
    this.changeDataTimer && clearInterval(this.changeDataTimer)
    this.touristFlowCharts && this.touristFlowCharts.dispose()
    this.orderStatisticsPieCharts && this.orderStatisticsPieCharts.dispose()
    this.orderStatisticsBarCharts && this.orderStatisticsBarCharts.dispose()
    this.salesRankingCharts && this.salesRankingCharts.dispose()
    this.salesFactsPieCharts && this.salesFactsPieCharts.dispose()
    this.salesFactsBarCharts && this.salesFactsBarCharts.dispose()
  }
}
</script>
 
<style lang="scss" scoped>
.sa-box {
  min-height: 100vh;
  background: url('../../assets/img/strategic_analysis-bg-min.png') no-repeat
    center 0;
  background-size: 100% auto;
}

.tourist-flow {
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
}
.tourist-flow-charts {
  width: 100%;
  height: 245px;
}
.order-statistics-pie-charts {
  width: 100%;
  height: 245px;
}
.order-statistics-bar-charts {
  width: 100%;
  height: 245px;
}

.sales-ranking {
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
}

.sales-ranking-charts {
  width: 100%;
  height: 300px;
}

.sales-facts-pie-charts {
  width: 100%;
  height: 215px;
}

.sales-facts-bar-charts {
  width: 100%;
  height: 220px;
}

// .wave {
//   position: relative;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
//   width: 90%;
//   height: 8.125rem;
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
//     background: url('../../assets/img/strategic_map-min.png') no-repeat 50px
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
//   border: 3px dotted #fff;
//   position: absolute;
//   border-radius: 50%;
//   opacity: 0;
//   -webkit-animation: opac 7s infinite;
// }

.map-container {
  width: 100%;
  height: 650px;
}
</style>