---
layout: it25_docs
title: Card
group: informazioni
toc: yes
---

Le **Card** sono dei contenitori di contenuti ed azioni relative ad una data informazione.  
Possono accogliere un titolo, un paragrafo, un’immagine e una call to action formata da un link di grandezza variabile a seconda delle necessità, posizionato sempre in basso (lateralmente o al centro).

Le distanze dai margini sono date da uno spazio di **24 px in tutti i lati della card**.

Le card, adattabili e ridimensionabili, sono un elemento modulare che facilita la trasposizione responsive del design.

<div class="bd-example">
  <div class="row">
    <div class="col-12 col-lg-4">
      {% include html_docs/cards/card.html %}
    </div>
  </div>
</div>
{% highlight html %}
{% include html_docs/cards/card.html %}
{% endhighlight %}

<div class="row">
  <div class="col">
  {% include html_docs/cards/card.html %}
  </div>
  <div class="col">
  {% include html_docs/cards/card.html %}
  </div>
  <div class="col">
  {% include html_docs/cards/card.html %}
  </div>
</div>
<div class="row">
  <div class="col">
  {% include html_docs/cards/card.html %}
  </div>
  <div class="col">
  {% include html_docs/cards/card.html %}
  </div>
  <div class="col">
  {% include html_docs/cards/card.html %}
  </div>
</div>

---

### Card con foto

Nella versione con foto la metà dello spazio viene destinato ad un’immagine posizionata nella parte superiore della card.  
Per motivi di accessibilità, **il testo della card non deve essere mai posizionato sopra le immagini**.

<div class="bd-example">
  <div class="row">
    <div class="col">
    {% include html_docs/cards/card_immagine.html category=true %}
    </div>
    <div class="col">
    {% include html_docs/cards/card_immagine.html %}
    </div>
  </div>
</div>

{% highlight html %}
<div class="card-wrapper card-space">
  <div class="card card-bg">
    <div class="img-responsive-wrapper rounded-top">
      <div class="img-responsive">
        <figure class="img-wrapper">
          <img src="{{site.baseurl}}/dist/assets/img/bike-sharing.jpg" title="bike sharing" alt="parcheggio bike sharing a Milano" />
        </figure>
      </div>
    </div>
    <div class="card-body">
      <a class="category" href="#">Lorem ipsum</a>
      <p class="card-title h5">Dolor sit amet</p>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
</div>
{% endhighlight %}

---

### Card con link

Con la versione card con link è possibile avere dei sottolink in calce alla card.

<div class="bd-example">
  <div class="col-12 col-lg-4">
  {% include html_docs/cards/card_immagine.html linklist=true %}
  </div>
</div>

{% highlight html %}
<div class="card-wrapper card-space">
  <div class="card card-bg">
    <div class="img-responsive-wrapper rounded-top">
      <div class="img-responsive">
        <figure class="img-wrapper">
          <img src="{{site.baseurl}}/dist/assets/img/bike-sharing.jpg" title="bike sharing" alt="parcheggio bike sharing a Milano" />
        </figure>
      </div>
    </div>
    <div class="card-body">
      <p class="card-title h5">Dolor sit amet</p>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><a href="#">Cras justo odio</a></li>
        <li class="list-group-item"><a href="#">Dapibus ac facilisis in</a></li>
        <li class="list-group-item"><a href="#">Vestibulum at eros</a></li>
      </ul>
    </div>
  </div>
</div>
{% endhighlight %}

---

### Card con foto e call to action

All’interno delle card è possibile inserire anche una call-to action, con le modalità già spiegate e un testo di categorizzazione sopra la card.

<div class="bd-example">
  <div class="row">
    <div class="col">
      {% include html_docs/cards/card_immagine.html button=true %}
    </div>
    <div class="col">
      {% include html_docs/cards/card_con_header.html %}
    </div>
    <div class="col">
    {% include html_docs/cards/card.html %}
    </div>
  </div>
</div>
{% highlight html %}
{% include html_docs/cards/card_con_header.html %}
{% endhighlight %}

--- 

### Dimensionamento delle card
Negli esempi seguenti le card sono all’interno di una struttura colonnare di Bootstrap.

Se non si specifica la larghezza delle colonne, le card tenderanno ad occupare tutto lo spazio disponibile nella `row`.  
L'altezza di ogni card dipenderà dal suo contenuto. 
{% highlight html %}
  <div class="row">
    <div class="col">
    . . .
    </div>
    <div class="col">
    . . .
    </div>
    <div class="col">
    . . .
    </div>
  </div>
{% endhighlight %}

Specificando la larghezza delle colonne è possibile controllare la larghezza delle card.  
L'**altezza verrà parificata** su tutta la riga, e sarà uguale a quella della card con il contenuto maggiore.
{% highlight html %}
  <div class="row">
    <div class="col-12 col-lg-4">
    . . .
    </div>
    <div class="col-12 col-lg-4">
    . . .
    </div>
    <div class="col-12 col-lg-4">
    . . .
    </div>
  </div>
{% endhighlight %}
