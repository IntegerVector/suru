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
  min-width: 2rem;
  cursor: pointer;
  font-size: var(--text-size--regular);
  font-family: var(--text-font--regular);
  border-radius: 0.2rem;
  border: 0 solid transparent;
  outline: none;
}

.editable-text__input:focus {
  border: 0.2rem solid var(--focus-color);
}
</style>
