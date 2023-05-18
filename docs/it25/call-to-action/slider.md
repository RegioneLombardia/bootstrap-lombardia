---
layout: it25_docs
title: Slider
group: call-to-action
toc: yes
---

Gli **Slider** offrono la possibilità di selezionare un valore da un intervallo posto lungo una barra in maniera visiva ed immediata, presentando l’intera gamma di scelte possibili per l’utente.  
Queste componenti sono ideali per regolare impostazioni come volume e luminosità o per applicare filtri e possono utilizzare icone su entrambe le estremità della barra per rappresentare una scala numerica o relativa.

<div class="bd-example">
    <input type="range" class="form-range" id="customRange1">
</div>

{% highlight html %}
<input type="range" class="form-range" id="customRange1">
{% endhighlight %}

## Slider con tooltip

Lo slider con tooltip è un componente javascript. Per attivarlo si deve invocare la funzione:

{% highlight html %}
new bootstrap.it25().gooeyRangeSlider(document.querySelector('#single-thumb'), {
  value: [0, 10],
  thumbsDisabled: [true, false],
  rangeSlideDisabled: true
}, 1, (value) => console.log(value))
{% endhighlight %}

e deve essere incluso tra gli script della pagina il seguen CDN:

{% highlight html %}
<script src="https://cdn.jsdelivr.net/npm/range-slider-input@2.4/dist/rangeslider.umd.min.js"></script>
{% endhighlight %}

Il primo parametro della funzione è l'elemento da inizializzare. Il paramentro nelle parentesi quadre determina il **valore iniziale** del range. Mentre l'ultimo parametro della funziona serve per definire una **callback** sul **change** del valore

<div class="bd-example">
    <div id="single-thumb" class="slider-container" style="margin-top:20px">
    <div class="slider"></div>
    <div class="blobs centered">
        <div class="blob value centered"></div>
        <div class="blob centered"></div>
    </div>
    <div class="value-text centered"></div>
    </div>
</div>

{% highlight html %}
<div id="single-thumb" class="slider-container">
  <div class="slider"></div>
  <div class="blobs centered">
    <div class="blob value centered"></div>
    <div class="blob centered"></div>
  </div>
  <div class="value-text centered"></div>
</div>
{% endhighlight %}
