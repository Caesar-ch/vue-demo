//在此处导入主要是为了方便生成随机数
import Mock from 'mockjs'
//图表数据，定义的一个数组，通过mock随机添加数据
let list = []
//导出一个对象，default只能导出一个，用随意接收
export default {

  getStatisticalData: () => {
    //Mock.Random.float 产生随机数100-8000之间 保留小数 最小0位 最大0位
    for (let i = 0; i < 7; i++) {
      list.push(
        Mock.mock({
          苹果: Mock.Random.float(100, 8000, 0, 0),
          oppo: Mock.Random.float(100, 8000, 0, 0),
          vivo: Mock.Random.float(100, 8000, 0, 0),
          魅族: Mock.Random.float(100, 8000, 0, 0),
          三星: Mock.Random.float(100, 8000, 0, 0),
          小米: Mock.Random.float(100, 8000, 0, 0),
        })
      )
    }
    //最终调用到mockjs里面是返回的以下数据，和把数据直接写过去结果一样，但是这样可以分开工作，使数据处理在一个模块
    return {
      code: 20000,
      data: {
        //饼图
        videoData: [
          {
            name: '小米',
            value: 2999
          },
          {
            name: '苹果',
            value: 5999
          },
          {
            name: 'vivo',
            value: 1500
          },
          {
            name: 'oppo',
            value: 1999
          },
          {
            name: '魅族',
            value: 2200
          },
          {
            name: '三星',
            value: 4500
          },
        ],
        //柱状图
        userData: [
          {
            data: '周一',
            new: 5,
            active: 200
          },
          {
            data: '周二',
            new: 10,
            active: 500
          },
          {
            data: '周三',
            new: 12,
            active: 550
          },
          {
            data: '周四',
            new: 60,
            active: 800
          },
          {
            data: '周五',
            new: 65,
            active: 550
          },
          {
            data: '周六',
            new: 53,
            active: 770
          },
          {
            data: '周日',
            new: 33,
            active: 170
          },
        ],
        //折线图
        orderData: {
          date: ['20191001', '20191002', '20191003', '20191004', '20191005', '20191006', '20191007'],
          data: list
        },
        tableData: [
          {
            name: "oppo",
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800,
          },
          {
            name: "vivo",
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800,
          },
          {
            name: "苹果",
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800,
          },
          {
            name: "小米",
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800,
          },
          {
            name: "三星",
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800,
          },
          {
            name: "魅族",
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800,
          },
        ],
      }
    }
  }
}
// console.log(list);