<template>
  <div
    class="background"
    ref="background"
    v-show="display"
    @click="close()"
    @contextmenu="close()">
    <div
      class="window"
      :style="style"
      ref="window">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { ErrorConstants } from '../../constants/errors.constants';

export default {
  name: 'OverflowWindow',
  data() {
    return {
      display: false,
      left: 0,
      top: 0,
      width: 0,
      height: 0
    };
  },
  computed: {
    style() {
      return {
        top: this.top + 'px',
        left: this.left + 'px',
        width: this.width ? this.width + 'px': 'auto',
        height: this.height ? this.height + 'px': 'auto'
      };
    }
  },
  methods: {
    open(position) {
      if (typeof position.top !== 'number') {
        throw ErrorConstants.INVALID_TYPE_NUMBER;
      }
      if (typeof position.left !== 'number') {
        throw ErrorConstants.INVALID_TYPE_NUMBER;
      }
      if (position.width && typeof position.width !== 'number') {
        throw ErrorConstants.INVALID_TYPE_NUMBER;
      }
      if (position.height && typeof position.height !== 'number') {
        throw ErrorConstants.INVALID_TYPE_NUMBER;
      }

      this.top = position.top;
      this.left = position.left;
      this.width = position.width;
      this.height = position.height;
      this.display = true;
    },
    close() {
      this.display = false;
      this.top = 0;
      this.left = 0;
      this.width = 0;
      this.height = 0;
    }
  }
}
</script>
<style scoped>
  .background {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .window {
    position: absolute;
    background-color: var(--background-color);
    border-radius: 0.2rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
</style>
