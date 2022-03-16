<template>
  <quill-editor
    ref="editor"
    :value="value"
    :options="options"
    @change="$emit('input', $event.html)"
  />
</template>

<script>
const TOOLBAROPTIONS = [
  ["bold", "italic", "underline", "strike"],
  ["blockquote", "code-block"],
  [{ color: [] }, { background: [] }],
  [{ list: "ordered" }, { list: "bullet" }, { align: [] }],
  [{ indent: "-1" }, { indent: "+1" }],
  ["link", "image", "video"],
  [{ script: "sub" }, { script: "super" }],
  [{ font: [] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ size: ["small", false, "large", "huge"] }],
  ["clean"],
];

export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    isMobile: {
      type: Boolean,
      default: false
    },
    imageUploader: {
      type: Object,
      required: true,
    }, // Ref : https://github.com/NoelOConnell/quill-image-uploader
    toolbarItems: {
      type: Array,
      default: () => TOOLBAROPTIONS
    }
  },
  computed: {
    options() {
      return {
        theme: "snow",
        placeholder: "Detail",
        preserveWhitespace: false,
        modules: {
          toolbar: !this.isMobile
            ? this.toolbarItems
            : this.toolbarItems.flat(),
          magicUrl: {
            globalRegularExpression: /(https?:\/\/|www\.|tel:)[\S]+/g,
            mailRegularExpression: /([\w-.]+@[\w-.]+\.[\w-.]+)/gi,
            globalMailRegularExpression: /([\w-.]+@[\w-.]+\.[\w-.]+)/gi,
            normalizeUrlOptions: {
              stripHash: true,
              stripWWW: false,
              normalizeProtocol: false,
            },
          },
          imageUploader: this.imageUploader
        },
      }
    },
  },
};
</script>
