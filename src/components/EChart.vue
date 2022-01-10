<template>
  <div ref="echart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  props: {
    chartData: {
      type: Object,
      default() {
        return {
          xData: [],
          series,
        };
      },
    },
    isAxisCharts: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    chartData: {
      handler: function () {
        this.initChart();
      },
      deep: true,
    },
  },
  computed: {
    options() {
      return this.isAxisCharts ? this.axisOption : this.normalOption;
    },
  },
  methods: {
    initChart() {
      this.initChartData();
      //设置echarts表格
      //
      if (this.echart) {
        this.echart.setOption(this.options);
      } else {
        this.echart = echarts.init(this.$refs.echart);
        this.echart.setOption(this.options);
      }
    },
    initChartData() {
      if (this.isAxisCharts) {
        this.axisOption.xAxis.data = this.chartData.xData;
        this.axisOption.series = this.chartData.series;
      } else {
        this.normalOption.series = this.chartData.series;
      }
    },
  },
  data() {
    return {
      axisOption: {
        //提示框
        tooltip: {
          trigger: "axis",
        },
        legend: {
          //图例文字颜色
          textStyle: {
            color: "#333",
          },
        },
        grid: {
          left: "20%",
        },
        xAxis: {
          type: "category", //类目轴
          data: [],
          axisLine: {
            lineStyle: {
              color: "#17b3ae",
            },
          },
          axisLabel: {
            interval: 0,
            color: "#333",
          },
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#17b3ae",
            },
          },
        },
        color: ["#2ec7c9", "#b6a"],
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      },
      normalOption: {
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
      echart: null,
    };
  },
};
</script>

<style>
</style>