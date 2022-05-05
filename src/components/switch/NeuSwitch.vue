<template>
  <div ref="NeuSwitch" id="NeuSwitch" class="switch">
    <div class="switch_1">
      <input id="switch_1" type="checkbox" :checked="value" @change="toggle">
      <label for="switch_1"></label>
    </div>
  </div>
</template>

<script>
export default {
  name: "NeuSwitch",
  props: {
    value: {
      type: Boolean,
    },
    size: {
      type: String,
      default: "medium",
    },
  },
  mounted() {
    if (this.size === "small") {
      this.$refs.NeuSwitch.classList.add("switch_small");
    }else if (this.size === "large") {
      this.$refs.NeuSwitch.classList.add("switch_large");
    }else {
      this.$refs.NeuSwitch.classList.add("switch_medium");
    }
  },
  methods: {
    toggle() {
      this.$emit("update:value", !this.value);
      this.$emit("switchChange", !this.value);
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../style/common.less";

#NeuSwitch{
  display: inline-block;
  font-family: "Poppins", sans-serif;
}
.switch_small{
  transform: scale(50%);
}
.switch_large{
  transform: scale(100%);
}
.switch_medium{
  transform: scale(62.5%);
}

.switch {
  justify-content: center;
  input { display: none; }
  
  &_1 {
    width: 6rem;
    label {
      display: flex;
      align-items: center;
      width: 100%;
      height: 3rem;
      box-shadow: @shadow;
      background: rgba(255,255,255,0);
      position: relative;
      cursor: pointer;
      border-radius: 1.6rem;
      
      &::after {
        content: "";
        position: absolute;
        left: .4rem;
        width: 2.1rem;
        height: 2.1rem;
        border-radius: 50%;
        background: @greyDark;
        transition: all .4s ease;
      }
      &::before {
        content: '';
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background: linear-gradient(330deg, @primary-dark 0%, @primary 50%, @primary-light 100%);
        opacity: 0;
        transition: all .4s ease;
      }
    }
  }
  & input:checked {
    & ~ label {
      &::before { opacity: 1; }
      &::after {
        left: 57%;
        background: @greyLight-1;
      }
    }
  }
}
</style>
