<template>
  <div id="app">
    <h1>Editor</h1>
    <v-quill-editor v-model="htmlData" :imageUploader="imageUploader" />

    <h1>Viewer</h1>
    <v-quill-viewer :data="htmlData" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      htmlData: "",
      imageUploader: {
        upload: (file) => {
          console.log(file);
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png"
              );
            }, 3500);
          });
        },
      },
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
