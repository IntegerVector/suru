<template>
  <div class="editable-text">
    <input
      class="editable-text__input"
      type="text"
      v-model="text"
      @change="emitChanges"
      @blur="emitChanges">
  </div>
</template>

<script>
export default {
  name: 'EditableText',
  props: {
    modelValue: String
  },
  data() {
    return {
      text: this.modelValue,
      debounce: null
    };
  },
  methods: {
    emitChanges() {
      this.$emit('update:modelValue', this.text);
    }
  }
}
</script>

<style scoped>
.editable-text {
  display: flex;
  align-items: center;
}

.editable-text__input {
  flex-grow: 1;
  max-width: 100%;
  cursor: pointer;
  font-size: var(--text-size--regular);
  font-family: var(--text-font--regular);
  border-radius: 0.1rem;
  border: 0.15rem solid transparent;
  outline: none;
  transition: border var(--transition-speed);
}

.editable-text__input:focus {
  border-bottom: 0.15rem solid var(--focus-color);
}
</style>
