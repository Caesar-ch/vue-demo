### 心得

1.element组件使用

2.图片的路径通过require引入为一个变量，然后动态绑定v-bind 图片的:src路径

3.侧边栏通过v-for循环渲染，然后因为渲染的每一个又对应不同的子组件，所以又可以循环给每个绑定点击事件@click=“clickMenu(item)”，然后该点击函数的函数体为 this.$rouuter.push(item.url)?item.url是子组件对应的hash路径。

4.跨组件控制，用store

5.vuex实现了状态管理，实现了复杂组件间传值

6.鼠标经过时盒子有阴影，sahdow=“hover”

7.@会自动定位到当前文件所在的文件夹这一层

8.Mock.mock（‘url’,{数据}），当匹配到相应的接口便会，拦截请求，并运行函数，或返回数据，作为res返回

9.echarts 使用

​	9.1npm install  echarts -S

​    9.2百度菜鸟教程查看配置代码

10.mock是拦截模块，引入的函数是数据返回模块home.js，axios.js是拦截封装模块，data.js是axios请求模块，封装不同的模块，可以更加分明。