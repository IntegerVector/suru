<template>
  <div
    class="context-menu"
    :style="style"
    @mouseleave="close()"
    v-show="display">
    <ul class="context-menu__items">
      <slot></slot>
    </ul>
  </div>
</template>
<script>
import { ErrorConstants } from '../../constants/errors.constants';

export default {
  name: 'ContextMenu',
  data() {
    return {
      display: false,
      left: 0,
      top: 0
    };
  },
  computed: {
    style() {
      return {
        top: this.top + 'px',
        left: this.left + 'px'
      };
    }
  },
  methods: {
    open(top, left) {
      if (typeof top !== 'number') {
        throw ErrorConstants.INVALID_TYPE_NUMBER;
      }
      if (typeof left !== 'number') {
        throw ErrorConstants.INVALID_TYPE_NUMBER;
      }

      this.top = top - 5;
      this.left = left - 5;
      this.display = true;
    },
    close() {
      this.display = false;
      this.top = 0;
      this.left = 0;
    }
  }
}
</script>
<style>
  .context-menu {
    position: fixed;
    user-select: none;
    outline: none;
    cursor: pointer;
    background-color: var(--background-color);
    border-radius: 0.2rem;
    color: var(--text-color);
    font-family: var(--text-font--regular);
    font-size: var(--text-size--regular);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  .context-menu__items {
    list-style-type: none;
    display: flex;
    flex-direction: column;
  }

  .context-menu__items > * {
    padding: 0.2rem 0.4rem 0.2rem 0.4rem;
  }

  .context-menu__items > *:hover {
    background-color: var(--background-color--hover);
  }
</style>
