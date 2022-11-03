/*
 * MIT License
 *
 * Copyright (c) 2022 Napat Arayawattanapong
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

import Quill from "quill";
import VueQuillEditor from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import MagicUrl from "quill-magic-url";
import ImageUploader from "quill-image-uploader";
import BlotFormatter from 'quill-blot-formatter';

import QuillEditor from "./components/QuillEditor";
import QuillViewer from "./components/QuillViewer";


const install = (Vue) => {
  console.log("Installing...");
  // Set Up
  Quill.register("modules/magicUrl", MagicUrl);
  Quill.register("modules/imageUploader", ImageUploader);
  Quill.register('modules/blotFormatter', BlotFormatter);
  Vue.use(VueQuillEditor);

  // Custom
  Vue.component("v-quill-editor", QuillEditor);
  Vue.component("v-quill-viewer", QuillViewer);
};

export default install;
