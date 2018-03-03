<template>
<el-header class="page-header">
  <g-h wrap justify-content="center" align-items="center" class="page-header-main">
    <div id="logo">SWISS</div>
    <g-h justify-content="center" id="nav">
      <el-button @mouseenter.native="showPopover('showBook')" @mouseleave.native="hidePopover('showBook')">预定</el-button>
      <el-button @mouseenter.native="showPopover('showPrepare')" @mouseleave.native="hidePopover('showPrepare')">准备</el-button>
      <el-button @mouseenter.native="showPopover('showFly')" @mouseleave.native="hidePopover('showFly')">飞行</el-button>
      <el-button @mouseenter.native="showPopover('showExplore')" @mouseleave.native="hidePopover('showExplore')">探索</el-button>
    </g-h>
    <div id="search">
      <el-input v-model="search" placeholder="Search" prefix-icon="el-icon-search" />
    </div>
    <div id="login">
      <router-link to="/login">登录</router-link>
    </div>
  </g-h>

  <!-- book popover -->
  <g-h justify-content="center" id="showBook" class="popover" v-show="showBook" @mouseenter.native="showPopover('showBook')" @mouseleave.native="hidePopover('showBook')">
    <g-v class="first-col">
      <h3>预定航班</h3>
      <p>这次去哪里</p>
      <el-button id="chooseDestination">选择目的地</el-button>
    </g-v>
    <g-v align-items="flex-start">
      <h3>最佳优惠</h3>
      <ul>
        <li>
          <router-link to="">特价从苏黎世</router-link>
        </li>
        <li>
          <router-link to="">飞行优惠券</router-link>
        </li>
        <li>
          <router-link to="">瑞航高尔夫会员(SWISS Golf Traveller)</router-link>
        </li>
        <li>
          <router-link to="">新的欧洲收费标准</router-link>
        </li>
        <li>
          <router-link to="">航线网络</router-link>
        </li>
      </ul>
    </g-v>
    <g-v align-items="flex-start">
      <h3>SWISS Choice</h3>
      <ul>
        <li>
          <router-link to="">预定座位</router-link>
        </li>
        <li>
          <router-link to="">额外行李</router-link>
        </li>
        <li>
          <router-link to="">升级预定</router-link>
        </li>
        <li>
          <router-link to="">预定惊喜</router-link>
        </li>
        <li>
          <router-link to="">免税预定</router-link>
        </li>
        <li>
          <router-link to="">SWISS Mobile</router-link>
        </li>
      </ul>
    </g-v>
    <g-v align-items="flex-start">
      <h3>合作伙伴服务项目</h3>
      <ul>
        <li>
          <router-link to="">预定租车</router-link>
        </li>
        <li>
          <router-link to="">预定机场接送</router-link>
        </li>
        <li>
          <router-link to="">预定酒店</router-link>
        </li>
        <li>
          <router-link to="">预定活动</router-link>
        </li>
      </ul>
    </g-v>
    <g-v align-items="flex-start">
      <h3>企业客户</h3>
      <ul>
        <li>
          <router-link to="">商业计划</router-link>
        </li>
        <li>
          <router-link to="">团队旅行</router-link>
        </li>
        <li>
          <router-link to="">瑞航为您宣传</router-link>
        </li>
        <li>
          <router-link to="">会议和活动</router-link>
        </li>
      </ul>
    </g-v>
  </g-h>

  <!-- prepare popover -->
  <g-h justify-content="center" id="showPrepare" class="popover" v-show="showPrepare" @mouseenter.native="showPopover('showPrepare')" @mouseleave.native="hidePopover('showPrepare')">
    <g-v class="first-col">
      <h3>准备我的旅程</h3>
      <p>这里是为您量身定做的旅馆信息</p>
      <el-button id="chooseDestination">个人总览</el-button>
    </g-v>
    <g-v align-items="flex-start">
      <h3>行李</h3>
      <ul>
        <li>
          <router-link to="">随身行李</router-link>
        </li>
        <li>
          <router-link to="">托运行李</router-link>
        </li>
        <li>
          <router-link to="">超重行李</router-link>
        </li>
        <li>
          <router-link to="">危险物品</router-link>
        </li>
        <li>
          <router-link to="">特殊行李</router-link>
        </li>
        <li>
          <router-link to="">更多</router-link>
        </li>
      </ul>
    </g-v>
    <g-v align-items="flex-start">
      <h3>值机手续办理信息</h3>
      <ul>
        <li>
          <router-link to="">值班时间</router-link>
        </li>
        <li>
          <router-link to="">在线值机</router-link>
        </li>
        <li>
          <router-link to="">自助办理值机手续</router-link>
        </li>
        <li>
          <router-link to="">在机场办理值机手续</router-link>
        </li>
        <li>
          <router-link to="">自助值机手续</router-link>
        </li>
        <li>
          <router-link to="">更多</router-link>
        </li>
      </ul>
    </g-v>
    <g-v align-items="flex-start">
      <h3>入境规定</h3>
      <ul>
        <li>
          <router-link to="">世界各地的入境规定</router-link>
        </li>
        <li>
          <router-link to="">美国入境规定</router-link>
        </li>
        <li>
          <router-link to="">南非入境规定</router-link>
        </li>
        <li>
          <router-link to="">加拿大入境规定</router-link>
        </li>
        <li>
          <router-link to="">申根区域</router-link>
        </li>
      </ul>
    </g-v>
    <g-v align-items="flex-start">
      <h3>特殊服务</h3>
      <ul>
        <li>
          <router-link to="">带儿童搭乘飞机</router-link>
        </li>
        <li>
          <router-link to="">无障碍旅行</router-link>
        </li>
        <li>
          <router-link to="">旅行和健康</router-link>
        </li>
        <li>
          <router-link to="">带动物旅行</router-link>
        </li>
      </ul>
    </g-v>
  </g-h>

  <!-- fly popover -->
  <g-h justify-content="center" id="showFly" class="popover" v-show="showFly" @mouseenter.native="showPopover('showFly')" @mouseleave.native="hidePopover('showFly')">
    <g-v class="first-col">
      <h3>我的下个航班</h3>
      <p>从餐食到座位，期待您下次的瑞航航班</p>
      <el-button id="chooseDestination">个人总览</el-button>
    </g-v>
    <g-v align-items="flex-start">
      <h3>在机场</h3>
      <ul>
        <li>
          <router-link to="">瑞航苏黎世机室</router-link>
        </li>
        <li>
          <router-link to="">瑞航日内瓦机室</router-link>
        </li>
        <li>
          <router-link to="">全球各地的候机室</router-link>
        </li>
        <li>
          <router-link to="">苏黎世机场</router-link>
        </li>
        <li>
          <router-link to="">日内瓦机场</router-link>
        </li>
      </ul>
    </g-v>
    <g-v align-items="flex-start">
      <h3>机上服务</h3>
      <ul>
        <li>
          <router-link to="">瑞航头等舱</router-link>
        </li>
        <li>
          <router-link to="">瑞航商务舱</router-link>
        </li>
        <li>
          <router-link to="">瑞航经济舱</router-link>
        </li>
        <li>
          <router-link to="">机上餐饮</router-link>
        </li>
        <li>
          <router-link to="">机上娱乐</router-link>
        </li>
        <li>
          <router-link to="">免税购物</router-link>
        </li>
      </ul>
    </g-v>
    <g-v align-items="flex-start">
      <h3>机队</h3>
      <ul>
        <li>
          <router-link to="">空客</router-link>
        </li>
        <li>
          <router-link to="">波音</router-link>
        </li>
        <li>
          <router-link to="">庞巴迪</router-link>
        </li>
      </ul>
    </g-v>
    <g-v align-items="flex-start">
      <h3>航班信息</h3>
      <ul>
        <li>
          <router-link to="">到达和起飞</router-link>
        </li>
        <li>
          <router-link to="">飞行计划</router-link>
        </li>
        <li>
          <router-link to="">航线网络</router-link>
        </li>
        <li>
          <router-link to="">手机Apps</router-link>
        </li>
      </ul>
    </g-v>
  </g-h>

  <!-- explore popover -->
  <g-h justify-content="center" id="showExplore" class="popover" v-show="showExplore" @mouseenter.native="showPopover('showExplore')" @mouseleave.native="hidePopover('showExplore')">
    <g-v class="first-col">
      <h3>探索您的目的地</h3>
      <p>住宿、购物、美食，当地人和瑞航机组的私房秘籍</p>
      <el-button id="chooseDestination">选择城市</el-button>
    </g-v>
    <g-v align-items="flex-start">
      <h3>寻找旅行目的地</h3>
      <ul>
        <li>
          <router-link to="">沙滩和阳光</router-link>
        </li>
        <li>
          <router-link to="">城市</router-link>
        </li>
        <li>
          <router-link to="">自然</router-link>
        </li>
        <li>
          <router-link to="">浪漫</router-link>
        </li>
        <li>
          <router-link to="">家庭</router-link>
        </li>
      </ul>
    </g-v>
    <g-v align-items="flex-start">
      <h3>SWISS Travel Guide</h3>
      <ul>
        <li>
          <router-link to="">纽约</router-link>
        </li>
        <li>
          <router-link to="">伦敦</router-link>
        </li>
        <li>
          <router-link to="">巴黎</router-link>
        </li>
        <li>
          <router-link to="">苏黎世</router-link>
        </li>
        <li>
          <router-link to="">曼谷</router-link>
        </li>
      </ul>
    </g-v>
    <g-v align-items="flex-start">
      <h3>World of SWISS</h3>
      <ul>
        <li>
          <router-link to="">飞行</router-link>
        </li>
        <li>
          <router-link to="">员工</router-link>
        </li>
        <li>
          <router-link to="">瑞士特色</router-link>
        </li>
        <li>
          <router-link to="">高端</router-link>
        </li>
        <li>
          <router-link to="">地勤服务</router-link>
        </li>
        <li>
          <router-link to="">交流互动</router-link>
        </li>
      </ul>
    </g-v>
  </g-h>

</el-header>
</template>

<script>
export default {
  data() {
    return {
      showBook: false,
      showPrepare: false,
      showFly: false,
      showExplore: false,
      search: "",
    }
  },
  methods: {
    showPopover(a) {
      this[a] = true
    },
    hidePopover(a) {
      this[a] = false
    },
  },
}
</script>

<style scoped>
.page-header {
  width: 100%;
  margin-top: 2rem;
  padding: 0;
}

.page-header-main {
  /* background: cyan; */
}

.page-header ul {
  list-style: none;
  padding: 0;
  width: 100%;
}

.page-header li {
  border-top: 1px solid;
  padding: 0.1rem 1rem;
}

.page-header li:last-child {
  border-bottom: 1px solid;
}

#logo {
  font-size: 2rem;
  color: #be1902;
  flex: 1;
  text-align: end;
}

#nav {
  flex: 1;
}

#nav>.el-button {
  font-size: 1.3rem;
  border-style: none;
  margin: 0;
}

#nav>.el-button:hover {
  background-color: transparent;
  color: #be1902;
}

#search {
  flex: 1;
}

#login {
  flex: 1;
  font-size: 1.5rem;
  text-align: center;
}

#login a:hover {
  color: #be1902;
}

.popover {
  z-index: 100;
  position: absolute;
  top: 5rem;
  padding-bottom: 2rem;
  width: 100%;
  background-color: #f5f4f1;
}

.popover>.g-v {
  border-right: 1px solid #aaa;
  padding: 1rem 0;
  width: 15rem;
}

.popover>.g-v>h3 {
  padding-left: 1rem;
}

.first-col>:not(:first-child) {
  margin-left: 1rem;
  width: 60%;
}

#chooseDestination {
  background-color: red;
  color: white;
  width: 50%;
}
</style>
