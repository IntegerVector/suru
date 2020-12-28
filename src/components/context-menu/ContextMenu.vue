<template>
  <div class="context-menu">
    <OverflowWindow ref="oWindow">
      <ul class="context-menu__list">
        <slot></slot>
      </ul>
    </OverflowWindow>
  </div>
</template>
<script>
import OverflowWindow from '../overflow-window/OverflowWindow';

export default {
  name: 'ContextMenu',
  components: {
    OverflowWindow
  },
  methods: {
    open(top, left) {
      this.$refs.oWindow.open({
        top,
        left
      });
    },
    close() {
      this.$refs.oWindow.close();
    }
  }
}
</script>
<style>
  .context-menu__list {
    list-style-type: none;
    display: flex;
    flex-direction: column;
  }

  .context-menu__list > * {
    user-select: none;
    outline: none;
    cursor: pointer;
    font-family: var(--text-font--regular);
    font-size: var(--text-size--regular);
    color: var(--text-color);
    padding: 0.2rem 0.4rem 0.2rem 0.4rem;
  }

  .context-menu__list > *:hover {
    background-color: var(--background-color--hover);
  }
</style>
