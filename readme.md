# **Akkurate back components TS with VueJS**

##Usage

**<ins>Pdf Viewer</ins>**
```html
    <akk-pdf-viewer
        ref="pdf-viewer"
        src-pdf="src/example.pdf">
    </akk-pdf-viewer>
```

###To use zoom events

```js
    this.$ref['pdf-viewer'].zoomIn();
    this.$ref['pdf-viewer'].zoomOut();
```