<template>
    <div class="akk-pdf-viewer" v-on:scroll="scrollInPdf" ref="mainContainer">
        <div class="akk-pdf-loading" v-if="loading && !message">
            <pulse-loader :loading="loading" ></pulse-loader>
        </div>
        <vuescroll :ops="ops" class="akk-pdf-content" v-else>
            <div class="progress" v-if="loadedRatio > 0 && loadedRatio < 1">
                <div
                    :aria-valuenow="loadedRatio * 100"
                    :style="{ width: loadedRatio * 100 + '%' }"
                    aria-valuemax="100"
                    aria-valuemin="0"
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                ></div>
            </div>

            <div
                :key="i"
                class="akk-pdf-canvas"
                ref="pdfCanvas"
                v-for="i in numPages"
            >
                <pdf
                    :id="`akk-pdf-page-${i}`"
                    :page="i"
                    :rotate="rotate"
                    :src="src"
                    @link-clicked="page = $event"
                    @progress="loadedRatio = $event"
                    ref="pdf"
                ></pdf>
            </div>
        </vuescroll>

        <div class="akk-pdf-error" v-if="message">
            <svg
                height="128"
                viewBox="0 0 128 128"
                width="128"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g fill="none" fill-rule="evenodd">
                    <path
                        d="m87 102 3.5 5.25-2.5 3.75-3.5-5.25zm-12 0 3.5 5.25-2.5 3.75-3.5-5.25zm-12 0 3.5 5.25-2.5 3.75-3.5-5.25zm-12 0 3.5 5.25-2.5 3.75-3.5-5.25zm-12 0 3.5 5.25-2.5 3.75-3.5-5.25zm25-71c19.882251 0 36 16.117749 36 36v42c0 .645453-.0169864 1.286938-.0505367 1.924034l-5.9494633-8.924034-1 1.5v-36.5c0-18.7012521-14.25984-34.0719401-32.4994394-35.8319833 1.1513984-.111181 2.3187815-.1680167 3.4994394-.1680167zm-36 72.5 2.5 3.75-2.449 3.674-.0266344-.587053c-.0161968-.443647-.0243656-.889343-.0243656-1.336947z"
                        fill="#f5f5f5"
                    />
                    <path
                        d="m29 107.697575 4.9999767-7.500386 6.0000233 9.000035 6-9 6 9 6-9 6 9 6-9 6 9 6-9 6 9 5.9999925-8.999988 5.0000075 7.499875v-40.697111c0-9.6649831-3.9175084-18.4149831-10.2512627-24.7487373-6.3337542-6.3337543-15.0837542-10.2512627-24.7487373-10.2512627s-18.4149831 3.9175084-24.7487373 10.2512627c-6.3337543 6.3337542-10.2512627 15.0837542-10.2512627 24.7487373z"
                        stroke="#000"
                        stroke-width="2"
                    />
                    <rect
                        fill="#000"
                        height="4"
                        rx="2"
                        width="22"
                        x="53"
                        y="86"
                    />
                    <rect
                        fill="#000"
                        height="4"
                        rx="2"
                        width="10"
                        x="40"
                        y="77"
                    />
                    <rect
                        fill="#000"
                        height="4"
                        rx="2"
                        width="10"
                        x="78"
                        y="77"
                    />
                    <g fill="#ccc">
                        <path
                            d="m24 20c0 4.9705627 4.0294373 9 9 9 .536787 0 1.062598-.0469934 1.5735435-.1370907-1.6003862 2.4888038-4.3944758 4.1370907-7.5735435 4.1370907-4.9705627 0-9-4.0294373-9-9 0-4.4337758 3.2061271-8.1187205 7.4264565-8.8629093-.9030194 1.4021744-1.4264565 3.0714142-1.4264565 4.8629093z"
                        />
                        <path
                            d="m76.5 19.25-2.0572484 1.0815595.3928995-2.2907798-1.6643489-1.6223392 2.3000736-.3342202 1.0286242-2.0842203 1.0286242 2.0842203 2.3000736.3342202-1.6643489 1.6223392.3928995 2.2907798z"
                        />
                        <path
                            d="m105.5 47.25-2.057248 1.0815595.392899-2.2907798-1.664349-1.6223392 2.300074-.3342202 1.028624-2.0842203 1.028624 2.0842203 2.300074.3342202-1.664349 1.6223392.392899 2.2907798z"
                        />
                        <path
                            d="m108.5 19.75-4.996175 2.6266445.954185-5.5633223-4.04199-3.9399667 5.585893-.8116777 2.498087-5.0616778 2.498087 5.0616778 5.585893.8116777-4.04199 3.9399667.954185 5.5633223z"
                        />
                        <path
                            d="m16.5 58.25-2.0572484 1.0815595.3928995-2.2907798-1.6643489-1.6223392 2.3000736-.3342202 1.0286242-2.0842203 1.0286242 2.0842203 2.3000736.3342202-1.6643489 1.6223392.3928995 2.2907798z"
                        />
                    </g>
                </g>
            </svg>
            <div class="akk-pdf-error-message">
                <span v-html="message"></span>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Ref, Vue, Watch } from 'vue-property-decorator';
import pdf from 'vue-pdf';
import vuescroll from 'vuescroll';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'


const defaultZoom: number = 800;

@Component({
    components: {
        pdf,
        vuescroll,
        PulseLoader
    },
})
export default class AkkPdfViewer extends Vue {
    @Prop({ type: String, required: true }) readonly srcPdf!: string;
    @Prop({ default: false }) readonly withTools!: boolean;
    @Prop({ default: '#1D189C' }) readonly colorScroll!: string;
    @Prop({ default: false }) readonly zoomable!: boolean;

    @Ref() readonly pdfCanvas!: Array<HTMLDivElement> | undefined;
    @Ref() readonly mainContainer!: HTMLDivElement | undefined;

    src: any = null;
    loadedRatio: number = 0;
    page: number = 1;
    numPages: number = 0;
    rotate: number = 0;
    zoom: number = defaultZoom;
    message: string = null;
    loading: boolean = false;

    ops: object = {};

    @Watch('src', { immediate: true })
    async onSrcChanged() {
        this.loading = true;
        try {
            if (
                this.src &&
                this.src.promise &&
                this.src.promise instanceof Promise
            ) {
                const pdf = await this.src.promise;
                this.message = null;
                this.numPages = pdf.numPages;
                this.loading = false;
            }
        } catch (err) {
            this.message = 'Erreur de chargement du PDF.';
            console.log(err);
        }
    }

    created(): void {
        this.src = pdf.createLoadingTask(this.srcPdf);

        this.ops = {
            ...this.ops,
            vuescroll: {
                mode: this.zoomable ? 'slide' : 'native',
                zooming: this.zoomable
            },
            pullRefresh: {
                enable: true
            },
            pushLoad: {
                enable: true,
                auto: true,
                autoLoadDistance: 10
            },
            bar: {
                background: this.colorScroll
            }
        }
    }

    zoomPdf(zoomVal: number): void {
        let pdfArray = document.getElementsByClassName(
            'akk-pdf-canvas'
        ) as HTMLCollectionOf<HTMLElement>;

        pdfArray[0].getBoundingClientRect();

        if (zoomVal > 0) {
            this.zoom =
                (((100 * this.zoom) / defaultZoom + 25) * defaultZoom) / 100;

            for (let i = 0; i < pdfArray.length; i++) {
                pdfArray[i].style['width'] = `${this.zoom}px`;
            }
            return;
        } else {
            if((((100 * this.zoom) / defaultZoom - 25) * defaultZoom) / 100 > 200) {

                this.zoom =
                    (((100 * this.zoom) / defaultZoom - 25) * defaultZoom) / 100;

                for (let i = 0; i < pdfArray.length; i++) {
                    pdfArray[i].style['width'] = `${this.zoom}px`;
                }
                return;
            }
        }
    }

    zoomIn() {
        this.zoomPdf(1);
    }
    zoomOut() {
        this.zoomPdf(-1);
    }

    scrollInPdf(): void {
        if (!this.mainContainer) {
            return;
        }
        let totalHeight: number = this.mainContainer.scrollHeight;
        let userScroll: number = this.mainContainer.scrollTop;

        this.page = Math.trunc((userScroll * this.numPages) / totalHeight) + 1;
    }

    changePage(page: number) {
        if (!this.pdfCanvas) {
            return;
        }
        if (page <= 0) page = 1;
        if (page > this.numPages) page = this.numPages;
        this.page = page;

        this.pdfCanvas[this.page - 1].scrollIntoView({
            behavior: 'smooth',
        });
    }

    changeSrc(src: string){
        this.src = pdf.createLoadingTask(src);;
    }
}
</script>
<style lang="scss">
.akk-pdf-viewer {
    position: relative;
    width: 100%;
    height: 100%;
    font-family: Helvetica, Arial, sans-serif;
    overflow: hidden;
}
.akk-pdf-loading,
.akk-pdf-error {
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.akk-pdf-content {
}

.akk-pdf-canvas {
    display: block;
    height: 100vh;
    width: 100vh;
    user-select: none;
    margin: 20px auto;
}
.akk-pdf-error-message {
    font-weight: 600;
    color: red;
}
</style>
