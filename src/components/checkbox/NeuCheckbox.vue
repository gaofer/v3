<template>
  <div id="NeuCheckbox" class="checkbox">
    <div class="checkbox__1">
      <input id="checkbox-1" type="checkbox" :checked="value" @change="onChange">
      <label for="checkbox-1">
        <check-outlined class="iconClass"/></label>
    </div>
  </div>
</template>

<script>
import { CheckOutlined }  from '@ant-design/icons-vue';
export default {
  name: "NeuCheckbox",
  components: {
    CheckOutlined
  },
  props: {
    value: {
      type: Boolean,
    },
  },
  methods: {
    onChange(e) {
      this.$emit("update:value", e.target.checked);
      this.$emit('checkboxChange', e.target.checked);
    },
  },
}
</script>

<style lang="less" scoped>
@import "../../style/common.less";

#NeuCheckbox{
  transform: scale(50%);
  display: inline-block;
  font-family: "Poppins", sans-serif;
}

.checkbox {
  input { display: none; }
  
  &__1 {
    width: 6rem;
    display: flex;
    justify-content: center;
    label {
      box-shadow: @shadow;
      cursor: pointer;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: .5rem;
      width: 2.8rem;
      height: 2.8rem;
      
      &:hover .iconClass { color: @primary; }
  
      .iconClass {
        font-size: 1.8rem;
        stroke-width: 25;
        stroke: @greyDark;
        font-weight: 1000;
        color: @greyDark;
        transition: .3s ease;
      }
    }
    
    & input:checked {
      & ~ label {
        box-shadow: @inner-shadow;
        .iconClass {
          stroke-width: 25;
          stroke: @primary;
          color: @primary;
        }
      }
    }
  }
}
</style>
