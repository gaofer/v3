<template>
  <div class="search">
    <input type="text" class="search__input" :placeholder="placeholder">
    <div class="search__icon">
      <search-outlined ></search-outlined>
    </div>
  </div>
</template>

<script>
import { SearchOutlined }  from '@ant-design/icons-vue';
export default {
  name: "NeuSearch",
  components: {
    SearchOutlined
  },
  props: {
    placeholder: {
      type: String,
      default: "Search..."
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../style/common.less";

.search {
  transform: scale(65%);
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  position: relative;
  display: flex;
  align-items: center;
  
  &__input {
    width: 20.4rem;
    height: 4rem;
    border: none;
    border-radius: 1rem;
    font-size: 1.4rem;
    padding-left: 3.8rem;
    box-shadow: @inner-shadow;
    background: none;
    font-family: inherit;
    color: @greyDark;
    
    &::placeholder { color: var@greyLight-3; }
    &:focus {
      outline: none;
      box-shadow: @shadow;
      
      + .search__icon {
        color: @primary;
      }
    }
  }
  
  &__icon {
    height: 2rem;
    position: absolute;
    font-size: 2rem;
    padding: 0 1rem;
    display: flex;
    color: @greyDark;
    transition: .3s ease;
  }
}
</style>
