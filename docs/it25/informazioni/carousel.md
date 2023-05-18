---
layout: it25_docs
splide: true
title: Carousel
group: informazioni
toc: yes
---

Il **Carosello** non normalizza automaticamente le dimensioni della diapositiva, pertanto è necessario un ridimensionamento.  
All’interno del carosello è prevista una **hero image** di background, una card che può avere un titolo, un paragrafo e una call to action.  
E’ possibile avere anche solo un titolo ed un paragrafo.

<div class="bd-example">
{% include html_docs/carousel/carousel_singolo.html %}
</div>

```html
<div class="it-carousel-wrapper it-carousel-landscape-abstract it-big-img it25-hero splide" data-bs-carousel-splide>
  <div class="splide__track">
    <ul class="splide__list it-carousel-all">
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          include html_docs/cards/card.html
        </div>
      </li>
      . . .
    </ul>
  </div>
</div>
```

### Carosello con hero

Nella versione del carosello con hero image è possibile visualizzare un’immagine di background ed al suo interno una card realizzata con le specifiche descritte sopra.

<div class="bd-example">
{% include html_docs/carousel/carousel_hero_semplice.html  %}
</div>

```html
<div
  class="it-carousel-wrapper it-carousel-landscape-abstract it-big-img it25-hero splide"
  data-bs-carousel-splide
  style="background-image: url('{{site_baseurl}}/dist/assets/img/bike-sharing.jpg'); background-size: cover"
>
  <div class="splide__track">
    <ul class="splide__list it-carousel-all">
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          include html_docs/cards/card.html
        </div>
      </li>
      . . .
    </ul>
  </div>
</div>
```

#### Con frecce

<div class="bd-example">
{% include html_docs/carousel/carousel_hero_arrow.html  %}
</div>

```html
<div
  class="it-carousel-wrapper it-carousel-landscape-abstract-arrow it-big-img it25-hero splide"
  data-bs-carousel-splide
  style="background-image: url('{{site_baseurl}}/dist/assets/img/bike-sharing.jpg'); background-size: cover"
>
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
         include html_docs/cards/card.html
        </div>
      </li>
      . . .
    </ul>
  </div>
</div>
```

#### Con blocco allineato a sinistra

<div class="bd-example">
{% include html_docs/carousel/carousel.html  %}
</div>

```html
<div
  class="it-carousel-wrapper it-carousel-landscape-abstract it25-special splide"
  data-bs-carousel-splide
  style="background-image: url('{{site_baseurl}}/dist/assets/img/bike-sharing.jpg'); background-size: cover"
>
  <div class="splide__track">
    <ul class="splide__list it-carousel-all">
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
         include html_docs/cards/card.html
        </div>
      </li>
      . . .
    </ul>
  </div>
</div>
```

---

### Galleria

Nella versione galleria è possibile visualizzare una serie di contenuti che scorrono.  
Generalmente questa componente viene utilizzata nel body di una pagina, non come hero content.

<div class="bd-example ">
{% include html_docs/carousel/gallery.html %}
</div>

```html
<div class="neutral-1-bg it-carousel-wrapper it-carousel-landscape-abstract-two-cols splide it25-gallery" data-bs-carousel-splide>
  <div class="it-header-block">
    <div class="it-header-block-title text-center">
      <span class="h2 white-color border-0">Galleria</span>
    </div>
  </div>
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card card-img no-after it25-image-content">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper">
                    <img src="{{site_baseurl}}/dist/assets/img/bike-sharing.jpg" title="titolo immagine" alt="descrizione immagine" />
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="fs-6">Foto</div>
                <div class="card-title p-1">Lorem Ipsum et caem abemis et caem</div>
              </div>
            </div>
          </div>
        </div>
      </li>
      . . .
    </ul>
  </div>
</div>
```
