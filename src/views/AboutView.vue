<template>
  <div class="about">
    <a-button @click="clickBtn">点击</a-button>
    <neu-button :onClick="clickBtn">测试</neu-button>
  </div>
</template>

<script>
import { getFBData } from "@/api/common";
import NeuButton from "@/components/button/NeuButton.vue";

export default {
  name: "aboutView",
  data() {
    return {
      fileList: [],
    };
  },
  components: { NeuButton },
  mounted() {},
  methods: {
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
