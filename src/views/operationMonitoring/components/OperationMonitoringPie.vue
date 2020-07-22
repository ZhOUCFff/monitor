<template>
  <div class="pie-box">
    <div class="pie" ref="pie"></div>
    <div class="bar" ref="bar"></div>
    <!-- <div class="pie-info">
      <p>
        占用车辆
        <br />
        <span class="fs-28 ff-num" style="color:#01e5ab">1785</span>
      </p>
      <p>
        空闲车辆
        <br />
        <span class="fs-28 ff-num" style="color:#11dffc">528</span>
      </p>
    </div>-->
  </div>
</template>
 
<script>
export default {
  props: {
    value: {
      type: Number,
      default() {
        return 0
      }
    },
    data: {
      type: Object,
      default() {
        return {
          title: '',
          inUse: 0,
          free: 0
        }
      }
    },
    ringColor: {
      type: Array,
      default() {
        return [{
          offset: 0,
          color: '#02d6fc' // 0% 处的颜色
        }, {
          offset: 1,
          color: '#367bec' // 100% 处的颜色
        }]
      }
    }
  },
  name: "HomePie",
  data() {
    return {
      base64: '',
      pieOption: {
        backgroundColor: "transparent",
        title: {
          text: '明月山停车场',
          x: 'center',
          y: '15%',
          backgroundColor: 'rgba(10,58,127,0.33)',
          padding: [6, 8, 5, 8],
          textStyle: {
            fontWeight: 'normal',
            color: '#fff',
            fontSize: 16
          }
        },
        color: ['#282c40'],
        legend: {
          show: false,
          data: []
        },
        series: [{
          name: 'men',
          type: 'pie',
          clockWise: true,
          radius: ['35%', '50%'],
          center: ["50%", "50%"],
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
          data: [{
            value: 1785,
            name: '',
            itemStyle: {
              normal: {
                color: { // 完成的圆环的颜色
                  colorStops: this.ringColor
                },
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            }
          }, {
            name: '',
            value: 528
          }]
        }]
      },
      barOption: {
        "title": {
          "text": "自定义象形柱图--PictorialBarCustomize",
          "left": "center",
          "y": "10",
          "textStyle": {
            "color": "#fff"
          }
        },
        "backgroundColor": "#101a3c",
        "grid": {
          "left": "20%",
          "top": "10%",
          "bottom": 10
        },
        "tooltip": {
          "trigger": "item",
          "textStyle": {
            "fontSize": 12
          },
          "formatter": "{b0}:{c0}"
        },
        "xAxis": {
          "max": 300,
          "splitLine": {
            "show": false
          },
          "axisLine": {
            "show": false
          },
          "axisLabel": {
            "show": false
          },
          "axisTick": {
            "show": false
          }
        },
        "yAxis": [
          {
            "type": "category",
            "inverse": false,
            "data": [
              "山西",
              "四川",
              "西藏",
              "北京",
              "上海",
              "内蒙古",
              "云南",
              "黑龙江",
              "广东",
              "福建"
            ],
            "axisLine": {
              "show": false
            },
            "axisTick": {
              "show": false
            },
            "axisLabel": {
              "margin": -4,
              "textStyle": {
                "color": "#fff",
                "fontSize": 16.25
              }
            }
          },

        ],
        "series": [
          {
            "type": "pictorialBar",
            "symbol": 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAACg0lEQVQ4T2NkYGDQZkACvBvP5jNJSEcyMDHzIItjsP/9+/rv5ZPVn0Msexl+/foPk2dENpCnf6kds43bNIZfP+/9////Nz4DGRkZmRnY2FX+njmc/yUzaC9WA/l2Xutg5OJW+GgrH4HXdVBJvoMPljD8+PHik7tGCaaB8vJs/KtOHfp7+9qELzGOK4gxkGfx7hBmNb3yb9EONr/vXP8J0sPI1b0gmYmdk5tBWkGFWU4p92ttmu2fHevfE2Mgi503P3fvgiP/n9yf/u/x/Zv/fn7/ysh/+vVfBgYGJqgB/34smOj/c2rLfWIMZM+sUuBILNjEwMgI18/IWTcpks07fC4DExMn2JB//378//H9KsP/f/CYw2o4IxMjIwenFpK+n7+2r0pi5IhId2YvbtlDjIsIqfkxpcmdkbN2YgSbX9RyQoqJkf+zfXU0I0//0kxw2mNgYPj//du1vzcvLWBW1gxg5OW3Yvz9+/m/l0/WIxvGKCblxcDGrvD/6+fjf29dWcekoRfLxMmtB1Lz9/i+fEaeBTtrmLWNmkECf/ZtTvpannSKPT5XmiOnbue/Tx/2fXZWzUM2kG/ntVZGIVH/H3O6vH/O7H7I3TTNkMUzdDHYwGsXGhm5l+1rY1HVrQTHx4vH8z4HW/TzzNsZzqyuU8Pw98+bf69e7EA2kElYzJGBjU36z+0bHV+jbJfwbjiTzyQtnwp20J1rnYzcyw92sKholcM1/f/3i4GRiY2YMGMAZU9GRlaYWmwG/v//+9dzogyDKmJkZZMEZRDsLvz398tHcwkLUgzkP/niBKxkgriwbU48i4vvLJA3QTH3yUEJHB7EAr59d2Yw8vLbgLz/+8DWDAA22QRQx76sPQAAAABJRU5ErkJggg==',
            "symbolRepeat": "fixed",
            "symbolMargin": "5%",
            "symbolClip": true,
            "symbolSize": 22.5,
            "symbolPosition": "start",
            "symbolOffset": [
              20,
              0
            ],
            "symbolBoundingData": 300,
            "data": [
              13,
              42,
              67,
              81,
              86,
              94,
              166,
              220,
              249,
              262
            ],
            "z": 10
          },

        ]
      }
    }
  },
  mounted() {
    function getImgToBase64(url, callback) {
      var canvas = document.createElement('canvas')
      var ctx = canvas.getContext('2d')
      var img = new Image
      img.crossOrigin = 'Anonymous'
      img.src = require('../../../assets/img/bar-car.png')
      img.onload = function () {
        canvas.height = img.height
        canvas.width = img.width
        ctx.drawImage(img, 0, 0)
        var dataURL = canvas.toDataURL(url)
        callback(dataURL);
        canvas = null;
      }
    }

    getImgToBase64('../../../assets/img/bar-car.png', (base64) => {
      this.base64 = base64
      console.log(this.base64);
    })

    const option = {
      "title": {
        "text": "",
        "left": "center",
        "y": "10",
        "textStyle": {
          "color": "#fff"
        }
      },
      "backgroundColor": "transparent",
      "grid": {
        "left": "2%",
        "top": "5%",
        "bottom": 10
      },
      "tooltip": {
        "trigger": "item",
        "textStyle": {
          "fontSize": 12
        },
        "formatter": "{b0}:{c0}"
      },
      "xAxis": {
        "max": 300,
        "splitLine": {
          "show": false
        },
        "axisLine": {
          "show": false
        },
        "axisLabel": {
          "show": false
        },
        "axisTick": {
          "show": false
        }
      },
      "yAxis": [
        {
          "type": "category",
          "inverse": true,
          "data": [
            "",
            "",
            "",
            "",
          ],
          "axisLine": {
            "show": false
          },
          "axisTick": {
            "show": false
          },
          "axisLabel": {
            "margin": -4,
            "textStyle": {
              "color": "#fff",
              "fontSize": 16.25
            }
          }
        },

      ],
      "series": [
        {
          "type": "pictorialBar",
          "symbol": 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAACg0lEQVQ4T2NkYGDQZkACvBvP5jNJSEcyMDHzIItjsP/9+/rv5ZPVn0Msexl+/foPk2dENpCnf6kds43bNIZfP+/9////Nz4DGRkZmRnY2FX+njmc/yUzaC9WA/l2Xutg5OJW+GgrH4HXdVBJvoMPljD8+PHik7tGCaaB8vJs/KtOHfp7+9qELzGOK4gxkGfx7hBmNb3yb9EONr/vXP8J0sPI1b0gmYmdk5tBWkGFWU4p92ttmu2fHevfE2Mgi503P3fvgiP/n9yf/u/x/Zv/fn7/ysh/+vVfBgYGJqgB/34smOj/c2rLfWIMZM+sUuBILNjEwMgI18/IWTcpks07fC4DExMn2JB//378//H9KsP/f/CYw2o4IxMjIwenFpK+n7+2r0pi5IhId2YvbtlDjIsIqfkxpcmdkbN2YgSbX9RyQoqJkf+zfXU0I0//0kxw2mNgYPj//du1vzcvLWBW1gxg5OW3Yvz9+/m/l0/WIxvGKCblxcDGrvD/6+fjf29dWcekoRfLxMmtB1Lz9/i+fEaeBTtrmLWNmkECf/ZtTvpannSKPT5XmiOnbue/Tx/2fXZWzUM2kG/ntVZGIVH/H3O6vH/O7H7I3TTNkMUzdDHYwGsXGhm5l+1rY1HVrQTHx4vH8z4HW/TzzNsZzqyuU8Pw98+bf69e7EA2kElYzJGBjU36z+0bHV+jbJfwbjiTzyQtnwp20J1rnYzcyw92sKholcM1/f/3i4GRiY2YMGMAZU9GRlaYWmwG/v//+9dzogyDKmJkZZMEZRDsLvz398tHcwkLUgzkP/niBKxkgriwbU48i4vvLJA3QTH3yUEJHB7EAr59d2Yw8vLbgLz/+8DWDAA22QRQx76sPQAAAABJRU5ErkJggg==',
          "symbolRepeat": "fixed",
          "symbolMargin": "10%",
          "symbolClip": true,
          "symbolSize": 20,
          "symbolPosition": "start",
          "symbolOffset": [
            15,
            0
          ],
          "symbolBoundingData": 300,
          "data": [
            219,
            250,
            59,
            200
          ],
          "z": 10
        },

      ]
    };

    const myCharts = this.$echarts.init(this.$refs.bar)
    myCharts.setOption(option)
    this.$bus.$on('resize', () => {
      myCharts.resize()
    })
  }
}
</script>
 
<style scoped>
.pie-box {
  position: relative;
}
/* .pie {
  width: 80%;
  height: 100%;
} */
.pie-info {
  position: absolute;
  top: 50%;
  right: 0.15rem;
  transform: translate(0, -50%);
}
.bar {
  width: 100%;
  height: 100%;
}
</style>