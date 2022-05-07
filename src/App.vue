<template>
<!--  <div id='app'>
    <router-view />
  </div>-->
  <div id="app">
    <a-layout style="height: 100%">
      <a-layout-header class="header">
        <div class="logo">
          <img src="http://bog-ac-static.smartgslb.com/static/header/timeline.png" alt="">
<!--         todo 搜索功能 -->
          <neu-search></neu-search>
        </div>
      </a-layout-header>
      <a-layout style="height: 100%">
        <a-layout-sider width="200" class="layout-sider" style="background: #fff; height: 100%; overflow: scroll">
          <a-menu
              v-model:selectedKeys="selectedKeys"
              mode="inline"
              :style="{ height: '100%', borderRight: 0 }"
              @click="clickMenu"
          >
            <a-menu-item v-for="item in navList" :key="item.id" :title="item.info" :name="item.name" >{{item.name}}</a-menu-item>
          </a-menu>
        </a-layout-sider>
        <a-layout style="padding: 20px">
          <a-layout-content
              :style="{ padding: '24px', margin: 0, minHeight: '280px' }"
          >
            <router-view />
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import {getFBData} from "@/api/common";
import NeuSearch from "@/components/search/NeuSearch";
import { mapState } from 'vuex'

export default {
  components: {
    NeuSearch
  },
  data() {
    return {
      selectedKeys: [],
      navList: []
    };
  },
  computed: {
    ...mapState({
      formKey: state => state.formKey
    }),
  },
  mounted() {
    this.getFormList();
  },
  methods: {
    clickMenu(item) {
      this.$store.commit('changeFormKey', item.key);
      this.$store.commit('changeFormName', item.item.name);
    },
    getFormList() {
      let params = {
        url: "/api/forumlist",
      };
      getFBData(params).then((resp) => {
        if(resp.code == 6001) {
          this.navList = resp.info;
          this.navList.sort((a, b) => {
            return a.sort - b.sort;
          });
          this.selectedKeys.push(this.navList[0].id);
          this.$store.commit('changeFormKey', this.navList[0].key);
          this.$store.commit('changeFormListInfo', this.navList);
          this.$store.commit('changeFormName', this.navList[0].name);
        }
      });
    },
  },
}
</script>

<style>
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<style lang="less" scoped>
.logo {
  display: flex;
  width: 70px;
  height: 70px;
  align-items: center;
  img{
    width: 55px;
    height: 55px;
    border-radius: 27.5px;
  }
}

.layout-sider {
  background: #fff;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  
  &::-webkit-scrollbar {
    width: 6px; //对垂直方向滚动条
    height: 6px; //对水平方向滚动条
  }
  
  //滚动的滑块
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: #ccc //滚动条的颜色
  }
  
  //内层滚动槽
  &::-webkit-scrollbar-track-piece {
    background-color: rgba(255, 255, 255, 0); //滚动条的颜色
  }
}
.ant-layout-header {
  background: #fff !important;
}
main{
  overflow: auto;
  padding: 0px !important;
  &::-webkit-scrollbar {
    width: 6px; //对垂直方向滚动条
    height: 6px; //对水平方向滚动条
  }
  
  //滚动的滑块
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: #ccc //滚动条的颜色
  }
  
  //内层滚动槽
  &::-webkit-scrollbar-track-piece {
    background-color: rgba(255, 255, 255, 0); //滚动条的颜色
  }
}

</style>
