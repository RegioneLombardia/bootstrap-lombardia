---
layout: it25_docs
splide: true
title: Carousel
group: informazioni
toc: yes
---

Il **Carosello** non normalizza automaticamente le dimensioni della diapositiva, pertanto è necessario un ridimensionamento. All’interno del carosello è prevista una **hero image** di background, una card che può avere un titolo, un paragrafo e una call to action. E’ possibile avere anche solo un titolo ed un paragrafo.

<div class="bd-example">
{% include html_docs/carousel/carousel_singolo.html %}
</div>

```html
{% include html_docs/carousel/carousel_singolo.html %}
```

### Carosello con hero

Nella versione del carosello con hero image è possibile visualizzare un’immagine di background ed al suo interno una card realizzata con le specifiche descritte sopra.

<div class="bd-example">
{% include html_docs/carousel/carousel_hero_semplice.html  %}
</div>

```html
{% include html_docs/carousel/carousel_hero_semplice.html %}
```

<div class="bd-example">
{% include html_docs/carousel/carousel_hero_arrow.html  %}
</div>

```html
{% include html_docs/carousel/carousel_hero_arrow.html %}
```

<div class="bd-example">
{% include html_docs/carousel/carousel.html  %}
</div>

```html
{% include html_docs/carousel/carousel.html %}
```

### Galleria

Nella versione galleria è possibile visualizzare una serie di contenuti che scorrono. Generalmente questa componente viene utilizzata nel body di una pagina, non come hero content.

<div class="bd-example ">
{% include html_docs/carousel/gallery.html %}
</div>

```html
{% include html_docs/carousel/gallery.html %}
```
