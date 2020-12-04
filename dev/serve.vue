<script lang="ts">
import Vue from 'vue';
import AkkuratePdfViewer from '@/akkurate-pdf-viewer.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    AkkuratePdfViewer
  }
});
</script>

<template>
  <div id="app" style="height: 80%; width: 80%; position: absolute">
    <akkurate-pdf-viewer src-pdf="https://info.sio2.be/tdtooo/sostdt.pdf"  />
  </div>
</template>
