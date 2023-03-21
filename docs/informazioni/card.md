---
layout: docs
title: Card
group: informazioni
toc: yes
---

{% capture callout %}

#### <svg class="icon icon-danger icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close-circle"></use></svg> Larghezza della Card

Il `div` con classe `card` è responsivo, ha l'attributo `width` impostato a 100%, quindi tende ad occupare tutta la larghezza disponibile.

Negli esempi qui sotto, dove una card è mostrata singolarmente, per motivi puramente estetici è stata impostata una **larghezza fissa in pixel**. Normalmente invece **NON DEVE MAI ESSERE IMPOSTATA**.

**Una card va inserita in una griglia** e saranno le colonne di questa a limitarne le dimensioni, **oppure in un layout** come quelli mostrati nella seconda parte di questa pagina, che determineranno dimensioni e modalità con cui le card inserite in essi appariranno sullo schermo.
{% endcapture %}{% include callout.html content=callout type="danger" %}

## Tipi di card

Sono mostrati alcuni tipi di card dei molti ottenibili combinando le varie parti predisposte per costruirle:

- body
- title
- immagine
- liste
- header
- footer

Naturalmente è possibile ottenere ulteriori tipi di card con combinazioni diverse di questi elementi, ma in ogni caso dovrebbero esserci sempre un titolo, un paragrafo di testo `<p>...</p>`, e almeno un link o un bottone.

{% capture callout %}

#### <svg class="icon icon-warning icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-warning-circle"></use></svg> Bootstrap 4

Le **Card** di _Bootstrap Regione Lombardia_ sono graficamente più simili a quelle di **Bootstrap 4** che a quelle di Boostrap Italia.

Per la documentazione tecnica è quindi meglio fare riferimento principalmente alla **[documentazione originale di Bootstrap 4](https://getbootstrap.com/docs/4.0/components/card/)** (in inglese) e solo secondariamente a quella di Bootstrap Italia.
{% endcapture %}{% include callout.html content=callout type="warning" %}

### Semplice

<div class="bd-example">
  <div style="width: 18rem;">
    {% include esempi-lombardia/card_semplice.html %}
  </div>
</div>

{% highlight html %}
{% include esempi-lombardia/card_semplice.html %}
{% endhighlight %}

### con Foto

L'immagine è inserita in due `div` annidati con classi: `img-responsive-wrapper`, `img-responsive` e un tag `figure` con classe `img-wrapper`.  
Ciò, oltre a rendere l'immagine responsiva, la ritaglia in formato _16/9_, cercando di centrarla, qualora, come in questo caso, l'originale sia in formato _4/3_.

Naturalmente ritaglio e centratura automatici funzionano **entro certi limiti**. Qualora la resa non sia adeguata sarà opportuno ritagliare la foto manualmente.

<div class="bd-example">
  <div style="width: 25rem;">
    {% include esempi-lombardia/card_con_foto.html %}
  </div>
</div>

{% highlight html %}
{% include esempi-lombardia/card_con_foto.html %}
{% endhighlight %}

### con Link-list

Qui l'immagine è semplicemente all'interno del `div` della _card_, senza nessun _wrapper_, ma il tag `img` ha classe `card-im-top`.  
Ciò rende l'immagine responsiva ma la lascia nelle proporzioni originali.

La differenza risulta particolarmente evidente nell'ultimo esempio del **[layout card-deck](#card-deck)**, in fondo a questa pagina.

<div class="bd-example">
  <div style="width: 14rem;">
    {% include esempi-lombardia/card_link-list.html %}
  </div>
</div>

{% highlight html %}
{% include esempi-lombardia/card_link-list.html %}
{% endhighlight %}

### con Bottone

<div class="bd-example">
  <div style="width: 22rem;">
    {% include esempi-lombardia/card_bottone.html %}
  </div>
</div>

{% highlight html %}
{% include esempi-lombardia/card_bottone.html %}
{% endhighlight %}

### con Header

<div class="bd-example">
  <div style="width: 20rem;">
    {% include esempi-lombardia/card_header.html %}
  </div>
</div>

{% highlight html %}
{% include esempi-lombardia/card_header.html %}
{% endhighlight %}

## Layout

### Masonry

Aggiungendo `data-bs-toggle="masonry"` al contenitore `row`, verrà attivato l’effetto Masonry sulla griglia responsiva.

<div class="bd-example">
    <div class="row it-masonry" data-bs-toggle="masonry">
        <div class="col-sm-6 col-lg-4 mb-4">
        {% include esempi-lombardia/card_semplice.html %}
        </div>
        <div class="col-sm-6 col-lg-4 mb-4">
        {% include esempi-lombardia/card_con_foto.html %} 
        </div>
        <div class="col-sm-6 col-lg-4 mb-4">
        {% include esempi-lombardia/card_link-list.html %}
        </div>
        <div class="col-sm-6 col-lg-4 mb-4">
        {% include esempi-lombardia/card_bottone.html %}
        </div>
        <div class="col-sm-6 col-lg-4 mb-4">
        {% include esempi-lombardia/card_header.html %}
        </div>
  </div>
</div>

{% highlight html %}

<div class="row it-masonry" data-bs-toggle="masonry">
    <div class="col-sm-6 col-lg-4 mb-4">
      {% include esempi-lombardia/card_semplice.html %}
    </div>
    <div class="col-sm-6 col-lg-4 mb-4">
      {% include esempi-lombardia/card_con_foto.html %} 
    </div>
    <div class="col-sm-6 col-lg-4 mb-4">
      {% include esempi-lombardia/card_link-list.html %}
    </div>
    <div class="col-sm-6 col-lg-4 mb-4">
      {% include esempi-lombardia/card_bottone.html %}
    </div>
    <div class="col-sm-6 col-lg-4 mb-4">
      {% include esempi-lombardia/card_header.html %}
    </div>
  </div>
{% endhighlight %}

### Abilitare Masonry via JavaScript
È possibile abilitare Masonry manualmente utilizzando questo script:
{% highlight html %}
<script>
  var elementList = [].slice.call(document.querySelectorAll('.it-masonry'))
  var masonryList = elementList.map(function (element) {
    return new bootstrap.Masonry(element)
  })
</script>
{% endhighlight %}

<!-- ### card-deck
Questo layout rende le card al suo interno, tutte della stessa altezza.
E' bene inserire 2 o 3 card in ognuno, e possibilmente di tipologia omogenea, perché lo spazio occupato non viene ottimizzato come capita per il *card-columns*.


#### esempio con card testuali

<div class="bd-example">
  <div class="card-deck">
    {% include esempi-lombardia/card_semplice.html %}
    {% include esempi-lombardia/card_bottone.html %}
    {% include esempi-lombardia/card_header.html %}
  </div>
</div>

{% highlight html %}
<div class="card-deck">
 include esempi-lombardia/card_semplice.html
 include esempi-lombardia/card_bottone.html
 include esempi-lombardia/card_header.html
</div>
{% endhighlight %} -->

<!-- #### esempio con card con immagine

<div class="bd-example">
  <div class="card-deck">
    {% include esempi-lombardia/card_con_foto.html %}
    {% include esempi-lombardia/card_link-list.html %}
  </div>
</div>

{% highlight html %}
<div class="card-deck">
  include esempi-lombardia/card_con_foto.html
  include esempi-lombardia/card_link-list.html
</div>
{% endhighlight %}



#### card-deck su più righe
In questo esempio sono stati usati due `card-deck` consecutivi e la classe `my-3` per distanziare le card verticalmente.

<div class="bd-example">
  <div class="card-deck my-3">
    {% include esempi-lombardia/card_semplice.html %}
    {% include esempi-lombardia/card_bottone.html %}
    {% include esempi-lombardia/card_header.html %}
  </div>
  <div class="card-deck my-3">
    {% include esempi-lombardia/card_con_foto.html %}
    {% include esempi-lombardia/card_link-list.html %}
  </div>
</div>

{% highlight html %}
<div class="card-deck my-3">
  include esempi-lombardia/card_semplice.html
  include esempi-lombardia/card_bottone.html
  include esempi-lombardia/card_header.html
</div>
<div class="card-deck my-3">
  include esempi-lombardia/card_con_foto.html
  include esempi-lombardia/card_link-list.html
</div>
{% endhighlight %} -->

{% capture callout %}

#### <svg class="icon icon-info icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use></svg> Riferimenti

Il contenuto di questa pagina si riferisce ai seguenti punti della Documentazione di **Bootstrap 4**:

- **[Cards](https://getbootstrap.com/docs/4.0/components/card/)**
  {% endcapture %}{% include callout.html content=callout type="info" %}
