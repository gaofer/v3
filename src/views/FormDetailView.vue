<template>
  <div id="FormDetailView">
    <div class="title-content">您当前正在浏览： {{ formName }}</div>
    <single-post v-for="post in postList" :key="post.id" :data="post"></single-post>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {getFBData} from "@/api/common";
import singlePost from "@/views/singlePost";

export default {
  name: "FormDetailView",
  components: {
    singlePost
  },
  data() {
    return {
      postList: [],
    }
  },
  computed: {
    ...mapState({
      formKey: state => state.formKey,
      formName: state => state.formName
    })
  },
  watch: {
    formKey: function (val) {
      this.getForm(val);
    }
  },
  mounted() {
    this.getForm(this.formKey);
  },
  methods: {
    getForm(formKey, page = 1) {
      let params = {
        url: '/api/forum',
        id: formKey,
        page: page
      }
      getFBData(params).then(res => {
        if (res.code == 6001) {
          this.postList = res.info;
        }
      });
    }
  }
}
</script>

<style lang="less" scoped>
#FormDetailView {
  max-width: 1300px;
}

.title-content {
  background: #fff;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
}
</style>
