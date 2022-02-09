<template>
  <div class="ql-snow">
    <div v-html="data" class="ql-editor" />
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: String,
      default: '',
    }, // HTML Data
  },
};
</script>
