<bottom/>

```html
<body>
  <article>
    <div class="poem">
      ...
    </div>
  </article>
  <footer>The bottom is always at the end of the document, followed when the document is longer, and at the bottom of the window when the document is shorter.</footer>
</body>
```
```scss
html, body{
  height:100%;
}
article {
  min-height: 100%;
  .poem {
    padding-bottom: 64px;
    zoom: 1;
  }
}
footer {
  padding: 10px;
  margin-top: -64px;
}
```
