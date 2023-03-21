---
layout: docs
owl: true
title: Carousel (versione legacy)
group: informazioni
toc: yes
---


{% capture callout %}
####  <svg class="icon icon-danger icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close-circle"></use></svg> Owl Carousel OBSOLETO!
Il plugin **[Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html)** utilizzato da {{ site.data.short.bi }} per il componente Carousel, **non è più supportato**.  
Questa versione legacy del Carousel è lasciata ancora disponibile solo per non costringere al passaggio immediato al nuovo plugin.

**Nota:** per **fare funzionare il vecchio** plugin però è necessario seguire le **istruzioni specifiche** contenute nel paragrafo **[Implementazione]({{ site.baseurl }}/docs/componenti/carousel-legacy/#implementazione)** nella relativa {{ site.data.short.dt }}.  
Si raccomanda inoltre di sostituirlo con il nuovo il prima possibile.
{% endcapture %}{% include callout.html content=callout type="danger" %}


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
  <div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols" >
    <div class="it-header-block">
      <div class="it-header-block-title">
        <h2 class="no_toc">Titolo del Carousel</h2>
      </div>
    </div>  
    <div class="it-carousel-all owl-carousel it-card-bg" data-bs-carousel-splide>
      <div class="it-single-slide-wrapper">
        <div class="card-wrapper card-space">
        {% include esempi-lombardia/card_semplice.html %}
        </div>
      </div>
      <div class="it-single-slide-wrapper">
        <div class="card-wrapper card-space">
        {% include esempi-lombardia/card_bottone.html %}
        </div>
      </div>
      <div class="it-single-slide-wrapper">
        <div class="card-wrapper card-space">
        {% include esempi-lombardia/card_header.html %}
        </div>
      </div>
      <div class="it-single-slide-wrapper">
        <div class="card-wrapper card-space">
        {% include esempi-lombardia/card_semplice.html %}
        </div>
      </div>
      <div class="it-single-slide-wrapper">
        <div class="card-wrapper card-space">
        {% include esempi-lombardia/card_bottone.html %}
        </div>
      </div>
      <div class="it-single-slide-wrapper">
        <div class="card-wrapper card-space">
        {% include esempi-lombardia/card_header.html %}
        </div>
      </div>
    </div>
  </div>
</div>
{% highlight html %}
<div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols" data-bs-carousel-splide>
  <div class="it-header-block">
    <div class="it-header-block-title">
      <h2 class="no_toc">Titolo del Carousel</h2>
    </div>
  </div>
  <div class="it-carousel-all owl-carousel it-card-bg">
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper card-space">
       include esempi-lombardia/card_semplice.html
      </div>
    </div>
    . . .
    . . .
  </div>
</div>
{% endhighlight %}

In questo esempio sono state usate in particolare le classi:
- `it-header-block` e `it-header-block-title` per i *div* nidificati contenenti il **titolo**
- `it-card-bg` sul *div* del **contenitore delle card**
- `card-space` su **tutti** i *div* contenti le **singole card** per distanziarle tra loro.


### Immagini grandi
<div class="bd-example">
  <div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols" data-bs-carousel-splide>
    <div class="it-carousel-all owl-carousel it-img-card it-big-img it25-carousel-autoplay">
      {% include esempi-lombardia/slides.html %}
    </div>
  </div>
</div>
{% highlight html %}
<div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols" data-bs-carousel-splide>
  <div class="it-carousel-all owl-carousel it-img-card it-big-img it25-carousel-autoplay">
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper">
        <div class="card card-img">
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
    . . .
    . . .
  </div>
</div>
{% endhighlight %}

In questo esempio sono state usate in particolare:
- sul *div* del **contenitore delle card** le classi
  - `it-img-card` per la gestione di **card immagine**
  - `it-big-img` per ottenere una **dimensione grande delle immagini**
  - `it25-carousel-autoplay` per attivare lo **scorrimento automatico** delle immagini.
- su **tutti** i *div* di classe **card-wrapper** un **ulteriore div** con le classi
  - `card` e `card-img` per la **formattazione delle singole card immagine**

E' da notare che le immagini vengono **tagliate e riproporzionate automaticamente** in modo da avere tutte le stesse dimensioni.

### Immagini standard
<div class="bd-example">
  <div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols" data-bs-carousel-splide>
    <div class="it-carousel-all owl-carousel it-img-card it-standard-image it25-carousel-nav">
      {% include esempi-lombardia/slides.html %}
    </div>
  </div>
</div>
{% highlight html %}
<div class="bd-example">
  <div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols" data-bs-carousel-splide>
    <div class="it-carousel-all owl-carousel it-img-card it-standard-image it25-carousel-nav">
       include esempi-lombardia/slides.html
    </div>
  </div>
</div>
{% endhighlight %}

In questo esempio, rispetto al precedente, sono state usate, sul *div* del **contenitore delle card**, le classi:
- `it-standard-image` che dà **dimensioni inferiori alle immagini**, consentendo, su schermi grandi, di vederne 3 alla volta.
- `it25-carousel-nav` che fa apparire le **frecce di avanzamento/ritorno**.

Si noti che i **punti** sotto le slide, su schermi grandi, sono **solo 2**, ed ognuno **scorre 3 immagini alla volta**, così come le frecce.  
**Su schermi piccoli invece i punti diventano 6**, e come le frecce, scorrono **una sola immagine** alla volta.


### Sfondo Immagine
<div class="bd-example">
  <style>
  .owl-dots {
    background-color: #fff;
  }
  </style>
  <div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols">
    <div class="it-header-block">
      <div class="it-header-block-title">
        <h2 class="no_toc">Titolo del Carousel</h2>
      </div>
    </div>  
    <div class="it-carousel-all owl-carousel it-card-bg"
        style='background-image: url("{{ site.baseurl }}/dist/assets/img/bike-sharing.jpg");
               background-size: cover;'>
      <div class="it-single-slide-wrapper">
        <div class="card-wrapper card-space">
        {% include esempi-lombardia/card_semplice.html %}
        </div>
      </div>
      <div class="it-single-slide-wrapper">
        <div class="card-wrapper card-space">
        {% include esempi-lombardia/card_bottone.html %}
        </div>
      </div>
      <div class="it-single-slide-wrapper">
        <div class="card-wrapper card-space">
        {% include esempi-lombardia/card_header_long.html %}
        </div>
      </div>
      <div class="it-single-slide-wrapper">
        <div class="card-wrapper card-space">
        {% include esempi-lombardia/card_semplice.html %}
        </div>
      </div>
      <div class="it-single-slide-wrapper">
        <div class="card-wrapper card-space">
        {% include esempi-lombardia/card_bottone.html %}
        </div>
      </div>
      <div class="it-single-slide-wrapper">
        <div class="card-wrapper card-space">
        {% include esempi-lombardia/card_header_long.html %}
        </div>
      </div>
    </div>
  </div>""
</div>
{% highlight html %}
<style>
.owl-dots {
  background-color: #fff;
}
</style>
<div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols">
 . . .
 <div class="it-carousel-all owl-carousel it-card-bg"
     style='background-image: url("{{ site.baseurl }}/dist/assets/img/bike-sharing.jpg");
            background-size: cover;'>
 . . .              
{% endhighlight %}

Rispetto al precedente esempio **Titolo e Card** qui è stato aggiunto:
- una `background-image` sul *div* **contenitore delle card**
- uno sfondo bianco per la classe `owl-dots` che caratterizza il **div che contiene i punti cliccabili**.
Quest'ultimo *div* tra l'altro, **non va specificato** nel codice HTML, perché **viene automaticamente aggiunto via Javascript** da *Bootstrap Regione Lombardia*.

Si noti che nonostante le dimensioni delle card siano tra loro anche molto differenti, il carousel riesce a gestirle rimanendo stabile.


### Schema riepilogativo
Questo schema cerca di evidenziare ordinatamente le classi utilizzate in questi esempi e le combinazioni valide.  
Il criterio secondo cui è stato scritto è il seguente:
1. le classi sono **identate come i div** cui vanno associate
2. per il *contenitore delle immagini* **ogni riga mostra una delle combinazioni possibili**

<pre>
// Contenitore principale
it-carousel-wrapper + it-carousel-landscape-abstract-three-cols

   // Titolo (facoltativo)
   it-header-block
      it-header-block-title

   // Contenitore delle card o immagini
   it-carousel-all + owl-carousel
          "               "       + it-card-bg
          "               "       + it-img-card
          "               "       +     "       + it-big-img
          "               "       +     "       + it-standard-image
                                  // utilizzabili indipendentemente
          "               "       +  it25-carousel-nav
          "               "       +  it25-carousel-autoplay

      // Uno per ogni card o immagine                            
      it-single-slide-wrapper
         card-wrapper
              "       + card-space
</pre>



{% capture callout %}
####  <svg class="icon icon-info icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use></svg> Riferimenti
Il contenuto di questa pagina si riferisce ai seguenti punti della {{ site.data.short.dt }}:
- **[Carousel-legacy]({{ site.baseurl }}/docs/componenti/carousel-legacy/)**
{% endcapture %}{% include callout.html content=callout type="info" %}


{% capture callout %}
####  <svg class="icon icon-danger icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close-circle"></use></svg> Card speciali
Nei carousel, le **[Card speciali]({{ site.baseurl }}/docs/componenti/carousel/#card-speciali)**, mostrate nella {{ site.data.short.dt }}, **NON VANNO UTILIZZATE**.
{% endcapture %}{% include callout.html content=callout type="danger" %}
