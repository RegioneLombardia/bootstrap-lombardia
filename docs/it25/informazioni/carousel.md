---
layout: it25_docs
splide: true
title: Carousel
group: informazioni
toc: yes
---

All’interno del *carosello* è prevista una **hero image** di background, una card che può avere un titolo, un paragrafo e una call to action.  
E’ possibile avere anche solo un titolo ed un paragrafo.

<div class="bd-example" style="background: #e5e5e5">
{% include html_docs/carousel/carousel.html %}
</div>

{% highlight html %}
<div class="it-carousel-wrapper splide it25-arrow-visible it25-hero" data-bs-carousel-splide>
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
{% endhighlight %}

### Carosello con hero

Nella versione del carosello con hero image è possibile visualizzare un’immagine di background ed al suo interno una card realizzata con le specifiche descritte sopra.

<div class="bd-example">
{% include html_docs/carousel/carousel_hero_arrow.html  %}
</div>

{% highlight html %}
<div class="it-carousel-wrapper splide it25-arrow-visible it25-hero"
  data-bs-carousel-splide
  style="background-image: url('{{site.baseurl}}/dist/assets/img/bike-sharing.jpg'); background-size: cover"
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
{% endhighlight %}


### Senza frecce

Basta aggiungere la classe `it25-arrows-no` sul *wrapper*.
<div class="bd-example">
{% include html_docs/carousel/carousel_hero_senza_frecce.html  %}
</div>

{% highlight html %}
<div class="it-carousel-wrapper splide it25-arrows-no it25-hero"
  data-bs-carousel-splide
  style="background-image: url('{{site.baseurl}}/dist/assets/img/bike-sharing.jpg'); background-size: cover"
>
{% endhighlight %}


### Con blocco allineato a sinistra

<div class="bd-example">
{% include html_docs/carousel/carousel_all_sx.html  %}
</div>

{% highlight html %}
<div class="it-carousel-wrapper splide it25-arrows-no it25-hero it25-left"
  data-bs-carousel-splide
  style="background-image: url('{{site.baseurl}}/dist/assets/img/bike-sharing.jpg'); background-size: cover"
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
{% endhighlight %}

---

### Galleria

Nella versione galleria è possibile visualizzare una serie di contenuti che scorrono.  
Generalmente questa componente viene utilizzata nel body di una pagina, non come hero content.

<div class="bd-example">
{% include html_docs/carousel/gallery.html %}
</div>

{% highlight html %}
<div
  class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols it-full-carousel it-big-img splide
  neutral-1-bg it25-gallery" data-bs-carousel-splide >
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
                    <img src="{{site.baseurl}}/dist/assets/img/bike-sharing.jpg" title="titolo immagine" alt="descrizione immagine" />
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
{% endhighlight %}
