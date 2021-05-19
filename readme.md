# **Akkurate back components TS with VueJS**

## Install

On package.json -> dependencies

``` json
"akkurate-pdf-viewer": "git+ssh://git@github.com:akkurateio/akkurate-pdf-viewer.git"
```

## Usage

**<ins>Pdf Viewer</ins>**
```html
    <akk-pdf-viewer
        ref="pdf-viewer"
        src-pdf="src/example.pdf">
    </akk-pdf-viewer>
```

### To use zoom events

```js
    this.$ref['pdf-viewer'].zoomIn();
    this.$ref['pdf-viewer'].zoomOut();
    this.$ref['pdf-viewer'].changePage(3);
    this.$ref['pdf-viewer'].changeSrc(3);
```

Class CSS : 
```
akk-pdf-viewer
akk-pdf-loading
akk-pdf-error
akk-pdf-error-message
akk-pdf-content
akk-pdf-canvas
```