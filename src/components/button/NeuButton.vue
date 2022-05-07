<template>
  <div ref="Neubutton" id="neuBtn">
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
    size: {
      type: String,
      default: "medium",
    }
  },
  mounted() {
    if (this.size === "small") {
      this.$refs.Neubutton.classList.add("button_small");
    }else if (this.size === "large") {
      this.$refs.Neubutton.classList.add("button_large");
    }else {
      this.$refs.Neubutton.classList.add("button_medium");
    }
  },
});
</script>

<style lang="less" scoped>
@import "../../style/common.less";

.button_small{
  transform: scale(50%);
}
.button_large{
  transform: scale(100%);
}
.button_medium{
  transform: scale(62.5%);
}

#neuBtn {
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
