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
    <akkurate-pdf-viewer src-pdf="http://help.websico.net/fr/data/rawdata/exemple_pdf.pdf" :with-tools="true" />
  </div>
</template>
