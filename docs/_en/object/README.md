<objectTemp/>

## Concept
`object-fit` and `object-position` can think of it as `background-size` and `background-position`.

This two attributes can only operate on replaced element.

Replaced element:

> In CSS, a replaced element is an element whose representation is outside the scope of CSS; they're external objects whose representation is independent of the CSS formatting model.
> Put in simpler terms, they're elements whose contents are not affected by the current document's styles. The position of the replaced element can be affected using CSS, but not the contents of the replaced element itself. Some replaced elements, such as `<iframe>` elements, may have stylesheets of their own, but they don't inherit the styles of the parent document.
> The only other impact CSS can have on a replaced element is that there are properties which support controlling the positioning of the element's content within its box. 

## Apply

When the container is fixed and the size of the picture is uncertain, or when the responsive layout is needed, the picture is fixed and the width of the container is uncertain, equal proportion of the picture or video is required.

::: danger
IE full version does not support, edge16+ support, PC with caution
:::



