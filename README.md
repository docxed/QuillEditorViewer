# QuillEditorViewer

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/NAPATKRUP/QuillEditorViewer/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/quill-editor-viewer.svg?style=flat)](https://www.npmjs.com/package/quill-editor-viewer)

QuillEditorViewer component for Vue.js and Nuxt.js.

<img src="https://github.com/NAPATKRUP/QuillEditorViewer/blob/main/src/assets/demo.png">

[Demo Source Code](https://github.com/NAPATKRUP/QuillEditorViewer/blob/main/src/App.vue 'Demo Source Code')


## Installation

```shell
npm install quill-editor-viewer

or

yarn add quill-editor-viewer
```

```js
import Vue from 'vue'
import QuillEditorViewer from 'quill-editor-viewer'
// (Optional) import 'quill-editor-viewer/src/styles/index.css'

Vue.use(QuillEditorViewer)
```


## Usage

Once installed, it can be used in a template as simply as:

```html
<div id="app">
    <h1>Editor</h1>
    <v-quill-editor v-model="htmlData" :imageUploader="imageUploader" />

    <h1>Viewer</h1>
    <v-quill-viewer :data="htmlData" />
</div>
```

## Properties

### Quill Editor
| Name             | Type        | Default Value | Description                                              |
| ---------------- | ----------- | ------------- | -------------------------------------------------------- |
| htmlData (model) | String      |               | HTML Data.                                               |
| isMobile         | Boolean     |     false     | For mobile view.                                         |
| imageUploader    | Function    |               | Upload image function { upload: () => String }.          |

### Quill Viewer
| Name             | Type        | Default Value | Description                                              |
| ---------------- | ----------- | ------------- | -------------------------------------------------------- |
| data             | String      |               | HTML Data.                                               |


## Events

| Name  | Arguments           | Description             |
| ----- | ------------------- | ----------------------- |
| input | value (String) | The updated bound model |

## Thanks
This project is based on quill, quill-magic-url, quill-image-uploader, vue-quill-editor thanks!
