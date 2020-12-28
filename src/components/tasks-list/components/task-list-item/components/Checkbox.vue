<template>
  <div class="checkbox">
    <input
      class="checkbox__hidden-input"
      type="checkbox"
      v-model="checked">
    <span
      v-if="!checked"
      class="checkbox__visible-input"
      :class="getStateClass()"
      :title="getTitle()"
      @click="onClicked()">
      &nbsp;
    </span>
    <img
      v-if="checked"
      src="/icons/checked.svg"
      alt="done"
      class="checkbox__visible-input"
      :class="getStateClass()"
      :title="getTitle()"
      @click="onClicked()">
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
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
      this.$emit('update:modelValue', this.checked);
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
}

.checkbox__hidden-input {
  visibility: visible;
  opacity: 0;
  height: 0;
}

.checkbox__hidden-input:focus + .checkbox__visible-input {
  transition: background-color var(--focus-speed);
  border: 0.2rem solid var(--focus-color);
}

.checkbox__visible-input {
  width: 1rem;
  height: 1rem;
  min-width: 1rem;
  min-height: 1rem;
  cursor: pointer;
}

.checkbox--checked, .checkbox--unchecked {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
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

.checkbox--checked:hover {
  border-color: var(--main-color--hover);
  background-color: var(--main-color--hover);
}

.checkbox--unchecked {
  background-color: var(--main-color--inactive);
  border-color: var(--main-color--inactive);
}
</style>
