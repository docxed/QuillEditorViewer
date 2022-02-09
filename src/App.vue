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
                "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg"
              );
            }, 1000);
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
