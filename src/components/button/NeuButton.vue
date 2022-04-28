<template>
  <div id="neuBtn">
    <div class="btn" :class="primary ? 'btn_primary' : 'btn_secondary'" @click="onClick">
      <p><slot></slot></p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    primary: {
      type: Boolean,
      default: false,
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  },
});
</script>

<style lang="less" scoped>
@primary-light: #8abdff;
@primary: #6d5dfc;
@primary-dark: #5b0eeb;

@white: #ffffff;
@greyLight-1: #e4ebf5;
@greyLight-2: #c8d0e7;
@greyLight-3: #bec8e4;
@greyDark: #9baacf;

@shadow: 0.3rem 0.3rem 0.6rem @greyLight-2, -0.2rem -0.2rem 0.5rem @white;
@inner-shadow: inset 0.2rem 0.2rem 0.5rem @greyLight-2,
  inset -0.2rem -0.2rem 0.5rem @white;

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
#neuBtn {
  //   font-size: 62.5%;
  transform: scale(62.5%);
  display: inline-block;
  font-family: "Poppins", sans-serif;
  .btn {
    min-width: 10rem;
    height: 4rem;
    border-radius: 1rem;
    box-shadow: @shadow;
    justify-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s ease;
    &_primary {
      grid-column: 1 / 2;
      grid-row: 4 / 5;
      background: @primary;
      box-shadow: inset 0.2rem 0.2rem 1rem @primary-light,
        inset -0.2rem -0.2rem 1rem @primary-dark, @shadow;
      color: @greyLight-1;
      &:hover {
        color: @white;
      }
      &:active {
        box-shadow: inset 0.2rem 0.2rem 1rem @primary-dark,
          inset -0.2rem -0.2rem 1rem @primary-light;
      }
    }
    &_secondary {
      grid-column: 1 / 2;
      grid-row: 5 / 6;
      color: @greyDark;
      &:hover {
        color: @primary;
      }
      &:active {
        box-shadow: @inner-shadow;
      }
    }
    p {
      margin: 0 0.8rem;
      font-size: 1.6rem;
    }
  }
}
</style>
