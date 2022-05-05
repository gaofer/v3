<template>
  <div class="about">
    <a-button @click="clickBtn">点击</a-button>
    <neu-button :onClick="clickBtn">测试</neu-button>
    <neu-switch v-model="switchValue" @switchChange="switchValueChange" size="small"></neu-switch>
    <neu-checkbox v-model:value="checkboxValue"></neu-checkbox>
    <br>
    <neu-radio layout="inline" v-model:value="radioValue" :options="[{value:1,label:'1'},{value:2,label:'2'},{value:3,label:'3'},]"></neu-radio>
  </div>
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
      radioValue: "1"
    };
  },
  watch: {
    checkboxValue(val) {
      console.log(val);
    },
  },
  mounted() {
  },
  methods: {
    checkboxValueChange(val) {
      this.checkboxValue = val;
    },
    switchValueChange(val) {
      this.switchValue = val;
    },
    clickBtn() {
      let params = {
        url: "/api/forumlist",
      };
      getFBData(params).then((resp) => {
        console.log(resp);
      });
    },
  },
};
</script>
