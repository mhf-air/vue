# vue
## 用Vue实现的[小米商城首页](https://www.mi.com/index.html)
## [项目展示](https://mhf-air.github.io/)(因为部署在github page上,所以初次访问可能有点慢)

用到了以下的库：
  1. Vue + Vue-Router + VueX
  2. Stylus
  3. ElementUI
  4. axios

开发时的特点：
  1. 用了live-server和watchify实现开发时修改后的页面实时刷新
  2. browserify(没用webpack, 觉得webpack配置太繁琐了)
  3. babel
  4. html-minifier压缩html(虽然只有一个index.html), csso压缩css(主要是项目内特有组件的样式), uglify-js压缩javascript
  5. yarn

可能需要解决的问题：
  1. 减少首屏载入时间
  2. 测试
  3. 开发(新增和修改功能)时的效率和正确性
