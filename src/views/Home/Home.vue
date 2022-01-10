<template>
  <el-row class="home" :getter="20">
    <el-col :span="8" style="margin-top: 28px">
      <el-card shadow="hover ">
        <div class="user">
          <img :src="userImg" alt="" border="2px soild red" />
          <div class="userInfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>

        <div class="login-info">
          <hr />
          <p>上次登陆时间：<span>2022-1-1 </span></p>
          <p>上次登陆地点：<span>潘多拉 </span></p>
        </div>
      </el-card>
      <el-card style="margin-top: 20px">
        <el-table :data="tableData">
          <el-table-column
            show-overflow-tooltip
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          ></el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" style="margin-top: 20px">
      <div class="num">
        <el-card
          class="aa"
          shadow="hover"
          v-for="item in countData"
          :key="item.name"
          :body-style="{ display: 'flex', padding: 0 }"
        >
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          ></i>
          <div class="detail">
            <p class="num">￥{{ item.value }}</p>
            <p class="txt">￥{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card shadow="hover" style="height: 260px">
        <!-- <div style="height: 260px" ref="echart"></div> -->
        <EChart :chartData="echartData.order" style="height: 260px"></EChart>
      </el-card>
      <div class="graph">
        <el-card shadow="hover" style="height: 260px">
          <!-- <div style="height: 260px" ref="userEcharts"></div> -->
          <EChart :chartData="echartData.user" style="height: 260px"></EChart>
        </el-card>
        <el-card shadow="hover" style="height: 260px">
          <!-- <div style="height: 260px" ref="videoEcharts"></div> -->
          <EChart :chartData="echartData.video" style="height: 260px"></EChart>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { getHome } from "../../api/data.js";
require("../../api/mock.js");
import * as echarts from "echarts";
import EChart from "../../components/EChart.vue";
export default {
  components: {
    EChart,
  },
  data() {
    return {
      userImg: require("../../assets/Snipaste_2022-01-02_13-07-28.jpg"),
      tableData: [],
      // tableData: [
      //   {
      //     name: "oppo",
      //     todayBuy: 100,
      //     monthBuy: 300,
      //     totalBuy: 800,
      //   },
      //   {
      //     name: "vivo",
      //     todayBuy: 100,
      //     monthBuy: 300,
      //     totalBuy: 800,
      //   },
      //   {
      //     name: "苹果",
      //     todayBuy: 100,
      //     monthBuy: 300,
      //     totalBuy: 800,
      //   },
      //   {
      //     name: "小米",
      //     todayBuy: 100,
      //     monthBuy: 300,
      //     totalBuy: 800,
      //   },
      //   {
      //     name: "三星",
      //     todayBuy: 100,
      //     monthBuy: 300,
      //     totalBuy: 800,
      //   },
      //   {
      //     name: "魅族",
      //     todayBuy: 100,
      //     monthBuy: 300,
      //     totalBuy: 800000000,
      //   },
      // ],
      tableLabel: {
        name: "课程",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
      echartsData: {
        // order: {
        //   //提示框
        //   tooltip: {
        //     trigger: "axis",
        //   },
        //   legend: {
        //     //图例文字颜色
        //     textStyle: {
        //       color: "#333",
        //     },
        //   },
        //   grid: {
        //     left: "20%",
        //   },
        //   xAxis: {
        //     type: "category", //类目轴
        //     data: [],
        //     axisLine: {
        //       lineStyle: {
        //         color: "#17b3ae",
        //       },
        //     },
        //     axisLabel: {
        //       interval: 0,
        //       color: "#333",
        //     },
        //   },
        //   yAxis: {
        //     type: "value",
        //     axisLine: {
        //       lineStyle: {
        //         color: "#17b3ae",
        //       },
        //     },
        //   },
        //   color: ["#2ec7c9", "#b6a"],
        //   series: [
        //     {
        //       name: "销量",
        //       type: "bar",
        //       data: [5, 20, 36, 10, 10, 20],
        //     },
        //   ],
        // },
        //柱状图
        user: {
          legend: {
            //图例文字颜色
            textStyle: {
              color: "#333",
            },
          },
          grid: {
            left: "20%",
          },
          //提示框
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category", //类目轴
            data: [],
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
            axisLabel: {
              // interval: 0,
              color: "#333",
            },
          },
          yAxis: [
            {
              type: "value",
              axisLine: {
                lineStyle: {
                  color: "#17b3a3",
                },
              },
            },
          ],
          color: ["#2ec7c9", "b6a2de"],
          series: [],
        },
        video: {
          tooltip: {
            trigger: "item",
          },
          color: [
            "#0f78f4",
            "#dd536b",
            "#9462e5",
            "#a6a6a6",
            "e1bb22",
            "#39c362",
            "#3ed1cf",
          ],
          series: [],
        },
      },
      echartData: {
        order: {
          xData: [],
          series: [],
        },
        user: {
          xData: [],
          series: [],
        },
        video: {
          series: [],
        },
      },
    };
  },

  mounted() {
    getHome().then((res) => {
      console.log("请求的数据");
      console.log(res);
      this.tableData = res.data.tableData;
      //折线图展示
      const order = res.data.orderData;
      // this.echartsData.order.xAxis.data = order.date;
      let keyArray = Object.keys(order.data[0]);
      // keyArray.forEach((key) => {
      //   this.echartsData.order.series.push({
      //     name: key,
      //     data: order.data.map((item) => item[key]),
      //     type: "line",
      //   });
      // });
      //这两步写在了组件里
      // const myEchartsOrder = echarts.init(this.$refs.echart);
      // myEchartsOrder.setOption(this.echartsData.order);
      //传给组建的值
      this.echartData.order.xData = order.date;
      keyArray.forEach((key) => {
        this.echartData.order.series.push({
          name: key,
          data: order.data.map((item) => item[key]),
          type: "line",
        });
      });
      //柱状图
      this.echartData.user.xData = res.data.userData.map((item) => item.data);
      this.echartData.user.series.push({
        name: "新增用户",
        data: res.data.userData.map((item) => item.new),
        type: "bar",
      });
      this.echartData.user.series.push({
        name: "活跃用户用户",
        data: res.data.userData.map((item) => item.active),
        type: "bar",
      });
      // const myEchartsUser = echarts.init(this.$refs.userEcharts);
      // myEchartsUser.setOption(this.echartsData.user);
      //饼状图
      this.echartData.video.series.push({
        data: res.data.videoData,
        type: "pie",
      });
      // const myEchartsVideo = echarts.init(this.$refs.videoEcharts);
      // myEchartsVideo.setOption(this.echartsData.video);
    });
  },
};
</script>

<style scoped>
.user {
  display: flex;
}
.user img {
  border-radius: 50%;
}
.userInfo {
  /* felx: 1; */
  margin-left: 50px;
}
.login-info {
  margin-top: 50px;
}
.num {
  display: flex;
  flex-wrap: wrap;
}
.num .el-card {
  width: 28.3%;
  box-sizing: border-box;
  margin: 10px 10px;
}
.graph {
  display: flex;
}
.graph .el-card {
  flex: 1;
}
</style>