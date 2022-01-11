<script lang="ts">
import Vue from 'vue';
import AkkuratePdfViewer from '@/akkurate-pdf-viewer.vue';

export default Vue.extend({
    name: 'ServeDev',
    components: {
        AkkuratePdfViewer
    },
    data: () => {
        return {
            zoom: 100
        }
    },
    methods: {
        zoomIn() {
            this.$refs.pdfViewer.zoomIn();
            this.zoom = this.$refs.pdfViewer.zoom;
        },
        zoomOut() {
            this.$refs.pdfViewer.zoomOut();
            this.zoom = this.$refs.pdfViewer.zoom;
        }
    }
});
</script>

<template>
    <div id="app" style="height: 80%; width: 80%; position: absolute; background: #444444;">
        <button @click="zoomIn">PLUS</button>
        <span>{{ zoom }}</span>
        <button @click="zoomOut">MOINS</button>
        <akkurate-pdf-viewer src-pdf="https://info.sio2.be/tdtooo/sostdt.pdf" ref="pdfViewer"/>
    </div>
</template>
