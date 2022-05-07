<template>
  <a-layout>
    <a-layout-header class="header">
      <div class="logo">
        <img src="http://bog-ac-static.smartgslb.com/static/header/timeline.png" alt="">
      </div>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
            v-model:selectedKeys="selectedKeys"
            mode="inline"
            :style="{ height: '100%', borderRight: 0 }"
            @click="clickMenu"
        >
          <a-menu-item v-for="item in navList" :key="item.id" :title="item.info">{{item.name}}</a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 20px">
        <a-layout-content
            :style="{ padding: '24px', margin: 0, minHeight: '280px' }"
        >
          <neu-button :onClick="()=>{}">测试</neu-button>
          <neu-switch v-model="switchValue" @switchChange="switchValueChange" size="small"></neu-switch>
          <neu-checkbox v-model:value="checkboxValue"></neu-checkbox>
          <br>
          <neu-radio layout="inline" v-model:value="radioValue" :options="[{value:1,label:'1'},{value:2,label:'2'},{value:3,label:'3'},]"></neu-radio>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import {getFBData} from "@/api/common";
import NeuButton from "@/components/button/NeuButton.vue";
import NeuSwitch from "@/components/switch/NeuSwitch";
import NeuCheckbox from "@/components/checkbox/NeuCheckbox";
import NeuRadio from "@/components/radio/NeuRadio";

export default {
  name: "aboutView",
  components: {
    NeuButton,
    NeuSwitch,
    NeuCheckbox,
    NeuRadio
  },
  data() {
    return {
      fileList: [],
      switchValue: true,
      checkboxValue: true,
      radioValue: "1",
      selectedKeys: [],
      navList: []
    };
  },
  watch: {
    checkboxValue(val) {
      console.log(val);
    },
  },
  mounted() {
    // this.getFormList();
  },
  methods: {
    clickMenu(item) {
      console.log(item);
    },
    checkboxValueChange(val) {
      this.checkboxValue = val;
    },
    switchValueChange(val) {
      this.switchValue = val;
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
          console.log(this.navList);
          this.selectedKeys.push(this.navList[0].id);
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.logo {
  width: 70px;
  height: 70px;
  img{
    width: 55px;
    border-radius: 35px;
  }
}
</style>
