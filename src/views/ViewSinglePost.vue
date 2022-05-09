<template>
  <div id="singlePost">
    <div class="post-title-content">
      <neu-button style="position: absolute; right: -25px; top: -10px;" size="small"
                  :onClick="()=>{
                    this.$store.commit('changeFormKey', this.data.forum);
                    this.$store.commit('changeFormName', this.forumName);
                  }">
        {{ forumName }}
      </neu-button>
      <div class="content-cookie">{{ data.cookie }}</div>
      <div class="content-postTime">{{ postTime(data.time) }}</div>
      <div class="content-id">#{{ data.id }}</div>
    </div>
    <div class="main-content" v-html="data.content"></div>
    <div v-if="data.images!=null" class="item-content-img">
      <div style="width: 200px;height: 200px;" v-for="img in data.images" :key="img.url">
        <a-image-preview-group>
        <a-image  :width="200"
                  :height="200" :src="'http://bog-ac-static.smartgslb.com/image/large/'+img.url+img.ext" />
        </a-image-preview-group>
      </div>
    
    </div>
    
    <div class="reply" v-for="item in data.reply" :key="item.id">
      <div class="post-title-content">
        <div v-if="item.cookie==data.cookie" class="oring-poster"></div>
        <div class="content-cookie">{{ item.cookie }}</div>
        <div class="content-postTime">{{ postTime(item.time) }}</div>
        <div class="content-id">#{{ item.id }}</div>
      </div>
      <div class="main-content" v-html="item.content"></div>
      <div v-if="item.images!=null" class="item-content-img">
        <div style="width: 200px;height: 200px;" v-for="img in item.images" :key="img.url">
          <a-image-preview-group>
          <a-image  :width="200"
                    :height="200" :src="'http://bog-ac-static.smartgslb.com/image/large/'+img.url+img.ext" alt="" />
          </a-image-preview-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getFBData} from "@/api/common";
import {mapState} from "vuex";
import NeuButton from "@/components/button/NeuButton";


export default {
  name: "ViewSinglePost",
  components: {
    NeuButton
  },
  data() {
    return {
      data: [],
    }
  },
  mounted() {
    this.getThreads();
  },
  computed: {
    ...mapState({
      formListInfo: state => state.formListInfo
    }),
    postTime() {
      return function (time) {
        let date = new Date(time);
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
      };
    },
    forumName() {
      return this.getName(this.data.forum);
    }
  },
  methods: {
    // '/api/threads'
    getThreads(page = 1) {
      console.log(this.$route);
      let params = {
        url: '/api/threads',
        id: this.$route.params.id,
        page_def: 20,
        page: page,
        order: 0,
      }
      getFBData(params).then(res => {
        if (res.code == 6001) {
          this.data = res.info;
        }
      });
    },
    getName(id) {
      let name = "";
      this.formListInfo.forEach(item => {
        if (item.id == id) {
          name = item.name;
          return;
        }
      });
      return name;
    }
  }
}
</script>

<style lang="less" scoped>
#singlePost {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 10px;
  position: relative;
  
  .item-content-img {
    display: grid;
    grid-template-columns: repeat(3, 200px);
    grid-template-rows: repeat(auto-fit, 200px);
    
    img {
      width: 98%;
      height: 98%;
      margin: 1%;
      object-fit: cover;
    }
  }
  
  .post-title-content {
    display: flex;
    color: #aaa;
    font-size: 14px;
    
    .content {
      &-cookie {
        margin-right: 15px;
      }
      
      &-postTime {
        margin-right: 15px;
      }
      
      &-id {
        margin-right: 15px;
      }
      
      &-img {
        max-width: 1.68rem;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        object-fit: cover;
      }
    }
  }
  
  .main-content {
    padding: 10px;
  }
  
  .reply {
    background-color: #f5f7fa;
    border-radius: 5px;
    margin-bottom: 15px;
  }
  
  .oring-poster:after {
    margin: 8px;
    padding: 0 5px;
    background-color: #94E6FF;
    content: "po";
    border-radius: 3px;
  }
}

</style>
