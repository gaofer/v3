<template>
  <div class="radio">
    <div v-for="item in options" class="radio__1" :key="item.value">
      <input
        :id="item.label"
        type="radio"
        :value="item.value"
        :checked="value==item.value"
      >
      <label :value="item.value" @click="change"></label>
      <span class="label">{{item.label}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "NeuRadio",
  props: {
    options: {
      type: Array,
      required: true
    },
    value: {
    },
    layout: {
      type: String,
      default: "horizontal"
    }
  },
  mounted() {
    // 将option里的value转换为字符串，避免后续出现报warning
    this.options.forEach(item => {
      if (typeof item.value == "number") {
        item.value = item.value.toString();
      }
    });
    if(this.layout == "inline"){
      let doms = document.getElementsByClassName("radio__1");
      for(let i=0;i<doms.length;i++){
        doms[i].classList.add("radio--inline");
      }
    }
  },
  methods: {
    change(e) {
      this.$emit("input", e.target.__vnode.props.value);
      this.$emit("update:value", e.target.__vnode.props.value);
    }
  },
}
</script>

<style lang="less" scoped>
@import "../../style/common.less";

.radio {
  transform: scale(65%);
  justify-items: center;
  display: inline-block;
  input { display: none; }
  
  .radio--inline{
    display: inline-block;
    padding-left: 15px;
  }
  
  &__1 {
    .label{
      line-height: 2.8rem;
      padding-left: 10px;
      font-size: 1.8rem;
    }
    & input:checked {
      & ~ label {
        box-shadow: @inner-shadow;
        &::after {
          background: @primary;
        }
      }
    }
    label {
      box-shadow: @shadow;
      position: relative;
      display: inline-block;
      top: 10px;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      width: 2.8rem;
      height: 2.8rem;
      border-radius: 50%;
      &:hover {&::after{background: @primary;}}
      
      &::after {
        content: "";
        position: absolute;
        top: 25%;
        right: 25%;
        //z-index: 1000;
        width: 1.4rem;
        height: 1.4rem;
        background: @greyDark;
        border-radius: 50%;
        transition: 0.3s ease;
      }
    }
  }
}
</style>
