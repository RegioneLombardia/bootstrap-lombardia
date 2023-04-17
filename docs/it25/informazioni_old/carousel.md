---
layout: it25_docs
splide: true
title: Carousel
group: informazioni
toc: yes
---

E' costituito da:
- uno spazio in cui scorre una **serie di card oppure di immagini**, eventualmente con una immagine di sfondo
- una fila di **punti cliccabili** che rappresentano gli elementi della serie evidenziando la posizione di quello visualizzato al momento e che permettono di saltare immediatamente ad uno qualsiasi di essi.

Facoltativamente può avere anche:
- una intestazione con il **titolo** della sequenza
- due **frecce** per avanzare o tornare indietro di un passo
- uno **scorrimento automatico** temporizzato


## Struttura
#### Contenitore principale
Un tag *div* con classi `it-carousel-wrapper` e `it-carousel-landscape-abstract-three-cols`.

#### Titolo
All'interno del *contenitore principale* può essere inserito un *div* di classe `it-header-block` ed il **testo** a sua volta inserito in un **ulteriore div** di classe `it-header-block-title`.

#### Contenitore delle card
Al di sotto dell'eventuale titolo, il *div* con le classi `it-carousel-all` e `owl-carousel`, in cui scorreranno le card o immagini, .

A queste possono essere aggiunte una serie di ulteriori classi utili per dimensionare e distanziare tra loro le card/immagini: `it-card-bg`, `it-img-card`, `it-big-img` e `it-standard-image`. Verranno spiegate poi nel dettaglio.

Sempre allo stesso *div* contenitore delle card/immagini possono essere applicate altre due classi, specifiche di *Bootstrap Regione Lombardia*: `it25-carousel-nav` e `it25-carousel-autoplay`.  
Servono rispettivamente a far comparire le **frecce di avanti/indietro** di un passo (di default non compaiono), e ad attivare lo **scorrimento automatico** ogni 5 secondi.

#### Serie di wrapper uno per ogni elemento
All'interno del *contenitore delle card*, un *div* di classe `it-single-slide-wrapper` per ogni *slide* della serie da far scorrere.  

A sua volta all'interno dei questo *wrapper* un **ulteriore div** di classe `card-wrapper`, **necessario** anche se il contenuto è in realtà un immagine.  
Eventualmente può essere agginta a questo anche la classe `card-space` per distanziare gli elementi tra di loro.


## Esempi

### Titolo e Card
<div class="bd-example">
  <div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols splide" data-bs-carousel-splide>
    <div class="it-header-block">
      <div class="it-header-block-title">
        <h2 class="no_toc">Titolo del Carousel</h2>
      </div>
    </div>  
    <div class="splide__track pl-lg-3 pr-lg-3">
      <ul class="splide__list it-carousel-all">
        <li class="splide__slide">
          <div class="it-single-slide-wrapper">
            <div class="card-wrapper card-space">
            {% include esempi-lombardia/card_semplice.html %}
            </div>
          </div>
        </li>
        <li class="splide__slide">
          <div class="it-single-slide-wrapper">
            <div class="card-wrapper card-space">
            {% include esempi-lombardia/card_bottone.html %}
            </div>
          </div>
        </li>
        <li class="splide__slide">
          <div class="it-single-slide-wrapper">
            <div class="card-wrapper card-space">
            {% include esempi-lombardia/card_header.html %}
            </div>
          </div>
        </li>
        <li class="splide__slide">
          <div class="it-single-slide-wrapper">
            <div class="card-wrapper card-space">
            {% include esempi-lombardia/card_semplice.html %}
            </div>
          </div>
        </li>
        <li class="splide__slide">
          <div class="it-single-slide-wrapper">
            <div class="card-wrapper card-space">
            {% include esempi-lombardia/card_bottone.html %}
            </div>
          </div>
        </li>
        <li class="splide__slide">
          <div class="it-single-slide-wrapper">
            <div class="card-wrapper card-space">
            {% include esempi-lombardia/card_header.html %}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
{% highlight html %}
<div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols splide" data-bs-carousel-splide>
  <div class="it-header-block">
    <div class="it-header-block-title">
      <h2 class="no_toc">Titolo del Carousel</h2>
    </div>
  </div>  
  <div class="splide__track pl-lg-3 pr-lg-3">
    <ul class="splide__list it-carousel-all">
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper card-space">
           {% include esempi-lombardia/card_semplice.html %} 
          </div>
        </div>
      </li>
      . . .
      . . .
    </ul>
  </div>
</div>
{% endhighlight %}

In questo esempio sono state usate in particolare le classi:
- `it-header-block` e `it-header-block-title` per i *div* nidificati contenenti il **titolo**
- `it-single-slide-wrapper` sul *div* del **contenitore delle card**
- `card-wrapper card-space` su **tutti** i *div* contenti le **singole card** per distanziarle tra loro.


### Immagini grandi
<div class="bd-example">
  <div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols it-full-carousel it-big-img splide it25-carousel-autoplay" data-bs-carousel-splide>
    <div class="splide__track">
      <ul class="splide__list">
        {% include esempi-lombardia/slides_splide.html %}
      </ul>
    </div>
  </div>
</div>
{% highlight html %}
<div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols it-full-carousel it-big-img splide it25-carousel-autoplay" data-bs-carousel-splide>
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card card-img ">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper">
                    <img src="{{ site.baseurl }}/dist/assets/img/bike-sharing.jpg" title="bike sharing" alt="parcheggio bike sharing a Milano">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>  
      . . .
      . . .
    </ul>
  </div>
</div>
{% endhighlight %}

In questo esempio sono state usate in particolare:
- sul *div* del **wrapper principale** la classe
  - `it-big-img` per ottenere una **dimensione grande delle immagini**
  - `it25-carousel-autoplay` per attivare lo **scorrimento automatico** delle immagini.
- su **tutti** i *div* di classe **card-wrapper** un **ulteriore div** con le classi
  - `card` e `card-img` per la **formattazione delle singole card immagine**

E' da notare che le immagini vengono **tagliate e riproporzionate automaticamente** in modo da avere tutte le stesse dimensioni.

### Immagini standard
<div class="bd-example">
  <div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols it-full-carousel it-standard-img splide" data-bs-carousel-splide>
    <div class="splide__track">
      <ul class="splide__list">
        {% include esempi-lombardia/slides_splide.html %}
      </ul>
    </div>
    <div class="splide__arrows d-flex justify-content-between">
      <button class="splide__arrow splide__arrow--prev btn btn-xs">
        <svg class="icon icon-lg icon-primary"><use href="/dist/svg/sprites.svg#it-arrow-left-triangle"></use></svg>
      </button>
      <button class="splide__arrow splide__arrow--next btn btn-xs">
        <svg class="icon icon-lg icon-primary"><use href="/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
      </button>
    </div>
  </div>
</div>
{% highlight html %}
<div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols it-full-carousel it-standard-img splide" data-bs-carousel-splide>
  <div class="splide__track">
    <ul class="splide__list">
        {% include esempi-lombardia/slides_splide.html %}
    </ul>
  </div>
  <div class="splide__arrows d-flex justify-content-between">
    <button class="splide__arrow splide__arrow--prev btn btn-xs">
      <svg class="icon icon-lg icon-primary"><use href="/dist/svg/sprites.svg#it-arrow-left-triangle"></use></svg>
    </button>
    <button class="splide__arrow splide__arrow--next btn btn-xs">
      <svg class="icon icon-lg icon-primary"><use href="/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
    </button>
  </div>
</div>
{% endhighlight %}

In questo esempio, rispetto al precedente, è stata usata, sul *div* del **contenitore delle card**, la classe:
- `it-standard-img` che dà **dimensioni inferiori alle immagini**, consentendo, su schermi grandi, di vederne 3 alla volta.

Inoltre, per far apparire le **frecce di avanzamento/ritorno**, l'html necessario è contenuto nel *div* di classe: `splide__arrows`

Si noti che i **punti** sotto le slide, su schermi grandi, sono **solo 2**, ed ognuno **scorre 3 immagini alla volta**, così come le frecce.  
**Su schermi piccoli invece i punti diventano 6**, e come le frecce, scorrono **una sola immagine** alla volta.


### Sfondo Immagine
<div class="bd-example">
  <div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols splide" data-bs-carousel-splide>
    <div class="it-header-block">
      <div class="it-header-block-title">
        <h2 class="no_toc">Titolo del Carousel</h2>
      </div>
    </div>  
    <div class="splide__track pl-lg-3 pr-lg-3"
        style='background-image: url("{{ site.baseurl }}/dist/assets/img/bike-sharing.jpg");
               background-size: cover;'>
      <ul class="splide__list it-carousel-all">
        <li class="splide__slide">
          <div class="it-single-slide-wrapper">
            <div class="card-wrapper card-space">
            {% include esempi-lombardia/card_semplice.html %}
            </div>
          </div>
        </li>
        <li class="splide__slide">
          <div class="it-single-slide-wrapper">
            <div class="card-wrapper card-space">
            {% include esempi-lombardia/card_bottone.html %}
            </div>
          </div>
        </li>
        <li class="splide__slide">
          <div class="it-single-slide-wrapper">
            <div class="card-wrapper card-space">
            {% include esempi-lombardia/card_header.html %}
            </div>
          </div>
        </li>
        <li class="splide__slide">
          <div class="it-single-slide-wrapper">
            <div class="card-wrapper card-space">
            {% include esempi-lombardia/card_semplice.html %}
            </div>
          </div>
        </li>
        <li class="splide__slide">
          <div class="it-single-slide-wrapper">
            <div class="card-wrapper card-space">
            {% include esempi-lombardia/card_bottone.html %}
            </div>
          </div>
        </li>
        <li class="splide__slide">
          <div class="it-single-slide-wrapper">
            <div class="card-wrapper card-space">
            {% include esempi-lombardia/card_header.html %}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
{% highlight html %}
<div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols splide" data-bs-carousel-splide>
 . . .
  <div class="splide__track pl-lg-3 pr-lg-3"
      style='background-image: url("{{ site.baseurl }}/dist/assets/img/bike-sharing.jpg");
              background-size: cover;'>
 . . . 
{% endhighlight %}

Rispetto al precedente esempio **Titolo e Card** qui è stato aggiunto:
- una `background-image` sul *div* **contenitore delle card**

Si noti che nonostante le dimensioni delle card siano tra loro anche molto differenti, il carousel riesce a gestirle rimanendo stabile.


{% capture callout %}
####  <svg class="icon icon-info icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use></svg> Riferimenti
Il contenuto di questa pagina si riferisce ai seguenti punti della {{ site.data.short.dt }}:
- **[Carousel]({{ site.baseurl }}/docs/componenti/carousel/)**
{% endcapture %}{% include callout.html content=callout type="info" %}


{% capture callout %}
####  <svg class="icon icon-danger icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close-circle"></use></svg> Card speciali
Nei carousel, le **[Card speciali]({{ site.baseurl }}/docs/componenti/carousel/#card-speciali)**, mostrate nella {{ site.data.short.dt }}, **NON VANNO UTILIZZATE**.
{% endcapture %}{% include callout.html content=callout type="danger" %}
