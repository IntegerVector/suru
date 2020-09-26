<template>
  <div class="editable-text">
    <input
      class="editable-text__input"
      v-if="mode === 'edit'"
      type="text">
    <span
      class="editable-text__lable"
      v-if="mode === 'view'"
      :title="text">
      {{ text }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'EditableText',
  props: {
    mode: String,
    text: String
  }
}
</script>

<style scoped>
.editable-text {

}

.editable-text__lable {

}

.editable-text__input {

}
</style>
