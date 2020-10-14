<template>
  <div class="checkbox">
    <input
      class="checkbox__hidden-input"
      type="checkbox"
      :value="checked">
    <span
      class="checkbox__visible-input"
      :class="getStateClass()"
      :title="getTitle()"
      @click="onClicked()">
      {{ checked ? '✔' : '&nbsp;' }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'checkbox',
  props: {
    modelValue: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  data() {
    return {
      checked: this.modelValue
    };
  },
  methods: {
    getTitle() {
      return this.checked
        ? 'mark task as undone'
        : 'mark task as done';
    },
    getStateClass() {
      return this.checked
        ? 'checkbox--checked'
        : 'checkbox--unchecked';
    },
    onClicked() {
      this.checked = !this.checked;
      this.$emit('change', this.checked);
    }
  }
}
</script>

<style scoped>
.checkbox {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1rem;
  height: 1rem;
  user-select: none;
  font-size: x-large;
}

.checkbox__hidden-input {
  display: block;
  visibility: unset;
  width: 1px;
  height: 0;
}

.checkbox__hidden-input:focus + .checkbox__visible-input {
  transition: background-color var(--focus-speed);
  border: 0.2rem solid var(--focus-color);
}

.checkbox__visible-input {
  display: block;
  width: 1rem;
  height: 1rem;
  min-width: 1rem;
  min-height: 1rem;
  text-align: center;
  cursor: pointer;
}

.checkbox--checked, .checkbox--unchecked {
  transition: background-color var(--transition-speed),
    border-color var(--transition-speed);
  color: var(--text-color--light);
  border: 0.1rem solid;
  border-radius: 0.2rem;
}

.checkbox--checked {
  background-color: var(--main-color--active);
  border-color: var(--main-color--active);
}

.checkbox--unchecked {
  background-color: var(--main-color--inactive);
  border-color: var(--main-color--inactive);
}
</style>
